const CountdownTimer=(()=>{const n="2025-02-17",e={day:{text:"今日",unit:"小时"},week:{text:"本周",unit:"天"},month:{text:"本月",unit:"天"},year:{text:"本年",unit:"天"}},t={day:()=>{const n=(new Date).getHours();return{remaining:24-n,percentage:n/24*100}},week:()=>{const n=(new Date).getDay(),e=0===n?6:n-1;return{remaining:6-e,percentage:(e+1)/7*100}},month:()=>{const n=new Date,e=new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),t=n.getDate()-1;return{remaining:e-t,percentage:t/e*100}},year:()=>{const n=new Date,e=new Date(n.getFullYear(),0,1),t=365+(n.getFullYear()%4==0?1:0),a=Math.floor((n-e)/864e5);return{remaining:t-a,percentage:a/t*100}}};function a(){const a=["eventName","eventDate","daysUntil","countRight"].map((n=>document.getElementById(n)));if(a.some((n=>!n)))return;const[i,o,r,c]=a,s=new Date,d=new Date(n);i.textContent="春节",o.textContent=n,r.textContent=Math.round((d-s.setHours(0,0,0,0))/864e5),c.innerHTML=Object.entries(e).map((([n,{text:e,unit:a}])=>{const{remaining:i,percentage:o}=t[n]();return`\n                    <div class="cd-count-item">\n                        <div class="cd-item-name">${e}</div>\n                        <div class="cd-item-progress">\n                            <div class="cd-progress-bar" style="width: ${o}%; opacity: ${o/100}"></div>\n                            <span class="cd-percentage ${o>=46?"cd-many":""}">${o.toFixed(2)}%</span>\n                            <span class="cd-remaining ${o>=60?"cd-many":""}">\n                                <span class="cd-tip">还剩</span>${i}<span class="cd-tip">${a}</span>\n                            </span>\n                        </div>\n                    </div>\n                `})).join("")}let i;const o=()=>{!function(){const n=document.createElement("style");n.textContent='\n            .card-countdown .item-content {\n                display: flex;\n            }\n            .cd-count-left {\n                position: relative;\n                display: flex;\n                flex-direction: column;\n                margin-right: 0.8rem;\n                line-height: 1.5;\n                align-items: center;\n                justify-content: center;\n            }\n            .cd-count-left .cd-text {\n                font-size: 14px;\n            }\n            .cd-count-left .cd-name {\n                font-weight: bold;\n                font-size: 18px;\n            }\n            .cd-count-left .cd-time {\n                font-size: 30px;\n                font-weight: bold;\n                color: var(--anzhiyu-main);\n            }\n            .cd-count-left .cd-date {\n                font-size: 12px;\n                opacity: 0.6;\n            }\n            .cd-count-left::after {\n                content: "";\n                position: absolute;\n                right: -0.8rem;\n                width: 2px;\n                height: 80%;\n                background-color: var(--anzhiyu-main);\n                opacity: 0.5;\n            }\n            .cd-count-right {\n                flex: 1;\n                margin-left: .8rem;\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n            }\n            .cd-count-item {\n                display: flex;\n                flex-direction: row;\n                align-items: center;\n                height: 24px;\n            }\n            .cd-item-name {\n                font-size: 14px;\n                margin-right: 0.8rem;\n                white-space: nowrap;\n            }\n            .cd-item-progress {\n                position: relative;\n                display: flex;\n                flex-direction: row;\n                align-items: center;\n                justify-content: space-between;\n                height: 100%;\n                width: 100%;\n                border-radius: 8px;\n                background-color: var(--anzhiyu-background);\n                overflow: hidden;\n            }\n            .cd-progress-bar {\n                height: 100%;\n                border-radius: 8px;\n                background-color: var(--anzhiyu-main);\n            }\n            .cd-percentage,\n            .cd-remaining {\n                position: absolute;\n                font-size: 12px;\n                margin: 0 6px;\n                transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;\n            }\n            .cd-many {\n                color: #fff;\n            }\n            .cd-remaining {\n                opacity: 0;\n                transform: translateX(10px);\n            }\n            .card-countdown .item-content:hover .cd-remaining {\n                transform: translateX(0);\n                opacity: 1;\n            }\n            .card-countdown .item-content:hover .cd-percentage {\n                transform: translateX(-10px);\n                opacity: 0;\n            }\n        ',document.head.appendChild(n)}(),a(),i=setInterval(a,6e5)};return["pjax:complete","DOMContentLoaded"].forEach((n=>document.addEventListener(n,o))),document.addEventListener("pjax:send",(()=>i&&clearInterval(i))),{start:o,stop:()=>i&&clearInterval(i)}})();