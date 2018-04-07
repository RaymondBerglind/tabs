import React from 'react';
import listComponentMaker from './views/list/component';
import * as core from './core';
import * as tabUtil from './utils/tabUtil';
import './../styles/App.css';

const List = listComponentMaker();

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = core.createInitialState();
		this.fetchTabs = this.fetchTabs.bind(this);
		this.triggerEvent = this.triggerEvent.bind(this);
		this.fetchTabs();
	}

	triggerEvent(event) {
		if (event.name === 'tabWasHighlighted') {
			this.highlightTabItem(this.state, event.data.tab);
		}
	}

	highlightTabItem(state, tab) {
		var tabIndex = core.getTabs(state).indexOf(tab);
		this.setState(prevState => core.setHighlightedTabIndex(prevState, tabIndex));
	}

	fetchTabs() {
		const thisComponent = this;
		tabUtil.getAllTabs().then(
			function(tabs) {
				thisComponent.setState(prevState => core.setTabs(prevState, tabs));
		});
	}

	render() {
		return (
			<div className="App">
				<List
					tabs={core.getTabs(this.state)}
					highlightedTabIndex={core.getHighlightedTabIndex(this.state)}
					triggerEvent={this.triggerEvent} />
			</div>
		);
	}
}