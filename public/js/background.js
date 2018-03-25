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

