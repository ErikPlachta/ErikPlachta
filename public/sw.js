const SITE_CACHE_PREFACE = "react-pwa-template-data-cache"
const DATA_CACHE_PREFACE = "react-pwa-template-data-cache"
const VERSION = "-v_1.0.0"
const SITE_CACHE_NAME = SITE_CACHE_PREFACE + VERSION
const DATA_CACHE_NAME = DATA_CACHE_PREFACE + VERSION

//-- Files to cache within the public folder
const FILES_TO_CACHE = [
    '/',
    'index.html',
    '/ws',
    'manifest.json',
    'android-chrome-192x192.png',
    'android-chrome-512x512.png',
    'apple-touch-icon.png',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'favicon.ico',
    'maskable-icon-512x512.png',
    '/static/js/bundle.js',
    'static/media/loading_dark.44cef3d065a632baaf3e.riv',
    'static/media/loading_light.44cef3d065a632baaf3e.riv',
    'static/media/login_dark.c60de13d988194dedef1.webp',
    'static/media/login_light.c60de13d988194dedef1.webp',
];
//-- Used for user input in offline events
const DATA_TO_CACHE = []; 


self.addEventListener('install', async function(e){
    //-- Cache Site Content
    await e.waitUntil(
        caches.open(SITE_CACHE_NAME)
            //-- Take anything that is meant to be cached and store it in Cache Storage
            .then( cache => {
                // if (process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
                    // console.log(`//-- sw.js.install: Site Cache installed for ${FILES_TO_CACHE.length} files.`)
                // }
                return (cache.addAll(FILES_TO_CACHE))
            })
    )
    //-- Cache site data - which is used for user input in offline events
    await e.waitUntil(
        caches.open(DATA_CACHE_NAME)
            .then( cache => {
                // if (process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
                //     console.log(`//-- sw.js.install: Data Cache installed for ${DATA_TO_CACHE.length} values.`)
                // }
                return (cache.addAll(DATA_TO_CACHE))
            })
    )

})

self.addEventListener('activate', async function(e){
    //-- Activate the Sevice Worker
    await e.waitUntil(
        caches.keys().then(keyList => {

            return Promise.all(
                keyList.map( key => {
                    if (key !== SITE_CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log(`//-- sw.js.activate: - Purging old cache data for ${key}`);
                        return caches.delete(key);
                    }
                })
            )
        })
    )
    //-- Claim the service worker
    self.clients.claim();
})

self.addEventListener('fetch', async function(evt) {
    
    //-- if making an API call
    if (evt.request.url.includes('graphql')) {
        // console.log(evt)
        // console.log("//-- API Call Request: ", evt)
        //-- in response to the event request to the api
        try{
            await evt.respondWith(
                //-- open the data-cache
            caches.open(DATA_CACHE_NAME)
                .then(cache => { 
                    //-- return the request to fetch assuming it's a fetch-request
                    return fetch(evt.request)
                        // Verify if response is sucess or not and stores if 200 only.
                        .then(response => {
                            //-- If 200, save to Cache Storage.
                            if (response.status === 200) {
                                cache.put(evt.request.url, response.clone()); 
                            }
                            //-- Either way, return results to client
                            return response; 
                        })
                        //--  Network request failed, try to get it from the cache.
                        .catch(err => {
                            //-- KBA --> https://web.dev/learn/pwa/serving/
                            console.log("//--  Network request failed, try to get it from the cache.")
                            return cache.match(evt.request); 
                        });
                })
                .catch(err => {
                    console.log("No Network Error: ",err)
                    // console.log("DATA_CACHE_NAME: ", DATA_CACHE_NAME )
                    // console.log("evt.request: ", evt.request )
                })
            );
        }
        catch(err){
            console.log("//-- API Call Request Error: ", err)
        }
        return;
    }
    //-- If making a NON API Call to any HTML file, send back to cached homepage
    if (!(evt.request.url.includes('graphql'))) {
        // if(evt.request.url.includes('font')){
        //     // console.log(evt)
        // }
        // if(evt.request.url.includes('extension"')){
        //     // console.log(evt)
        // }
        // else{
    // console.log(evt)
    //-- in response to the event request to anything but the API
    evt.respondWith( 
        // -- review request
        fetch(evt.request)
            .catch(function() {
                return caches.match(evt.request).then(function(response) {
                    //-- if got a response, EXIT - no fetch interception required but succesful
                    if (response) {  return response; }
                    //-- if response was made and not succesful, redirect to  cached homepage for all requests of filetype html 
                    if (evt.request.headers.get('accept').includes('text/html')) { return caches.match('/'); }
                });
            })
        );
    }
});
