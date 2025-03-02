const CACHE_NAME = 'scrollers-v2';
const ASSETS = [
  '/scrollers1/',
  '/scrollers1/index.html',
  '/scrollers1/styles.css',
  '/scrollers1/images/icon-192x192.png',
  '/scrollers1/images/icon-512x512.png',
  '/scrollers1/images/favicon.ico'
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch cached assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
