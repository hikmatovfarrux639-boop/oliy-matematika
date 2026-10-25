// Vercel Serverless Function: Secure Gemini AI Proxy for Oliy Matematika
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-user-gemini-key'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Faqat POST so'rovlari qabul qilinadi." });
  }

  try {
    const { contents, systemInstruction, generationConfig, model = 'gemini-2.5-flash', tools } = req.body || {};

    if (!contents || !Array.isArray(contents)) {
      return res.status(400).json({ error: "Noto'g'ri so'rov: 'contents' massivi talab qilinadi." });
    }

    // Determine API Key:
    // 1. User provided in request header (custom user key)
    // 2. Server environment variable GEMINI_API_KEY (configured in Vercel dashboard)
    const customUserKey = req.headers['x-user-gemini-key'];
    const apiKey = customUserKey || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(401).json({ 
        error: "Gemini API kaliti topilmadi. Iltimos, Vercel sozlamalarida GEMINI_API_KEY o'zgaruvchisini qo'shing yoki sayt sozlamalaridan shaxsiy kalitingizni kiriting." 
      });
    }

    // Clean model name
    const cleanModel = model.replace(/^models\//, '');
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${cleanModel}:generateContent?key=${apiKey}`;

    const requestBody = {
      contents,
      ...(systemInstruction ? { systemInstruction } : {}),
      ...(generationConfig ? { generationConfig } : {}),
      ...(tools ? { tools } : {})
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 25000);

    const geminiRes = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });

    clearTimeout(timeout);

    const data = await geminiRes.json();
    return res.status(geminiRes.status).json(data);
  } catch (error) {
    return res.status(500).json({ 
      error: error.name === 'AbortError' ? "AI so'rovi vaqti tugadi (timeout)." : (error.message || "Serverda noma'lum xatolik yuz berdi.")
    });
  }
}
