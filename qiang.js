/*jslint nomen: true, debug: true, evil: true, vars: true, browser:true, devel:true, indent:4 */
// jinshankuaipan sign-in code.
var chrome;
var start = false;
var qiang = function () {
    setTimeout(function () {
        $("#J_startgame:visible").simulate("click");
    }, 500);
    var b = setInterval(function () {
        if ($("#J_GameStartBtn:visible").length !== 0 && !start) {
            setTimeout(function () {
                $("#J_GameStartBtn:visible").simulate("click");
            }, 2000);
            start = true;
            clearInterval(b);
        }
    }, 1000);
    var a = setInterval(function () {
        $("#J_GameLotteryReplayBtn:visible").simulate("click");
        $("#quarkasMonster").simulate("mousedown", {"clientX": 692, "clientY": 270});
    }, 300);
};

qiang();