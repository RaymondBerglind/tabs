// Fix for a chrome extension bug only occurring on macOS (https://bugs.chromium.org/p/chromium/issues/detail?id=428044#c13).
// if (window.navigator.userAgent.indexOf("Mac" != -1)) {
//     document.body.style.opacity = 0;
//     document.body.style.transition = 'opacity ease-out .4s';
//     requestAnimationFrame(function() {
//       document.body.style.opacity = 1;
//     });
// }

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
      if (request.event === 'getAllTabs') {
          chrome.tabs.query({}, function(tabs) {
              console.log('Tabs: ' + tabs);
              sendResponse({tabs});
          });
      } else if (request.event === 'selectTab') {
          chrome.tabs.update(request.data.tabId, {active: true}, function () {
            sendResponse();
          });
      }
      return true; // Return true to indicate that this is asynchronous.
    }
);
