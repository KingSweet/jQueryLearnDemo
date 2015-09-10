/**
 * Created by kingsweet on 15/9/9.
 */
$(document).ready(function () {
    $("#a-1").button();

    //在任意的 DOM 元素上启用 draggable 功能。通过鼠标点击并在视区中拖动来移动 draggable 对象
    $("#div-1").draggable();

    //在任意的 DOM 元素上启用 droppable 功能，并为可拖拽小部件创建目标
    $("#div-2").droppable();
    $("#div-2").on("drop", function (event, ui) {
        $(this).text("放置进来了!");
    });

    //在任意的 DOM 元素上启用 resizable 功能。通过鼠标拖拽右边或底边的边框到所需的宽度或高度
    $("#div-3").resizable();
    $("#div-3").draggable();

    // 在某个 DOM 元素上或者一组元素上启用 selectable 功能。
    // 通过鼠标拖拽选择条目。按住 Ctrl 键，选择多个不相邻的条目
    $("#ul-1").selectable();

    //在任意的 DOM 元素上启用 sortable 功能。通过鼠标点击并拖拽元素到列表中的一个新的位置，
    // 其它条目会自动调整。默认情况下，sortable 各个条目共享 draggable 属性
    $("#ul-2").sortable();

    //把一对标题和内容面板转换成折叠面板。
    $("#div-4").accordion();

    //自动完成功能根据用户输入值进行搜索和过滤，让用户快速找到并从预设值列表中选择。
    $("#input-1").autocomplete({
        source: ["aa", "djd", "KingSweet", "js", "baidu", "jikexueyuan"]
    });

    //日期选择
    $("#input-2").datepicker();


    //对话框
    $( "#div-5" ).dialog({ autoOpen: false });
    $("#btn-1").click(function () {
        $("#div-5").dialog("open");
    });

    //进度条
    $("#div-6").progressbar({
        max: 100
    });
    var num = 0;
    setInterval(function () {
        if (num == 100) {
            num = 0;
        }
        $("#div-6").progressbar("option", "value", ++num);
    }, 100);


    //菜单部件
    $("#ul-3").menu({
        position: {at: "right bottom"}//˙设置位置
    });


    //滑块
    $("#div-7").slider({
        //移动后
        change: function (event, ui) {
            $("#span-1").text($("#div-7").slider("option", "value"));
        },
        //移动中
        slide: function (event, ui) {
            $("#span-1").text($("#div-7").slider("option", "value"));
        }
    });

});