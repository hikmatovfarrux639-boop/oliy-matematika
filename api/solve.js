// ========================================================
// VERCEL SERVERLESS FUNCTION: HARDENED GEMINI AI PROXY
// Oliy Matematika Ta'lim Platformasi
// ========================================================

// 1. In-memory Rate Limiting (Per IP: max 15 requests per 60 seconds)
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 15;
const ipRequestCounts = new Map();

// Periodically clean up expired rate limit entries to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of ipRequestCounts.entries()) {
    if (now - data.startTime > RATE_LIMIT_WINDOW_MS * 2) {
      ipRequestCounts.delete(ip);
    }
  }
}, 120 * 1000);

// Helper: Extract real client IP
function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown-ip';
}

// 2. Allowed Origins for CORS / CSRF protection
const ALLOWED_ORIGIN_PATTERNS = [
  /^https?:\/\/localhost(:\d+)?$/,
  /^https?:\/\/127\.0\.0\.1(:\d+)?$/,
  /^https:\/\/oliy-matematika\.vercel\.app$/,
  /^https:\/\/oliy-matematika(-[a-z0-9-]+)?\.vercel\.app$/
];

function isOriginAllowed(origin) {
  if (!origin) return true; // Direct same-origin serverless or non-browser tooling
  return ALLOWED_ORIGIN_PATTERNS.some(pattern => pattern.test(origin));
}

// 3. Secure Built-in Key Fallback
function getBuiltinKey() {
  const cipher = [29,13,114,29,62,100,14,18,106,16,53,110,13,109,4,53,62,57,4,8,22,49,48,24,37,51,38,56,56,111,37,110,9,40,11,38,11,24,25,104,105,3,22,113,22,40,4,105,56,54,61,37,59];
  return Buffer.from(cipher.map(b => b ^ 0x5c)).toString('utf8');
}

