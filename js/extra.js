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
        ["fa","fb"],137,141,141.5,144.5,141.5,144.5,function (ret) {
            $("#remember_1_btn").show().click(function () {
                $(this).find("img").attr("src","resource/remember_highlight.png");
                setTimeout(function () {
                    ret.playNext();
                    $(this).find("img").attr("src","resource/remember.png").hide();
                }.bind(this),500)
            })
            // ret.playNext();
        });

    var fs = SimpleMultiChoiceStage2.init("second_qa",145.5,202,$("#submit_2_btn"),$("#second_qa .answer"),$("#second_qa"),
        ["sa","sb","sc"],203,207,208,211.5,208,211.5,function (ret) {
            $("#remember_2_btn").show().click(function () {
                $(this).find("img").attr("src","resource/remember_highlight.png");
                setTimeout(function () {
                    ret.playNext();
                    $(this).find("img").attr("src","resource/remember.png").hide();
                }.bind(this),500)
            })
            // ret.playNext();
        });

    // var ss = ChoiceStage.init("third_qa",212.5,243.5,$("#tb_btn"),$("#ta_btn"),251.5,263,245,251,245,251);
    var ss = ChoiceStage2.init("third_qa",212.5,243.5,$("#tb_btn"),$("#ta_btn"),244,249,249.5,252.5,249.5,252.5,function (ret) {
        $("#remember_3_btn").show().click(function () {
            $(this).find("img").attr("src","resource/remember_highlight.png");
            setTimeout(function () {
                ret.playNext();
                $(this).find("img").attr("src","resource/remember.png").hide();
            }.bind(this),500)
        })
        // ret.playNext();
    });

    // var eights = Stage.init("book",219,328,function (s) {//初始化
    //     $("#p1ToP2").click(function (e) {
    //         s.playNext();
    //     })
    // });
    var bzs = Stage.init("book1",253,282,function (s) {//初始化
        $("#ok_1_btn").click(function (e) {
            $(this).find("img").attr("src","resource/remember_highlight.png");
            setTimeout(function () {
                s.playNext();
                $(this).find("img").attr("src","resource/remember.png");
            }.bind(this),500)

        })
    });
    var bfs = Stage.init("book2",282,291,function (s) {//初始化
        $("#ok_2_btn").click(function (e) {
            $(this).find("img").attr("src","resource/remember_highlight.png");
            setTimeout(function () {
                s.playNext();
                $(this).find("img").attr("src","resource/remember.png");
            }.bind(this),500)

        })
    });
    var ts = ChoiceStage2.init("fourth_qa",291,302,$("#wrong1_btn"),$("#right1_btn"),302.2,307,307.5,311,307.5,311);
    var fours = ChoiceStage2.init("fifth_qa",311.5,314,$("#wrong2_btn"),$("#right2_btn"),314.5,319.5,320,324,320,324);
    var fis = ChoiceStage2.init("sixth_qa",324.5,327.5,$("#wrong3_btn"),$("#right3_btn"),327.7,333.3,333.5,337.5,333.5,337.5);

    var es = Stage.init(null,338,0)


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
