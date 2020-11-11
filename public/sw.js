console.warn("Service worker from public folder");
//this is window context matlab window object me kuch hua
//receive install event in this case
//what this event will do will go in second parameter
//this we are doing is registering the cache
//now we can see cache file in cache storage in brower
//event will wait until it will load the cache ////here comes cache name
//this will return a promise
//addAll is a function that accepts a array
//it will cache all the urls that will be passed in it
//we are doing cache of network request files
//we can get it's url by checking the network
//we have to manually cache (write url manually) index.html and '/'(root file)

let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll(["/static/js/bundle.js",
      '/static/js/0.chunk.js',
      'static/js/main.chunk.js',
    'index.html',
'/']);
    })
  );
});

//cache karne ke baad get bhi to karna hota hai !!!!!!!!AAGEED
//now fetching the cache
//do whatever you want to do when fetch event is passed
//responseWith =>kiske saath respond karna hai
//that match with request
this.addEventListener('fetch',(event)=>{
event.respondWith(
    caches.match(event.request).then((result)=>{
        return result
    })
)
})
