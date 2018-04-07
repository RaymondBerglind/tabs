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
        });''
    });
}

export function selectTab(tab) {
    // TODO
}

export function searchForTabs(tabs, key) {
    // TODO
}