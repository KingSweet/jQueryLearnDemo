/**
 * Created by kingsweet on 15/8/28.
 */
$(document).ready(function () {
    $("#btn-1").click(setHideOrShow);
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
}