/*global chrome*/

export function getAllTabs() {
    return new Promise(function (resolve, reject) {
        chrome.runtime.sendMessage({ event: 'getAllTabs' }, function (response) {
            resolve(response && response.tabs ? response.tabs : []);
        });
    });
}

export function selectTab(tab) {
    return new Promise(function (resolve, reject) {
        chrome.runtime.sendMessage({event: 'selectTab', data: {tabId: tab.id}}, function (response) {
            resolve();
        });
    })
}

export function focusOnWindow(windowId) {
    return new Promise(function (resolve, reject) {
        chrome.runtime.sendMessage({event: 'focusOnWindow', data: {windowId}}, function (response) {
            resolve();
        });
    })
}
