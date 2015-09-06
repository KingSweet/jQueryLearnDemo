/**
 * Created by kingsweet on 15/8/28.
 */
$(document).ready(function () {
    //显示隐藏
    $("#btn-1").click(setHideOrShow);

    //淡入淡出
    $("#btn-2").click(setFadeIn);
    $("#btn-3").click(setFadeOut);
    $("#btn-4").click(setToggle);
    $("#btn-5").click(setFadeTo);

    //滑动
    $("#div-4").click(setSlide);
});


//隐藏/显示
function setHideOrShow () {
    /*$("#p-1").hide(1000, function () {
        //回调
    });//隐藏
    $("#p-1").show(1000, function () {
        //回调
    });//显示*/
    $("#p-1").toggle(1000, function () {
        //回调
        //$(this).remove();
    });
}


//淡入
function setFadeIn () {
    $("#div-1").fadeIn();
    $("#div-2").fadeIn("slow");//"slow"、"fast" 或毫秒。
    $("#div-3").fadeIn(3000);
}
//设置淡出
function setFadeOut () {
    $("#div-1").fadeOut();
    $("#div-2").fadeOut("slow");
    $("#div-3").fadeOut(3000);
}
//设置淡出/淡入
function setToggle () {
    $("#div-1").fadeToggle();
    $("#div-2").fadeToggle("slow");
    $("#div-3").fadeToggle(3000);
}
//设置透明
function setFadeTo () {
    $("#div-1").fadeTo("fast", 0.2);
    $("#div-2").fadeTo("slow", 0.5);
    $("#div-3").fadeTo(3000, 0.8);
}


//滑动
function setSlide () {
    //$("#div-5").slideDown();
    //$("#div-5").slideUp();
    $("#div-5").slideToggle();
}