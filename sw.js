if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const d=e=>r(e,n),f={module:{uri:n},exports:o,require:d};i[n]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-fdc54604"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.css",revision:"3affec43eef3b04df27e7485a7ad78c5"},{url:"index.html",revision:"0964419e9b621042fc4417e4797399d5"},{url:"index.js",revision:"d32f00e77d525bb751f3adba1ff31c8d"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
