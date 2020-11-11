console.warn("Service worker from public folder");


//this will only cache the routes that are only present here
//now new users route is added

//Caching

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
event.respondWith(
    caches.match(event.request).then((result)=>{
        if(result){
            return result
        }
    })
)
})


