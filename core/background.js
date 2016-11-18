function sendRequest(url, async, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    };
    xhr.open("GET", url, async);
    xhr.send(null);
}

var BlackList = {

    load: function() {

        if (this.data != undefined) return this.data;

        var _obj = this;
        url = chrome.extension.getURL('/black_list.json');
        sendRequest(url, false, function(responseText) {
            _obj.data = responseText
        });
        return _obj.data;

    }

}

function onRequest(request, sender, sendResponse) {


    // Return JSON with data
    if (request.action == 'load') {
        sendResponse({ data: BlackList.load() });
    } else if (request.action == 'show') {
        // Show the page action for the tab that the sender (content script)
        // was on.
        chrome.pageAction.show(sender.tab.id);
        localStorage[sender.tab.id] = JSON.stringify(request.save);
    } else if (request.action == 'info') {
        chrome.tabs.query( {currentWindow: true, active : true}, function(tabArray){
            if (tabArray.length == 1) {
                sendResponse({ data: localStorage[tabArray[0].id] });
            }
        });
    }

};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);
