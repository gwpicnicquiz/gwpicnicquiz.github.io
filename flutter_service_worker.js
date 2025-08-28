'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "563fad3c8c460c155ba8695d0d2f6136",
"assets/AssetManifest.bin.json": "fd62a9e286158f3ab11311591913c38c",
"assets/AssetManifest.json": "ad6b465f8e272d1e6197ed51f153c5d3",
"assets/assets/background.png": "82c5d09ead35ca98a7a335e35f8aea6b",
"assets/assets/background.webp": "7d7a821b4ed7f78141a4509811854098",
"assets/assets/basket.gif": "c32d6870f243e1885bd8666765087df9",
"assets/assets/characters/Allen.webp": "9e78b1baaa7ad37e7d1b74591643ef3c",
"assets/assets/characters/Allen_Border.webp": "b7156df7ef035b0c3748c3a6f88744cb",
"assets/assets/characters/Blink.webp": "dd5ae16f5bfbe4dbcf7322563c75ee55",
"assets/assets/characters/Blink_Border.webp": "36e517c4239bcb71313061019f6b21e3",
"assets/assets/characters/Bong.webp": "3b44bfcc9194079b2ae719abcc6110b7",
"assets/assets/characters/Bong_Border.webp": "549b74e0991e3b1030d0afb6ce272f22",
"assets/assets/characters/Cubby.webp": "381f8d6490465b8b65cce0a0ac202f5d",
"assets/assets/characters/Cubby_Border.webp": "22ffd9fbc3f4039c5d909222de7b81b9",
"assets/assets/characters/Donut.webp": "a27d62a3dba8662fc45f6737e00a483e",
"assets/assets/characters/Donut_Border.webp": "fa9ec40481375448e83ae222b61dcddd",
"assets/assets/characters/Frosty.webp": "0b3b056ba744bb4788f5c5be72efba73",
"assets/assets/characters/Frosty_Border.webp": "850ee58cfaec93fd1be044b725a162c8",
"assets/assets/characters/Koko.webp": "fa268b57c78ca6a1645065c684a7f476",
"assets/assets/characters/Koko_Border.webp": "ac348ae90a0434e42f817181f4a7a3f3",
"assets/assets/ending.webp": "685954a0780db1b029887fbe2d2cccd3",
"assets/assets/fonts/Brandon_bld.otf": "fa11c3ca7b2301d6b8da51b04985fb05",
"assets/assets/fonts/Brandon_reg.otf": "1f55925e52b9e71fd57108874184060d",
"assets/assets/fonts/Neutraface-Text%2520Demi-Alt.ttf": "dc7655bbe821034b0cc65201bd672124",
"assets/assets/fonts/Neutraface-Text-Bold.otf": "5a2b4f5c8f2f3fd45d6486ea1e34964c",
"assets/assets/landing.gif": "b36e5ebfffd0a61655aa8f55ae9cc174",
"assets/assets/landing.webp": "321f6b7724bf71c0d5bcc9e61f4f5987",
"assets/assets/landing_items.png": "5f9f3af908f3281d0f065d5d1de7b13f",
"assets/assets/moving_basket.gif": "24be9e681bad0b06017a5b8cf44d0544",
"assets/assets/oneline.png": "e7a01c2ddd84bf61307b1d50a8589e20",
"assets/assets/oneline_bak.png": "6d77796e9379fa08822722236367d5aa",
"assets/assets/qns.json": "1bda95bc35e740b52f565e3f93cfbe2c",
"assets/assets/qns_backup.json": "5bf24e864f826283359995e4d3d7ef6d",
"assets/assets/qn_bg.jpg": "367dddbcc5ea6f04329f19f134e89557",
"assets/assets/qn_bg.webp": "7d7a821b4ed7f78141a4509811854098",
"assets/assets/questions/q1.webp": "f6b932ac0fa6a0196d81d4f9d504ef29",
"assets/assets/questions/q2.webp": "7a2a7d9d73f55f840e43cea24b8f87f6",
"assets/assets/questions/q3a.webp": "2ae9e559d37d003798b1525e0a607c7f",
"assets/assets/questions/q3b.webp": "01e10a161bdfbb8d5289716046f03596",
"assets/assets/questions/q4.webp": "82e874c9ae3b896e89f4f2755371bf3c",
"assets/assets/questions/q5.webp": "e1f4b70c21a2dc6240292baf3803ca98",
"assets/assets/questions/q6a.webp": "45c6e0b4995875b84cefa6eb39c72ee6",
"assets/assets/questions/q6b.webp": "1bdeb89d5b5f3aa809e051f4c7aeaf96",
"assets/assets/questions/q7.webp": "1662edaff8c841bae66e681defcfa16f",
"assets/assets/results/result_allen.png": "be49e754c6248c72c617bc5ce82ced45",
"assets/assets/results/result_blink.png": "a4053dba299bb2a5aad233bf14e49a97",
"assets/assets/results/result_bong.png": "b4fa5fd2b6df9723c93c99063a7e166c",
"assets/assets/results/result_cubby.png": "99435eae6a2d54e3af2d15260e44922e",
"assets/assets/results/result_donut.png": "f10e0c45b35bdb9fe551099387bb5388",
"assets/assets/results/result_frosty.png": "26a400e0ec1ada2117d6829eefe16fb3",
"assets/assets/results/result_koko.png": "26b6e49320251b85378803a9fe1a3d56",
"assets/FontManifest.json": "070096ea621eacc14a5f820ec8da552f",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "085bb73b87d43c34f4fc0ec663fdc54b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "e5c85d82cc8b4e632d9cf774d31879f8",
"favicon_bak.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ff1c2d84851540b20916e7d9fe02e2ec",
"icons/Icon-192.png": "660a2190a10dda9db57104fdc8ac1d1c",
"icons/Icon-512.png": "4c4177e165d21ec9c4a7fc8c43622b18",
"icons/Icon-maskable-192.png": "4754d4d2db4953e9b142104ceb409b88",
"icons/Icon-maskable-512.png": "c85c5e5b049b73959a6847cf21645580",
"index.html": "5ae1c3f45d300304c60fc351042f4f75",
"/": "5ae1c3f45d300304c60fc351042f4f75",
"main.dart.js": "0e5afbef83168e32c123fd1558ddd5d0",
"manifest.json": "b80594ce9fff5903ea2597b6394d4280",
"version.json": "71876508a170790ca0f62cd601e82cec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
