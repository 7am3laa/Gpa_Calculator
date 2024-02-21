'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "65e5537d8cecaf05f3faaf7877d42c74",
"assets/NOTICES": "56d6205dfac5b148c764a9968c6594a6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "ff58e5487253aea9e08b25d999f1d2bc",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"Gpa_Calculator/.git/config": "67df3dd07766cfeec89ca03fd589b05a",
"Gpa_Calculator/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Gpa_Calculator/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"Gpa_Calculator/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Gpa_Calculator/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Gpa_Calculator/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"Gpa_Calculator/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Gpa_Calculator/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Gpa_Calculator/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"Gpa_Calculator/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Gpa_Calculator/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Gpa_Calculator/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Gpa_Calculator/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Gpa_Calculator/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Gpa_Calculator/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Gpa_Calculator/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"Gpa_Calculator/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Gpa_Calculator/.git/index": "b630ee14fe070e1e647b29965d0531ae",
"Gpa_Calculator/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Gpa_Calculator/.git/logs/HEAD": "d1dc1446cbdb59603c27bfb89220651b",
"Gpa_Calculator/.git/logs/refs/heads/main": "d1dc1446cbdb59603c27bfb89220651b",
"Gpa_Calculator/.git/logs/refs/remotes/origin/HEAD": "d1dc1446cbdb59603c27bfb89220651b",
"Gpa_Calculator/.git/objects/pack/pack-984ed11316a201e8d67288a0c49480e7c95dcb80.idx": "3db16f741a55a7563bb9ad4a1d449219",
"Gpa_Calculator/.git/objects/pack/pack-984ed11316a201e8d67288a0c49480e7c95dcb80.pack": "b69e9b96d605dabe7aac869ec6113fce",
"Gpa_Calculator/.git/objects/pack/pack-984ed11316a201e8d67288a0c49480e7c95dcb80.rev": "4f0cc73bf69d8512e3f63c86be3f8c20",
"Gpa_Calculator/.git/packed-refs": "f407041ba3e624b826bf4bde7eec1586",
"Gpa_Calculator/.git/refs/heads/main": "39ef6ce6236acfee39ef5d8e2a4109ea",
"Gpa_Calculator/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"Gpa_Calculator/README.md": "996fdf609978fa98de4296ec8295af03",
"icons/Icon-192.png": "ff58e5487253aea9e08b25d999f1d2bc",
"icons/Icon-512.png": "ff58e5487253aea9e08b25d999f1d2bc",
"icons/Icon-maskable-192.png": "ff58e5487253aea9e08b25d999f1d2bc",
"icons/Icon-maskable-512.png": "ff58e5487253aea9e08b25d999f1d2bc",
"index.html": "102688262aad412bd9da9c03c8530b8f",
"/": "102688262aad412bd9da9c03c8530b8f",
"main.dart.js": "18391582acd171f041e7e4c2c8b50e4e",
"manifest.json": "9a259b666e55b8733446a9c47ddeead3",
"version.json": "d7e0c281d209b1ba1d83614a83766d3f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
