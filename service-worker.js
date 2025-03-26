const CACHE_NAME = 'skylanders-tracker-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/inventory.html',
  '/totals.html',
  '/data.js',
  '/style.css',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
