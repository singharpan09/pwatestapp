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

//Now we will work on Push notifications
//when we allow push notifications
//when any data comes ,,that is then sent as notification

//steps1.how this works
//steps2. what is vapid PublicKey (Voluntary APPLICATION server application)
//steps3. what is applicationServerKey


//push notifications does not comes on https port it comes on tcp port(socket) like a chat application
//when anything is updated in database it  will send data quicky

//vapid have two key public key and private key  ,,,it is a type of authentication to check if server is authticated

//thiS VAPID KEY is converted into array or string that is then call as 'ApplicationServerKey'