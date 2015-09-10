/**
 * Created by kingsweet on 15/9/8.
 */

var timer;

$(document).ready(function () {

    $("#tabOne li").each(function (index) {
        var thisNode = $(this);

        thisNode.mouseover(function () {
            timer = setTimeout(function () {
                //隐藏前一个内容
                $("div.content").removeClass("content");
                $("#tabOne li.tabin").removeClass("tabin");

                //增加当前内容
                $("div.contentFirst").eq(index).addClass("content");
                thisNode.addClass("tabin");
            }, 300);

        }).mouseout(function () {
            clearTimeout(timer);
        });
    });


    $("#tab2 li").each(function (index) {
        var thisNode = $(this);
        thisNode.click(function () {

            $("#tab2 li.tabin").removeClass("#tab2 tabin");
            $("div.content2").removeClass("content2");

            thisNode.addClass("#tab2 tabin");
            $("div.contentTwo").eq(index).addClass("content2");

            if (index == 0) {
                $(".content2").attr("src", "http://www.hao123.com/");
            } else if (index == 1) {
                $(".content2").attr("src", "http://www.sina.com.cn");
            } else if (index == 2) {
                $(".content2").attr("src", "http://tieba.baidu.com");
            }
        });
    });

});