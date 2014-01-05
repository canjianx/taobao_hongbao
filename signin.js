/*jslint nomen: true, debug: true, evil: true, vars: true, browser:true, devel:true, indent:4 */
// jinshankuaipan sign-in code.
var chrome;
var sign = {
    "jinshankuaipan" : function () {
        setTimeout(function () {
            $("#sign-in").simulate("click");
            setTimeout(function () {
                $(".dialog-close").click();
            }, 1000);
        }, 3000);
    }
};
console.log("hello world");
sign.jinshankuaipan();