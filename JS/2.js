/**
 * Created by kingsweet on 15/8/26.
 */

$(document).ready(function () {

    $("#btn-1").click(function () {
        $("p.p-1").text("p-1被修改了!");
    });


    /*
    $(document).ready(function)	将函数绑定到文档的就绪事件（当文档完成加载时）
    $(selector).click(function)	触发或将函数绑定到被选元素的点击事件
    $(selector).dblclick(function)	触发或将函数绑定到被选元素的双击事件
    $(selector).focus(function)	触发或将函数绑定到被选元素的获得焦点事件
    $(selector).mouseover(function)	触发或将函数绑定到被选元素的鼠标悬停事件
    */


    /*$("#btn-2").click(function () {
        alert("点击事件");
    });*/

    $("#btn-2").dblclick(function () {
        alert("双击事件");
    });


    //绑定和解除绑定
    $("#btn-3").bind("click", bindClickEvent);
    $("#btn-3").bind("click", bindClickEvent2);
    $("#btn-3").unbind("click", bindClickEvent2);//解除一个
    $("#btn-3").unbind("click");//全部解除

    $("#btn-3").on("click", bindClickEvent);
    $("#btn-3").on("click", bindClickEvent2);
    $("#btn-3").off("click", bindClickEvent2);//解除一个
    $("#btn-3").off("click");//全部解除


    $("body").bind("click", bodyHandler);
    $("#div-1").bind("click", divHandler);
    
    //自定义事件
    $("#btn-4").click(function () {
        var e = jQuery.Event("MyEvent");
        //trigger() 方法触发被选元素上指定的事件以及事件的默认行为（比如表单提交）。
        $("#btn-4").trigger(e);
    });
    $("#btn-4").bind("MyEvent", function (e) {
        console.log(e);
    });
});


function bindClickEvent () {
    alert("bindClickEvent");
}
function bindClickEvent2 () {
    alert("bindClickEvent2");
}

function bodyHandler (e) {
    console.log(e);
}
function divHandler (e) {
    //event.stopImmediatePropagation() 方法阻止剩下的事件处理程序被执行。
    //该方法阻止事件在 DOM 树中向上冒泡。
    e.stopImmediatePropagation();

    // 方法阻止事件冒泡到父元素，阻止任何父事件处理程序被执行
    e.stopPropagation();
    console.log(e);
}
