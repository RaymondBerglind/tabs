// import * as tabUtil from './utils/tabUtil';
import Fuse from 'fuse.js';

export function createInitialState() {
    return {
        tabs: [],
        tabsToDisplay: [],
        userInput: {
            highlightedTabIndex: 0,
            searchKey: ''
        }
    }
}

export function receiveTabs(state, value) {
    state.tabs = value;
    state.tabsToDisplay = value;
    return state;
}

export function getTabs(state) {
    return state.tabs;
}

export function getTabsToDisplay(state) {
    return state.userInput.searchKey === '' ? [] : state.tabsToDisplay;
}

export function getHighlightedTabIndex(state) {
    return state.userInput.highlightedTabIndex;
}

export function setHighlightedTabIndex(state, value) {
    if (!(value > (state.tabsToDisplay.length - 1) || value < 0)) {
        state.userInput.highlightedTabIndex = value;
    }
    return state;
}

export function resetHighlightedTab(state) {
    state.userInput.highlightedTabIndex = null;
    return state;
}

export function getSearchKey(state) {
    return state.userInput.searchKey;
}

export function setSearchKey(state, value) {
    state.userInput.searchKey = value;
    return state;
}

export function searchAmongTabs(state, searchKey) {
    if (searchKey === '') {
        return state.tabs;
    }

    var options = {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 200,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [{
            name: "title",
            weight: 0.7
        }, {
            name: "url",
            weight: 0.3
        }]
    };
    var fuse = new Fuse(state.tabs, options);
    return fuse.search(searchKey);
}

export function searchKeyMatchesTopResult(state) {
    var topResult = state.tabsToDisplay[0];
    if (topResult) {
        return topResult.title.substring(0, state.userInput.searchKey.length).toUpperCase() === state.userInput.searchKey;
    }
    return false;
}

export function receiveSearchInput(state, searchInput) {
    // TODO: remove?
    state.userInput.searchKey = searchInput;

    state.tabsToDisplay = searchAmongTabs(state, state.userInput.searchKey);
    return state;
}