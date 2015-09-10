/**
 * Created by kingsweet on 15/9/6.
 */
$.noConflict();//替换美元符号
$(document).ready(function () {
    //加载js
    //异步加载
    /*$.getScript("../JS/8-ext.js").complete(function () {
        sayHello();
    });*/
    //异步加载
    /*loadJS("../JS/8-ext.js", function () {
        $.mFunc();
        $("#div-1").mFunc();
    });*/

    //扩展方式1
    $.mFunc();

    //扩展方式2
    $("#div-1").mFunc();
    
    
    $("#btn-1").click(function () {

    });
});



//加载js
function loadJS (url, callback) {
    var js = document.createElement("script");;
    js.type = "text/javascript";
    if (js.readyState) {
        js.onreadystatechange = function () {
            if (js.readyState == "loaded" || js.readyState == "complete") {
                js.onreadystatechange = null;
                callback();
            }
        };
    } else {
        js.src = url;
        document.getElementsByTagName("head")[0].appendChild(js);
    }
}
