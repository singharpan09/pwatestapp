console.warn("Service worker from public folder");


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
event.respondWith(
    caches.match(event.request).then((result)=>{
        if(result){
            return result
        }
    })
)
})


