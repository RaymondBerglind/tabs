chrome.commands.onCommand.addListener(function(command) {
    // chrome.tabs.query({currentWindow: true}, function(tabs) {
    //   // Sort tabs according to their index in the window.
    //   tabs.sort((a, b) => { return a.index < b.index; });
    //   let activeIndex = tabs.findIndex((tab) => { return tab.active; });
    //   let lastTab = tabs.length - 1;
    //   let newIndex = -1;
    //   if (command === 'flip-tabs-forward')
    //     newIndex = activeIndex === 0 ? lastTab : activeIndex - 1;
    //   else  // 'flip-tabs-backwards'
    //     newIndex = activeIndex === lastTab ? 0 : activeIndex + 1;
    //   chrome.tabs.update(tabs[newIndex].id, {active: true, highlighted: true});
    // });
    /* eslint-disable no-undef */
    chrome.tabs.query({}, function (tabs) {
        console.log(tabs)
    });
  }
);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello") {
          chrome.tabs.query({}, function(tabs) {
              console.log('Tabs: ' + tabs);
              sendResponse({tabs});
          })
      }
      return true; // Return true to indicate that this is asynchronous.
    }
);
