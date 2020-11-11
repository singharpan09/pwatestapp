console.warn("Service worker from public folder");
//navigator have all information of the browser

//caching
let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/static/js/0.chunk.js",
        "static/js/main.chunk.js",
        "index.html",
        "/users",
        "/",
      ]);
    })
  );
});

//Fetching
this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          //we return here cached url
          return result;
        }
        let requestUrl = event.request.clone();

        return fetch(requestUrl);
      })
    );
  }
});


//now we want to run PWA app as native app (like mobile app)
//first we will make build of the web app