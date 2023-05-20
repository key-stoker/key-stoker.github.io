var version = '8';
var cacheName = 'pwa-keys-v' + version;
var appShellFilesToCache = [
    //Pages
    '/index.html',
    //Styles
    '/style/css/main.css',
    //Javascript
    '/javascript/server.js',
    '/javascript/main.js',
    //Library
    '/javascript/library/updatedialog.js',
    '/javascript/library/window_managment.js'
];

var dataCacheName = 'pwa-tunime-data-v' + version;

self.addEventListener('install', event => {
    console.log('[SW]: Installed');
    self.skipWaiting();
    event.waitUntil(caches.open(cacheName).then((cache) => {
        console.log('[SW]: Caching App Shell');
        return cache.addAll(appShellFilesToCache);
    }));
});

self.addEventListener('activate', event => {
    console.log('[SW]: Activate');
    //Cleaning caching
    caches.keys().then(function (names) {
        for (let name of names)
            if (name != cacheName) caches.delete(name);
    });
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            } else {
                return fetch(event.request);
            }
        })
    )
});