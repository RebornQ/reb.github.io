importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.setConfig({debug: false});

    version = "v5";
    versionTag = ".0";
    versionName = version + versionTag;

    workbox.core.setCacheNameDetails({
        prefix: "Reborn",
        suffix: versionName,
        precache: 'precache',
        runtime: 'runtime'
    });


    // 跳过等待期
    workbox.core.skipWaiting();
    // 一旦激活就开始控制任何现有客户机（通常是与skipWaiting配合使用）
    workbox.core.clientsClaim();
    // 删除过期缓存
    workbox.precaching.cleanupOutdatedCaches();

    workbox.precaching.precacheAndRoute([
        {
            "url": "/index.html",
            "revision": "4a7fec179500e25c550e352bc7769149"
        },
        {
            "url": "https://cdn.jsdelivr.net/gh/RebornQ/rebornQ.github.io/css/style.min.css",
            "revision": "7874eca090efe385534dd977d279fa7b"
        },
        {
            "url": "/svg/loading.min.svg",
            "revision": "4055d59e164001e9375d89ed9ddc38f2"
        }
    ], {});

    workbox.routing.registerRoute(/(?:\/)$/,
        new workbox.strategies.NetworkFirst({
            cacheName: "html-" + versionName,
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxAgeSeconds: 60 * 60 * 24 * 2,
                    // purgeOnQuotaError: !0
                })
            ]
        }), "GET");

    workbox.routing.registerRoute(
        /\.(?:js|css)$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'static-resources-' + versionName
        })
    );

    workbox.routing.registerRoute(
        /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
        new workbox.strategies.CacheFirst({
            cacheName: "images-" + versionName,
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 100,
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                    // purgeOnQuotaError: !0
                })
            ]
        }), "GET");

    // Fonts
    workbox.routing.registerRoute(
        /\.(?:eot|ttf|woff|woff2)$/,
        new workbox.strategies.CacheFirst({
            cacheName: "fonts-" + versionName,
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 1000,
                    maxAgeSeconds: 60 * 60 * 24 * 30
                }),
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200]
                })
            ]
        })
    );

    workbox.routing.registerRoute(
        /^https:\/\/fonts\.googleapis\.com/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'google-fonts-stylesheets-' + versionName
        })
    );

    workbox.routing.registerRoute(
        /^https:\/\/fonts\.gstatic\.com/,
        new workbox.strategies.CacheFirst({
            cacheName: 'google-fonts-webfonts-' + versionName,
            plugins: [
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200]
                }),
                new workbox.expiration.ExpirationPlugin({
                    maxAgeSeconds: 60 * 60 * 24 * 365,
                    maxEntries: 30
                })
            ]
        })
    );

    // external resources
    /*workbox.routing.registerRoute(
        /(^https:\/\/cdn\.jsdelivr\.net.*?(\.js|\.css))|(^https:\/\/cdnjs\.cloudflare\.com)/,
        new workbox.strategies.CacheFirst({
            cacheName: "external-resources-" + versionName,
            plugins: [
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 1000,
                    maxAgeSeconds: 60 * 60 * 24 * 30
                }),
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200]
                })
            ]
        })
    );*/

    workbox.googleAnalytics.initialize({});

    // Call Activate Event to remove old cache
    self.addEventListener('activate', function (event) {
        event.waitUntil(
            caches.keys().then(function (cacheList) {
                return Promise.all(
                    cacheList.map(function (cacheName) {
                        if (/(v[\d+\.]+)/.test(cacheName) === false || versionName !== RegExp.$1) {
                            // When it doesn't match any condition, delete it.
                            console.info('version changed, clean the cache, SW: deleting ' + cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        );
        return self.clients.claim();
    });
} else {
    console.log(`Boo! Workbox didn't load 😬`)
}