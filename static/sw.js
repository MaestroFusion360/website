// Bump this when you want clients to pick up updated precached assets.
const CACHE_VERSION = "v2";
const CACHE_PREFIX = "mf360-cache-";
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_VERSION}`;
const OFFLINE_FALLBACK = "./index.html";
const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon.ico",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/fusion_icon.svg",
  "./assets/python_icon.svg",
  "./assets/svelte_icon.svg",
  "./assets/c_sharp_icon.svg",
  "./assets/nx_icon.png",
  "./assets/html_icon.svg",
  "./assets/css_icon.svg",
  "./assets/tailwind_icon.svg",
  "./assets/javascript_icon.svg",
  "./assets/typescript_icon.svg",
  "./assets/telegram_icon.svg",
  "./assets/excel_icon.svg",
  "./assets/vscode_icon.svg",
  "./assets/gmail_icon.svg",
  "./assets/gb_icon.svg",
  "./assets/ru_icon.svg",
  "./assets/technology_icon.svg",
  "./assets/editor_main.png",
  "./assets/youtube_icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) =>
          key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME
            ? caches.delete(key)
            : null
        )
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(OFFLINE_FALLBACK, clone));
          }
          return response;
        })
        .catch(() =>
          caches
            .match(OFFLINE_FALLBACK)
            .then((cached) => cached || Response.error())
        )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          const shouldCache =
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === "basic";

          if (shouldCache) {
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(event.request, networkResponse.clone()));
          }

          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
