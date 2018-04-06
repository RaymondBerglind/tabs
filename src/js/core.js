import * as tabUtil from './utils/tabUtil';

export function createInitialState() {
    return {
        tabs: [],
    }
}

export function setTabs(state, value) {
    state.tabs = value;
    return state;
}

export function getTabs(state) {
    return state.tabs;
}