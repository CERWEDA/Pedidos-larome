const CACHE="larome-v7";
const BASE=self.location.pathname.replace(/\/sw\.js$/,"");
const ASSETS=[BASE+"/",BASE+"/index.html",BASE+"/manifest.json",BASE+"/app.js",BASE+"/react.min.js",BASE+"/react-dom.min.js",BASE+"/xlsx.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
