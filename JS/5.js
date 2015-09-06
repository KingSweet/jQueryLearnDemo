/**
 * Created by kingsweet on 15/8/31.
 */
$(document).ready(function () {
    //$("#div-1").css("width", "100px");//写法1
    //写法2
    /*$("#div-1").css({
        width: "100px",
        height: "200px",
        backgroundColor: "green"
    });*/
    //第三种写法
    $("#div-1").addClass("style1");
    $("#div-1").click(function () {
        //$("#div-1").addClass("style1");
        //$("#div-1").removeClass("style1");
        $(this).toggleClass("style2");
    });


    //盒子模型
    $("#div-2").click(function () {
        alert(
            "元素的宽度 = " + $("#div-2").width() + "\n" +
            "元素的高度 = " + $("#div-2").height() + "\n" +
            "元素的宽度+内边距 = " + $("#div-2").innerWidth() + "\n" +
            "元素的高度+内边距 = " + $("#div-2").innerHeight() + "\n" +
            "元素的宽度+内边距+内边框 = " + $("#div-2").outerWidth() + "\n" +
            "元素的高度+内边距+内边框 = " + $("#div-2").outerHeight() + "\n" +
            "元素的宽度+内边距+内边框+外边框 = " + $("#div-2").outerWidth(true) + "\n" +
            "元素的高度+内边距+内边框+外边框 = " + $("#div-2").outerHeight(true) + "\n"
        );

    });

});