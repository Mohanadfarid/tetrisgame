const VERSION = "v1";

const CACHE_NAME = `tetris-${VERSION}`;

const APP_STATIC_RESOURCES = [
  "/", // The root URL, usually redirects to index.html
  "/index.html", // Main HTML file
  "/favicon.ico", // Favicon
  "/logo.webp", // Logo
  "/manifest.json", // PWA manifest
  "/robots.txt", // Robots file
  "/static/js/787.0ef42b96.chunk.js", // Add this JS file
  "/static/js/main.0c1fe0d4.js", // Add the main JS file
  "/static/css/main.8ef24756.css", // CSS build file (check actual name after build)
  "/sw.js", // Service worker itself
  "/icons/icon-192x192.png", // Cache icons for PWA compatibility
  "/icons/icon-512x512.png",
  "/icons/manifest-icon-192.maskable.png",
  // Add missing JS files if necessary
  "/hook-exec.js",
  "/detector-exec.js"

];

// setting initial app assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(APP_STATIC_RESOURCES);
    })()
  );
});

// clearing old assets
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
      await clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  console.log("fetch intercepted ", event.url);

  // As a single page app, direct app to always go to cached home page.
  if (event.request.mode === "navigate") {
    event.respondWith(caches.match("/"));
    return;
  }

  // For all other requests, go to the cache first, and then the network.
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request.url);
      if (cachedResponse) {
        // Return the cached response if it's available.
        return cachedResponse;
      }
      // If resource isn't in the cache, return a 404.
      return new Response(null, { status: 404 });
    })()
  );
});
