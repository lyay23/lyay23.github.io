if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,t)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const c=e=>n(e,s),d={module:{uri:s},exports:o,require:c};i[s]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"27f59d63d50f886b5507da215d2c5712"},{url:"css/index.css",revision:"d24f687d3ecd9a0cf2c90d77b038d49f"},{url:"/",revision:"index-20241231030643035"},{url:"music/",revision:"music-20241231030643035"},{url:"about/",revision:"about-20241231030643035"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));