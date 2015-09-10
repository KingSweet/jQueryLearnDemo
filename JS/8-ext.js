/**
 * Created by kingsweet on 15/9/6.
 */
$.mFunc = function () {
    alert("扩展方式1");
};

$.fn.mFunc = function () {
    $(this).text("扩展方式2");
}

function sayHello () {
    alert("sayHello!");
}