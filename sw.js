if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}})).then(e=>{const r=c(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"index.html",revision:"52569544d9f90ddb7f3115f3b19a2467"},{url:"main.js",revision:"567da4cf8fd53016adbee6ce7d696d6d"},{url:"manifest.json",revision:"fc1d5e298618b6008f91b1bd2f137ac1"},{url:"package-lock.json",revision:"d906ececbd902ec285b0b538c4ccfd45"},{url:"package.json",revision:"2636f706e0c8904ce267e53a20cff935"},{url:"style.css",revision:"cb2b8eb2e476db93ea215ab03922bce3"}],{})}));
//# sourceMappingURL=sw.js.map
