/*jslint nomen: true, debug: true, evil: true, vars: true, browser:true, devel:true, indent:4 */
// jinshankuaipan sign-in code.
var chrome;
var qiang = function () {
    var a = setInterval(function () {
        //$("#J_GameLotteryReplayBtn").simulate("click")
        $("#J_startgame:visible").simulate("click");
        $("#J_GameStartBtn:visible").simulate("click");
        $("#J_GameLotteryReplayBtn:visible").simulate("click");
        $("#quarkasMonster").simulate("mousedown", {"clientX": 692, "clientY": 270});
        $("#quarkasMonster").simulate("mousedown", {"clientX": 792, "clientY": 270});
        $("#quarkasMonster").simulate("mousedown", {"clientX": 892, "clientY": 270});
        $("#J_GameLotterySureBtn:visible").simulate("click");
    }, 300);
};

qiang();