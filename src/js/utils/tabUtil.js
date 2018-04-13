/*global chrome*/
import tabMock from '../mocks/tabMock';

export function getAllTabs() {
    return new Promise(function (resolve, reject) {
        // TODO: Error handling
        if (process.env.NODE_ENV === 'development') {
            resolve(tabMock());
        }

        chrome.runtime.sendMessage({ event: 'getAllTabs' }, function (response) {
            resolve(response && response.tabs ? response.tabs : []);
        });
    });
}

export function selectTab(tab) {
    return new Promise(function (resolve, reject) {
        chrome.runtime.sendMessage({ event: 'selectTab', data: {tabId: tab.id }}, function (response) {
            resolve();
        });
    })
}

export function searchForTabs(tabs, key) {
    // TODO
}