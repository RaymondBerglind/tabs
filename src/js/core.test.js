import * as core from './core';

var windowMock = {id: 'An ID'};
var tabMock = [{
    active: false,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico",
    height: 976,
    highlighted: false,
    id: 31,
    incognito: false,
    index: 0,
    mutedInfo: {
        muted: false
    },
    pinned: false,
    selected: false,
    status: "complete",
    title: "Netflix",
    url: "https://www.netflix.com/browse",
    width: 1680,
    windowId: windowMock.id
}, {
    active: true,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl: "https://staticv2-4.rottentomatoes.com/static/images/icons/favicon.ico",
    height: 976,
    highlighted: true,
    id: 33,
    incognito: false,
    index: 1,
    mutedInfo: {
        muted: false
    },
    pinned: false,
    selected: true,
    status: "complete",
    title: "Black Mirror - Rotten Tomatoes",
    url: "https://www.rottentomatoes.com/tv/black_mirror",
    width: 950,
    windowId: windowMock.id
}, {
    active: false,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl: "https://static.xx.fbcdn.net/rsrc.php/yl/r/H3nktOa7ZMg.ico",
    height: 976,
    highlighted: false,
    id: 356,
    incognito: false,
    index: 2,
    mutedInfo: {
        muted: false
    },
    pinned: false,
    selected: false,
    status: "complete",
    title: "Facebook",
    url: "https://www.facebook.com/",
    width: 1680,
    windowId: windowMock.id
}, {
    active: false,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl: "https://s.ytimg.com/yts/img/favicon_32-vflOogEID.png",
    height: 976,
    highlighted: false,
    id: 360,
    incognito: false,
    index: 3,
    mutedInfo: {
        muted: false
    },
    pinned: false,
    selected: false,
    status: "complete",
    title: "YouTube",
    url: "https://www.youtube.com/",
    width: 1680,
    windowId: windowMock.id
}, {
    active: false,
    audible: false,
    autoDiscardable: true,
    discarded: false,
    favIconUrl: "https://static.xx.fbcdn.net/rsrc.php/yl/r/H3nktOa7ZMg.ico",
    height: 976,
    highlighted: false,
    id: 366,
    incognito: false,
    index: 4,
    mutedInfo: {
        muted: false
    },
    pinned: false,
    selected: false,
    status: "complete",
    title: "Hampus Gunnarsson",
    url: "https://www.facebook.com/bjorn.h.gunnarsson",
    width: 1680,
    windowId: windowMock.id
}];

it('searchAmongTabs', function () {
    var state = core.createInitialState();
    state.tabs = tabMock;

    // The two Facebook tabs should be the only results found in the list.
    expect(core.searchAmongTabs(state, 'faceb').length).toBe(2);

    // 'Facebook' should be at the top of the results list
    expect(core.searchAmongTabs(state, 'faceb')[0].title.indexOf('Faceb') >= 0).toBe(true);
});

it('getTabsToDisplay - Tabs are spread across different windows', function () {
    var tabIndex = 2;
    var state = core.createInitialState();
    state.tabs = tabMock;
    state.tabs[tabIndex].windowId = 'Another ID';
    state.currentWindow = windowMock;

    // Search for the exact title of a certain tab
    state.userInput.searchKey = state.tabs[tabIndex].title;

    // The tab item with the windowID different from the current window's ID should not be present in the results list.
    expect(core.getTabsToDisplay(state).filter((tab) => tab.title === state.tabs[tabIndex].title).length).toBe(0);
});