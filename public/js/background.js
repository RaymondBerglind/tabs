chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.event === 'getAllTabs') {
            chrome.tabs.query({}, function(tabs) {
                sendResponse({tabs});
            });
      } else if (request.event === 'selectTab') {
            chrome.tabs.update(request.data.tabId, {active: true}, function () {
                sendResponse();
            });
      } else if (request.event === 'focusOnWindow') {
            chrome.windows.update(request.data.windowId, {focused: true}, function () {
                sendResponse();  
            });
      }
      
      return true; // Return true to indicate that this is asynchronous.
    }
);
