/* jFinance service worker.
 *
 * The app ships a manifest and is installable, so people add it to a home
 * screen — but with no service worker a cold start with no connection got a
 * browser error page, which makes "your changes are saved locally and sync when
 * you're back online" a promise the app couldn't keep. This caches the shell and
 * the built assets so an offline launch works.
 *
 * Strategy:
 *   - Navigations: network first, fall back to the cached shell. A deploy is
 *     picked up on the next online load rather than being pinned by the cache.
 *   - Built assets: cache first, refreshed in the background. Vite filenames are
 *     content-hashed, so a cached hit is by definition the right bytes.
 *   - Anything cross-origin (Firestore, Google Fonts) is left entirely alone.
 */
const VERSION = 'jfinance-v2';
const SHELL_CACHE = VERSION + '-shell';
const ASSET_CACHE = VERSION + '-assets';
const SHELL_URL = new URL('./', self.registration.scope).href;

// Fetches the real index.html and stores it under a fixed key.
//
// This is deliberately never taken from whatever a navigation happened to
// return: on GitHub Pages a deep link like /app/transactions is answered with
// 404.html (a redirect shim, served with a 404 status), and v1 of this worker
// cached that as the shell — so going offline and reopening the app landed on a
// stub that needs the network to do anything.
async function cacheShell() {
  try {
    const response = await fetch(SHELL_URL, { cache: 'reload' });
    if (response.ok) {
      const cache = await caches.open(SHELL_CACHE);
      await cache.put(SHELL_URL, response.clone());
    }
  } catch {
    // Offline at install time; the next successful navigation will do it.
  }
}

self.addEventListener('install', event => {
  event.waitUntil(cacheShell());
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => !k.startsWith(VERSION)).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request);
        if (fresh.ok && request.url === SHELL_URL) {
          const cache = await caches.open(SHELL_CACHE);
          cache.put(SHELL_URL, fresh.clone());
        } else {
          // A deep link, or a redirect shim — refresh the shell out of band so
          // the offline copy stays current without being taken from this
          // response.
          event.waitUntil(cacheShell());
        }
        return fresh;
      } catch (err) {
        const cache = await caches.open(SHELL_CACHE);
        const cached = await cache.match(SHELL_URL);
        if (cached) return cached;
        throw err;
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(ASSET_CACHE);
    const cached = await cache.match(request);
    if (cached) return cached;

    // One retry: on a phone a script request that drops mid-flight surfaces as
    // "Importing a module script failed" and takes the whole route down, and a
    // patchy connection shouldn't cost a page.
    let response;
    try {
      response = await fetch(request);
    } catch {
      await new Promise(resolve => setTimeout(resolve, 400));
      response = await fetch(request);
    }

    // Only successful responses are worth keeping. Caching a 404 for a hash that
    // a redeploy removed would make the failure permanent for this device.
    if (response && response.ok) cache.put(request, response.clone());
    return response;
  })());
});
