if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,t)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const c=e=>n(e,s),l={module:{uri:s},exports:o,require:c};i[s]=Promise.all(r.map((e=>l[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"b3df816a8b574ab3a201220e0fb823df"},{url:"css/index.css",revision:"b02cca69ccaef72eee72bfe29d27b2a7"},{url:"/",revision:"index-20250117122836310"},{url:"music/",revision:"music-20250117122836310"},{url:"about/",revision:"about-20250117122836310"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));