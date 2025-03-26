const CACHE_NAME = "skylanders-cache-v1";
const urlsToCache = [
  "Skylanders-Site/",
  "Skylanders-Site/home.html",
  "Skylanders-Site/index.html",
  "Skylanders-Site/inventory.html",
  "Skylanders-Site/totals.html",
  "Skylanders-Site/data.js",
  "Skylanders-Site/manifest.json",
  "Skylanders-Site/Bash.png"
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Activate event (for future cache cleanup)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});
