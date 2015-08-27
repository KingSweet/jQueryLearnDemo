/**
 * Created by kingsweet on 15/8/27.
 */

$(document).ready(function () {
    //捕获
    /*
    * text() - 设置或返回所选元素的文本内容
      html() - 设置或返回所选元素的内容（包括 HTML 标记）
      val()  - 设置或返回表单字段的值
    * */
    $("#btn-1").click(function (e) {
        alert("p:" + $("#p-1").text());//只能获取内容
    });
    $("#btn-1").click(function (e) {
        alert("p:" + $("#p-1").html());//可以获取子标签
    });
    $("#btn-1").click(function (e) {
        alert("p:" + $("#text-1").val());//设置或返回表单字段的值
    });



    //设置
    $("#btn-2").click(function () {
        $("#p-2").text("KingSweet!");
    });
    $("#btn-3").click(function () {
        $("#p-2").html("KingSweet!<a id='aid' href='https://www.baidu.com'>baidu</a>");
    });
    $("#btn-4").click(function () {
        $("#text-2").val("KingSweet!");
    });
    //设置属性
    $("#btn-5").click(function () {
        $("#aid").attr({
            "href": "http://www.jikexueyuan.com",
            "title": "sss"
        });
    });
    //设置回调
    $("#btn-6").click(function () {
        $("#p-2").text(function (i, oldValue) {
            return "old:" + oldValue + ";\n new: " + "KingSweet-------->;<br/>" + "当前元素下表:"+i;
        });
    });






    //添加
    /*
    *append() - 在被选元素的结尾插入内容
     prepend() - 在被选元素的开头插入内容
     after() - 在被选元素之后插入内容
     before() - 在被选元素之前插入内容
    * */
    $("#btn-7").click(function () {
        //$("#p-3").append(" KingSweet!");//内容之后
        //$("#p-3").prepend(" KingSweet!");//内容之前
        //$("#p-3").after(" KingSweet!");//元素之后
        //$("#p-3").before(" KingSweet!");//元素之前

        //增加元素
        var text1 = "<p>pppppppppp</p>";
        var text2 = $("<p></p>").text("ssssdkaskhdjakkkk----");
        var text3 = document.createElement("p");
        text3.innerHTML = "sssllll00000";
        $("#p-3").append(text1, text2, text3);
    });



    //删除
    /*
    * remove() - 删除被选元素（及其子元素）
     empty() - 从被选元素中删除子元素
    * */
    $("#btn-8").click(function () {
        $("#p-3").remove();//删除元素
        //$("#p-3").empty();//删除元素内容
    });


});