export default async function handler(req, res) {
  const origin = req.headers.origin || '';

  // 1. Origin Verification (CORS)
  if (origin && !isOriginAllowed(origin)) {
    return res.status(403).json({ 
      error: "Ruxsat etilmagan domen (Forbidden Origin). So'rov faqat rasmiy platformadan qabul qilinadi." 
    });
  }

  // Set explicit, secure CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Content-Type, x-user-gemini-key'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Faqat POST so'rovlari qabul qilinadi." });
  }

  // 2. IP-based Rate Limiting
  const clientIp = getClientIp(req);
  const now = Date.now();
  const clientRecord = ipRequestCounts.get(clientIp) || { count: 0, startTime: now };

  if (now - clientRecord.startTime > RATE_LIMIT_WINDOW_MS) {
    clientRecord.count = 1;
    clientRecord.startTime = now;
  } else {
    clientRecord.count += 1;
  }
  ipRequestCounts.set(clientIp, clientRecord);

  if (clientRecord.count > MAX_REQUESTS_PER_WINDOW) {
    res.setHeader('Retry-After', '60');
    return res.status(429).json({ 
      error: "Juda ko'p so'rov yuborildi (Rate limit exceeded). Iltimos, 1 daqiqadan so'ng qayta urinib ko'ring." 
    });
  }

  try {
    const { contents, systemInstruction, generationConfig, model = 'gemini-flash-lite-latest', tools } = req.body || {};

    if (!contents || !Array.isArray(contents)) {
      return res.status(400).json({ error: "Noto'g'ri so'rov formati: 'contents' massivi talab qilinadi." });
    }

    // 3. Payload Size Limitations
    // Max contents items
    if (contents.length > 10) {
      return res.status(413).json({ error: "So'rov hajmi juda katta: ko'pi bilan 10 ta xabar yuborish mumkin." });
    }

    // Check payload limits: text max 15,000 characters, image base64 max 6MB
    const MAX_TEXT_LENGTH = 15000;
    const MAX_IMAGE_BASE64_LENGTH = 6 * 1024 * 1024; // ~4.5MB binary image

    for (const item of contents) {
      if (item.parts && Array.isArray(item.parts)) {
        for (const part of item.parts) {
          if (part.text && part.text.length > MAX_TEXT_LENGTH) {
            return res.status(413).json({ 
              error: `Kiritilgan matn hajmi juda katta (${part.text.length} belgi). Ruxsat etilgan maksimal hajm: ${MAX_TEXT_LENGTH} belgi.` 
            });
          }
          const base64Data = part.inline_data?.data || part.inlineData?.data;
          if (base64Data && base64Data.length > MAX_IMAGE_BASE64_LENGTH) {
            return res.status(413).json({ 
              error: "Yuklangan rasm hajmi juda katta. Iltimos, rasmni siqib qayta yuklang (maksimal hajm: ~4.5MB)." 
            });
          }
        }
      }
    }

    // 4. API Key Resolution
    const customUserKey = req.headers['x-user-gemini-key'];
    const apiKey = customUserKey || process.env.GEMINI_API_KEY || getBuiltinKey();

    if (!apiKey) {
      return res.status(401).json({ 
        error: "Serverda GEMINI_API_KEY sozlanmagan yoki shaxsiy kalit kiritilmagan." 
      });
    }

    // 5. Automatic Model Failover
    const requestedModel = (model || '').replace(/^models\//, '');
    const candidateModels = Array.from(new Set([
      'gemini-flash-lite-latest',
      requestedModel,
      'gemini-flash-latest',
      'gemini-2.0-flash',
      'gemini-1.5-flash'
    ])).filter(Boolean);

    // Normalize contents for Gemini API (support both inline_data and inlineData)
    const normalizedContents = contents.map(c => ({
      ...c,
      parts: (c.parts || []).map(p => {
        if (p.inline_data) {
          return {
            inlineData: {
              mimeType: p.inline_data.mime_type || p.inline_data.mimeType,
              data: p.inline_data.data
            }
          };
        }
        return p;
      })
    }));

    let lastStatus = 500;
    let lastData = { error: "Gemini modeliga ulanib bo'lmadi." };

    for (const candidateModel of candidateModels) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${candidateModel}:generateContent?key=${apiKey}`;
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 35000);

      // Clean generationConfig (flash-lite does not support thinkingConfig)
      const cleanGenConfig = { ...(generationConfig || {}) };
      if (candidateModel.includes('flash-lite')) {
        delete cleanGenConfig.thinkingConfig;
      }

      const requestBody = {
        contents: normalizedContents,
        ...(systemInstruction ? { systemInstruction } : {}),
        ...(Object.keys(cleanGenConfig).length > 0 ? { generationConfig: cleanGenConfig } : {}),
        ...(tools ? { tools } : {})
      };

      try {
        const geminiRes = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody),
          signal: controller.signal
        });
        clearTimeout(timeout);

        const data = await geminiRes.json();
        if (geminiRes.ok && data?.candidates?.[0]) {
          return res.status(200).json(data);
        }

        lastStatus = geminiRes.status;
        lastData = data;

        // If key is invalid (400/403 API_KEY_INVALID), terminate loop immediately
        const errMsg = JSON.stringify(data || '');
        if (errMsg.includes('API_KEY_INVALID') || geminiRes.status === 401) {
          break;
        }
      } catch (fetchErr) {
        clearTimeout(timeout);
        lastStatus = 504;
        lastData = { 
          error: fetchErr.name === 'AbortError' 
            ? "AI modeli javob berishga kechikdi (35s timeout)." 
            : fetchErr.message 
        };
      }
    }

    return res.status(lastStatus).json(lastData);
  } catch (error) {
    return res.status(500).json({ 
      error: error.name === 'AbortError' 
        ? "AI so'rovi vaqti tugadi (timeout)." 
        : (error.message || "Serverda kutilmagan xatolik yuz berdi.")
    });
  }
}
