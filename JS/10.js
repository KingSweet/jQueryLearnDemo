/**
 * Created by kingsweet on 15/9/8.
 */
$(document).ready(function () {
    $(".main>a").click(function () {
        var ulNode = $(this).next("ul");
        //"slow"、"fast" 或毫秒
        //$(selector).hide(speed,callback);
        //$(selector).show(speed,callback);
        //$(selector).toggle(speed,callback);
        //ulNode.slideDown();
        //ulNode.slideUp();
        ulNode.slideToggle("fast");
        changeIcon($(this));
    });

    /*$(".main>a, .main2>a").onmouseover = function () {
        var ulNode = $(this).next("ul");
        ulNode.slideDown();
    };*/
    $(".main2").hover(function () {
        changeIcon($(this).children("a"));
        $(this).children("ul").slideDown();
    }, function () {
        changeIcon($(this).children("a"));
        $(this).children("ul").slideUp();
    });

});

function changeIcon (mainNode) {
    if (mainNode) {
        if (mainNode.css("background-image").indexOf("10.jpg") >= 0) {
            mainNode.css("background-image", "url('../imgs/5.jpg')");
        } else {
            mainNode.css("background-image", "url('../imgs/10.jpg')");
        }
    }
}