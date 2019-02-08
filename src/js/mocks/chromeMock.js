// Development mocks.
const windowId = 'The window ID'
export function getAllTabs() {
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
        windowId: windowId
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
        windowId: windowId
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
        windowId: windowId
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
        windowId: windowId
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
        windowId: windowId
    }];

    return new Promise(function (resolve, reject) {
        resolve(tabMock);
    });
}

export function selectTab({tab}) {
    return new Promise(function (resolve, reject) {
        console.log("Tab selected:" + tab.title);
        resolve();
    });
}

export function getCurrentWindow() {
    return new Promise(function (resolve, reject) {
        console.log("Got the current window");
        resolve({id: windowId});
    });
}

export function focusOnWindow(windowId) {
    return new Promise(function (resolve, reject) {
        resolve();
    })
}