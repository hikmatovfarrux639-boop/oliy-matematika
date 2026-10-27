// Service Worker for Oliy Matematika PWA
const CACHE_NAME = 'oliy-matematika-v1.3';
const PRECACHE_URLS = [
  '/',
  '/favicon.svg',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle GET requests and http/https
  if (request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;

  // Let browser natively handle hashed _astro assets (CSS, JS, media) with Vercel's immutable cache.
  // This completely eliminates stale CSS chunk mismatch or blank/unstyled pages during deployments.
  if (url.pathname.startsWith('/_astro/')) {
    return;
  }

  // HTML and page navigations: Network-first with cache fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            return cachedResponse || caches.match('/');
          });
        })
    );
  }
});
