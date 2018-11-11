import React from 'react';
import List from './views/list/component';
import Search from './views/search/component';
import * as core from './core';
import * as chromeUtil from './utils/chromeUtil';
import './../styles/App.css';

export default function App() {
	const [state, setState] = React.useState(core.createInitialState());
	
	function handleKeyDown(event) {
		const keyName = event.key;
	  
		if (keyName === 'ArrowDown') {
			setState(core.setHighlightedTabIndex(state, core.getHighlightedTabIndex(state) + 1));
		} else if (keyName === 'ArrowUp') {
			setState(core.setHighlightedTabIndex(state, core.getHighlightedTabIndex(state) - 1));
		} else if (keyName === 'Enter') {
			triggerEvent({name: 'tabWasSelected', data: {tab: core.getTabsToDisplay(state)[core.getHighlightedTabIndex(state)]}});
		}
	  }

	function clearHighlightedTabItem() {
		setState(core.resetHighlightedTab(state));
	}

	function highlightTabItem(state, tab) {
		var tabIndex = core.getTabsToDisplay(state).indexOf(tab);
		setState(core.setHighlightedTabIndex(state, tabIndex));
	}

	function fetchTabs() {
		chromeUtil.getAllTabs().then(
			function(tabs) {
				setState(core.receiveTabs(state, tabs));
		});
	}

	function triggerEvent(event) {
		if (event.name === 'searchInputWasChanged') {
			setState(core.receiveSearchInput(state, event.data.searchInput));
		} else if (event.name === 'tabWasHighlighted') {
			console.log('Tab was highlighted');
			highlightTabItem(state, event.data.tab);
		} else if (event.name === 'clearHighlightedTabItem') {
			clearHighlightedTabItem();
		} else if (event.name === 'tabWasSelected') {
			if (event.data.tab) {
				chromeUtil.selectTab(event.data.tab).then(
					function() {
						chromeUtil.focusOnWindow(event.data.tab.windowId);
					}
				)
			}
		}
	}

	React.useEffect(() => {
		document.addEventListener('keydown', handleKeyDown, false);
		
		if (core.getTabs(state).length === 0) {
			fetchTabs();
		} 
		

		return () => {
			document.removeEventListener('keydown', handleKeyDown, false);
		}
	});
	
	return (
		<div className="App">
			<Search
				triggerEvent={triggerEvent} />
			<List
				tabs={core.getTabsToDisplay(state)}
				highlightedTabIndex={core.getHighlightedTabIndex(state)}
				triggerEvent={triggerEvent} />
		</div>
	);
}