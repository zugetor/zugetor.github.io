// Retired service worker. The Lyra Car Assistant demo briefly lived at the root of this domain and
// registered a worker for the whole site; the demo now lives at /Lyra-Car-Assistant/ with its own.
// Browsers that still hold the old registration fetch this file on their next visit, and it removes itself.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    await self.registration.unregister();
    const pages = await self.clients.matchAll({ type: "window" });
    for (const page of pages) page.navigate(page.url);
  })());
});
