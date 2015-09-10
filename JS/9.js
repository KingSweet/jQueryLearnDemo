/**
 * Created by kingsweet on 15/9/7.
 */
$(document).ready(function () {

    //加载图片
    var imgArray = getData();

    //添加图片到html文件
    setData(imgArray);

    $(window).on("load", function () {
        setLocation();

        window.onscroll = function () {
            if (scrollSide()) {
                setData(imgArray);
            }
        }
    });



});

//加载图片数据
function getData () {
    var dataArray = new Array();
    for (var i = 1; i <= 13; ++i) {
        dataArray[i-1] = "../imgs/" + i + ".jpg";
    }
    return dataArray;
}

//添加图片到html文件
function setData (dataArray) {
    $.each(dataArray, function (i, d) {
        //生成元素
        var box = $("<div>").addClass("box").appendTo($("body"));
        $("<img>").attr("src", d).appendTo(box);
    });

}

//设置图片位置
function setLocation () {
    var boxs = $(".box");//获得盒子集合
    var boxW = boxs.eq(0).width();//盒子宽度
    var num = Math.floor($(window).width() / boxW);//一排摆放数量
    var boxArray = [];
    boxs.each(function (i, d) {
        var boxH = boxs.eq(i).height();

        if (i < num) {//第一排
            boxArray[i] = boxH;
        } else {
            //获取数组中的最小值
            var minBoxHeight = Math.min.apply(null, boxArray);
            //query.inarray(value,array)
            //确定第一个参数在数组中的位置(如果没有找到则返回 -1 )
            var minBoxIndex = $.inArray(minBoxHeight, boxArray);

            $(d).css({
                "position": "absolute",
                "top": minBoxHeight,
                "left": boxs.eq(minBoxIndex).position().left,
                "padding": "10px",
                "margin-top": "20px",
                "border": "1px solid #cccccc",
                "border-radius": "5px",
                "box-shadow": "0 0 5px #cccccc"
            });
            boxArray[minBoxIndex] += boxs.eq(i).height()+20;
        }
    });


}

//滚动到底,加载图片
function scrollSide () {
    var box = $(".box");
    var lastBoxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height()/2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    var ss = scrollHeight+documentHeight;
    console.log(lastBoxHeight + ":::::" + ss);
    return (lastBoxHeight < scrollHeight+documentHeight) ? true : false;
}