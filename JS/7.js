/**
 * Created by kingsweet on 15/9/6.
 */
$(document).ready(function () {
    /*$("#btn-1").on("click", function () {
        $("#span-1").text("请求数据中...");
        $.get("Server.php", {name:$("#nameValue").val()}, function (data) {
            $("#span-1").text(data);
        }).error(function () {
            $("#span-1").text("网络有问题!");
        });
    });*/


    loadBox();
});


//加载碎片
function loadBox () {
    $("#div-1").load("7.htm", function (URL,data,callback) {
        console.log(data);
        if (data == "error") {
            $("#span-1").text("加载失败!");
        }
    });

    //加载js
    $.getScript("../").complete(function () {

    });
}