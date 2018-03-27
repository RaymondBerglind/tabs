/*global chrome*/
export function getAllTabs() {
    chrome.runtime.sendMessage({ event: 'getAllTabs' }, function (response) {
        return response && response.tabs ? response.tabs : [];
    });
}