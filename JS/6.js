/**
 * Created by kingsweet on 15/8/31.
 */
$(document).ready(function () {
    //findChildren();
    //findSuper();
    //findBrothers();
    filtrations();
});


//向下遍历
function findChildren () {
    //children() 方法返回被选元素的所有直接子元素。
    //该方法只会向下一级对 DOM 树进行遍历。
    /*$("#div-1").children().css({
     border: "3px solid black"
     });*/

    //find() 方法返回被选元素的后代元素，一路向下直到最后一个后代。
    $("#div-1").find("p").css({
        border: "3px solid black"
    });
}


//向上遍历
function findSuper () {
    /*
    * parent() 方法返回被选元素的直接父元素
     parents() 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素 (<html>)
     parentsUntil() 方法返回介于两个给定元素之间的所有祖先元素
    *
    * */
    //console.log($("p").parent());
    //console.log($("p").parents());
    console.log($("p").parentsUntil("#div-1"));
}

//同级遍历
/*
* siblings()
 next()
 nextAll()
 nextUntil()
 prev()
 prevAll()
 prevUntil()
* */
function findBrothers () {
    //返回被选元素的所有同胞元素
    //$("#div-3 h4").siblings().css({border: "3px solid #ff0000"});

    //返回被选元素的下一个同胞元素
    //$("#div-3 h4").next().css({border: "3px solid #ff0000"});

    //返回被选元素的所有跟随的同胞元素
    //$("#div-3 h4").nextAll().css({border: "3px solid #ff0000"});

    //返回介于两个给定参数之间的所有跟随的同胞元素 - 不包含首尾
    $("#div-3 h4").nextUntil("#div-3 h6").css({border: "3px solid #ff0000"});

}


function filtrations () {
    //first() 方法返回被选元素的首个元素
    //$("#div-3 h4").first().css({border: "3px solid #ff0000"});
    //last() 方法返回被选元素的最后一个元素。
    //$("#div-3 h4").last().css({border: "3px solid #ff0000"});
    //eq() 方法返回被选元素中带有指定索引号的元素
    //$("#div-3 h4").eq(0).css({border: "3px solid #ff0000"});
    //filter() 方法允许您规定一个标准。不匹配这个标准的元素会被从集合中删除，匹配的元素会被返回。
    //$("#div-3 *").filter(".bd").css({border: "3px solid #ff0000"});
    //not() 方法返回不匹配标准的所有元素
    $("#div-3 *").not(".bd").css({border: "3px solid #ff0000"});
}