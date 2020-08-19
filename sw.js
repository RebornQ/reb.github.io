importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.setConfig({ debug: false });

    workbox.core.setCacheNameDetails({
        prefix: "Reborn",
        suffix: 'v2',
        precache: 'precache',
        runtime: 'runtime'
    });

    // 一旦激活就开始控制任何现有客户机（通常是与skipWaiting配合使用）
    workbox.core.skipWaiting();
    // 跳过等待期
    workbox.core.clientsClaim();
    // 删除过期缓存
    workbox.precaching.cleanupOutdatedCaches();

    workbox.precaching.precacheAndRoute([
        {
            "url": "/index.html",
            "revision": "8c662f5186e0482bf5ad382beeb71d8f"
        },
        {
            "url": "/js/theme.min.js",
            "revision": "7bc7989e979c4a19d97db3ab311a80fe"
        },
        {
            "url": "/css/style.min.css",
            "revision": "f03a2ec71b16efbe4f24352e542c93a9"
        }
    ], {});

    workbox.routing.registerRoute(/(?:\/)$/,
        new workbox.strategies.NetworkFirst({
            cacheName: "html-" + workbox.core.cacheNames.suffix,
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
            cacheName: 'static-resources-' + workbox.core.cacheNames.suffix
        })
    );

    workbox.routing.registerRoute(
        /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
        new workbox.strategies.CacheFirst({
            cacheName: "images-" + workbox.core.cacheNames.suffix,
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
            cacheName: "fonts-" + workbox.core.cacheNames.suffix,
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
            cacheName: 'google-fonts-stylesheets-' + workbox.core.cacheNames.suffix
        })
    );

    workbox.routing.registerRoute(
        /^https:\/\/fonts\.gstatic\.com/,
        new workbox.strategies.CacheFirst({
            cacheName: 'google-fonts-webfonts-' + workbox.core.cacheNames.suffix,
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
    workbox.routing.registerRoute(
        /(^https:\/\/cdn\.jsdelivr\.net.*?(\.js|\.css))|(^https:\/\/cdnjs\.cloudflare\.com)/,
        new workbox.strategies.CacheFirst({
            cacheName: "external-resources-" + workbox.core.cacheNames.suffix,
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

    workbox.googleAnalytics.initialize({});
} else {
    console.log(`Boo! Workbox didn't load 😬`)
}