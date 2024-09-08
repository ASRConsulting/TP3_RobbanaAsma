const CACHE_NAME = 'cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'nos-offres.html',
  'contact.html',
  'style/css/styles.css',
  'images/',
  'images/pwa/192-maskable-icon.png',
  'images/pwa/144-maskable-icon.png',
  'images/pwa/maskable-icon.png',
  'tailwind.config.js',
  'validation.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
