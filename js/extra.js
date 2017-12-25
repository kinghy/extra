/**
 * Created by rjt on 2017/7/14.
 */

var loadingTime = $.getUrlParam("loading")?$.getUrlParam("loading"):5000;//loading最大时间
var startstage = $.getUrlParam("stage");
var startpos = $.getUrlParam("pos")?$.getUrlParam("pos"):"start";//start?end?
$().ready(function () {
    if ($.getUrlParam("hot")=="true") {
        $(".hot_pos").css("background-color", "red");
    }
});

$().ready(function () {
    //构建场景
    var zb = Stage.init("start1",0,76,function (s) {//初始化
        $("#start1_div").click(function (e) {
            s.playNext();
        })
    });
    var fb = Stage.init("start2",77,81,function (s) {//初始化
        $("#start2_div").click(function (e) {
            s.playNext();
        })
    });
    var zs = SimpleMultiChoiceStage2.init("first_qa",0,136,$("#submit_1_btn"),$("#first_qa .answer"),$("#first_qa"),
        ["fa","fb"],137,141,141.5,145,141.5,145);

    var fs = SimpleMultiChoiceStage2.init("second_qa",145.5,202,$("#submit_2_btn"),$("#second_qa .answer"),$("#second_qa"),
        ["sa","sb","sc"],203,207,208,212,208,212);

    var ss = ChoiceStage.init("third_qa",212.5,243.5,$("#tb_btn"),$("#ta_btn"),251.5,263,245,251,245,251);

    // var eights = Stage.init("book",219,328,function (s) {//初始化
    //     $("#p1ToP2").click(function (e) {
    //         s.playNext();
    //     })
    // });
    var bzs = Stage.init("book1",264,281,function (s) {//初始化
        $("#ok_1_btn").click(function (e) {
            $(this).find("img").attr("src","resource/ok_highlight.png");
            setTimeout(function () {
                s.playNext();
                $(this).find("img").attr("src","resource/ok.png");
            }.bind(this),500)

        })
    });
    var bfs = Stage.init("book2",282,290,function (s) {//初始化
        $("#ok_2_btn").click(function (e) {
            $(this).find("img").attr("src","resource/ok_highlight.png");
            setTimeout(function () {
                s.playNext();
                $(this).find("img").attr("src","resource/ok.png");
            }.bind(this),500)

        })
    });
    var ts = ChoiceStage2.init("fourth_qa",291,300,$("#wrong1_btn"),$("#right1_btn"),301,305.5,306,309,306,309);
    var fours = ChoiceStage2.init("fifth_qa",310,312,$("#wrong2_btn"),$("#right2_btn"),312.5,318,318.5,322,318.5,322);
    var fis = ChoiceStage2.init("sixth_qa",323.5,326,$("#wrong3_btn"),$("#right3_btn"),326.5,331.5,332,335.5,331.5,335.5);

    var es = Stage.init(null,336,0)


    var sm = VideoStageManager.init("pageWrap","video",[zs,fs,ss,bzs,bfs,ts,fours,fis,es],function () {
        $("#end_page").show();
    });

    //开始页
    $("#go_btn").click(function () {
        $("#start_page").hide();
        //场景1
        sm.play(startstage,startpos);

    });

    //重播事件
    $("#replay_btn").click(function () {
        $("#end_page").hide();
        sm.play();
    });

})
