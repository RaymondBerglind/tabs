// import * as tabUtil from './utils/tabUtil';
import Fuse from 'fuse.js';

export function createInitialState() {
    return {
        tabs: [],
        userInput: {
            highlightedTabIndex: null
        }
    }
}

export function setTabs(state, value) {
    state.tabs = value;
    return state;
}

export function getTabs(state) {
    return state.tabs;
}

export function getHighlightedTabIndex(state) {
    return state.userInput.highlightedTabIndex;
}

export function setHighlightedTabIndex(state, value) {
    if (!(value > (state.tabs.length - 1) || value < 0)) {
        state.userInput.highlightedTabIndex = value;
    }
    return state;
}

export function resetHighlightedTab(state) {
    state.userInput.highlightedTabIndex = null;
    return state;
}

export function searchAmongTabs(state, key) {
    var options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          "id",
          "url"
      ]
    };
    var fuse = new Fuse(state.tabs, options);
    return fuse.search(key);
}