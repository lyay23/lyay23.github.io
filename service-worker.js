if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const o=e=>n(e,c),l={module:{uri:c},exports:s,require:o};i[c]=Promise.all(r.map((e=>l[e]||o(e)))).then((e=>(t(...e),s)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"98c2cc48628339590bc2d35de9b03c57"},{url:"css/index.css",revision:"b02cca69ccaef72eee72bfe29d27b2a7"},{url:"/",revision:"index-20250302114105448"},{url:"music/",revision:"music-20250302114105448"},{url:"about/",revision:"about-20250302114105448"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));