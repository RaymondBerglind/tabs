import * as tabUtil from './utils/tabUtil';

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
    state.userInput.highlightedTabIndex = value;
    return state;
}