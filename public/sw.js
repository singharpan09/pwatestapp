console.warn("Service worker from public folder");
//navigator have all information of the browser

//caching
let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll(["/static/js/bundle.js",
                     '/static/js/0.chunk.js',
                      'static/js/main.chunk.js',
                        'index.html',
                          '/users',
                            '/'
                                    ]);  }) );});


                                    //Fetching
this.addEventListener('fetch',(event)=>{
    //now we are checking first if we are offline
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((result)=>{
                if(result){
                    return result
                }
            })
        )
    }

})


//abhi tak we are using cache always but this is incorrect
//we need to check when we don't have internet connection
//and use cache only when no internet avaibale

//steps
//1.unregister service worker from chrome
//2.check internet connection before fetching cache page
//3.check network  with internet and with internet