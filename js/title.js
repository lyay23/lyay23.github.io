jQuery(document).ready(function() {
    function c() {
        /* 排除首页（记得自行修改下首页地址） */
        if (location.href != "https://baskly.us.kg/") { 
            document.title = document[a] ? "(つェ⊂)感谢你的倾听《" + d + "》" : "(*´∇｀*) 真的要走了吗《" + d + "》";
        }
    }
    var a, b, d = document.title;
    
    // 检查浏览器支持的隐藏属性，并为不同浏览器设置适当的值
    if ("undefined" != typeof document.hidden) {
        a = "hidden";
        b = "visibilitychange";
    } else if ("undefined" != typeof document.mozHidden) {
        a = "mozHidden";
        b = "mozvisibilitychange";
    } else if ("undefined" != typeof document.webkitHidden) {
        a = "webkitHidden";
        b = "webkitvisibilitychange";
    }
    
    // 如果浏览器支持document.hidden属性，则添加事件监听
    if ("undefined" != typeof document.addEventListener && "undefined" != typeof document[a]) {
        document.addEventListener(b, c, false);
    }
});
