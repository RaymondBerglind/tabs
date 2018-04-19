import React from 'react';
import List from './views/list/component';
import Search from './views/search/component';
import * as core from './core';
import * as tabUtil from './utils/tabUtil';
import './../styles/App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = core.createInitialState();
		this.fetchTabs = this.fetchTabs.bind(this);
		this.triggerEvent = this.triggerEvent.bind(this);
		this.addKeyListeners();
		this.fetchTabs();
	}

	addKeyListeners() {
		document.addEventListener('keydown', (event) => {
			const keyName = event.key;
		  
			if (keyName === 'ArrowDown') {
				this.setState(prevState => core.setHighlightedTabIndex(prevState, core.getHighlightedTabIndex(prevState) + 1));
			} else if (keyName === 'ArrowUp') {
				this.setState(prevState => core.setHighlightedTabIndex(prevState, core.getHighlightedTabIndex(prevState) - 1));
			} else if (keyName === 'Enter') {
				this.triggerEvent({name: 'tabWasSelected', data: {tab: core.getTabsToDisplay(this.state)[core.getHighlightedTabIndex(this.state)]}});
			}
		  }, false);
	}

	clearHighlightedTabItem() {
		this.setState(prevState => core.resetHighlightedTab(prevState));
	}

	highlightTabItem(state, tab) {
		var tabIndex = core.getTabs(state).indexOf(tab);
		this.setState(prevState => core.setHighlightedTabIndex(prevState, tabIndex));
	}

	fetchTabs() {
		const thisComponent = this;
		tabUtil.getAllTabs().then(
			function(tabs) {
				thisComponent.setState(prevState => core.receiveTabs(prevState, tabs));
		});
	}

	triggerEvent(event) {
		if (event.name === 'searchInputWasChanged') {
			this.setState(prevState => core.receiveSearchInput(prevState, event.data.searchInput));
		} else if (event.name === 'tabWasHighlighted') {
			this.highlightTabItem(this.state, event.data.tab);
		} else if (event.name === 'clearHighlightedTabItem') {
			this.clearHighlightedTabItem();
		} else if (event.name === 'tabWasSelected') {
			if (event.data.tab) {
				tabUtil.selectTab(event.data.tab);
				console.log('Tab was selected: ' + event.data.tab.title);
			}
		}
	}
	render() {
		return (
			<div className="App">
				<Search
					triggerEvent={this.triggerEvent} />
				<List
					tabs={core.getTabsToDisplay(this.state)}
					highlightedTabIndex={core.getHighlightedTabIndex(this.state)}
					triggerEvent={this.triggerEvent} />
			</div>
		);
	}
}