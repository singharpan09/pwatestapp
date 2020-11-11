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


//now we will add add to home screen option in our app
//it basically works only with 'https' urls but we can acheive it
//go to inspect dev tools ==>more tools ==>remote devices==>DEVICE==>port forwading
//==>put your port number and address as localhost:3000
//enable porting 'true
//this will sync android with browser
//clear all cache once s
//now will get option to add to home screen

//WE CAN ALSO INSTALL THIS APP ON WINDOWS OR UBUNTU