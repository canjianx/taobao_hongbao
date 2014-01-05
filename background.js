/*jslint nomen: true, debug: true, evil: true, vars: true, browser:true, devel:true, indent:4 */
var chrome;
chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("Turning" + tab.url + "red!");
    chrome.tabs.executeScript({
        code : "document.body.style.backgroundColor='red'"
    });
});