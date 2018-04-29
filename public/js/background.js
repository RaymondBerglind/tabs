chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.event === 'getAllTabs') {
          chrome.tabs.query({}, function(tabs) {
              console.log('Tabs: ' + tabs);
              sendResponse({tabs});
          });
      } else if (request.event === 'selectTab') {
          chrome.tabs.update(request.data.tabId, {active: true}, function () {
            sendResponse();
          });
      } else if (request.event === 'getCurrentWindow') {
          chrome.windows.getCurrent({}, function(window) {
            sendResponse({window});
          })
      }
      return true; // Return true to indicate that this is asynchronous.
    }
);
