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

    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((result)=>{
                if(result){
                    //we return here cached url
                    return result
                }
                    let requestUrl=event.request.clone();
                    //this gives the url which are not cached
                    //IT TRIES TO HIT API FOR DATA
                    return fetch(requestUrl)
            })
        )
    }

})


//but now all pages are working fine
//but api resposne is not working(api data not working)
//api data not working when fetching from cache
//now we are making api data offline

//steps1.there is a fetch clone event we will use that
//step2.fetch clone event for render code and uncached pages(THIS WILL RENDER THE WHOLE PAGE)
//step3.set api data in local storage
//step4.fetch data from store in offline mode
//step5.show offline mode warning to user
