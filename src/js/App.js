import React from 'react';
import logo from './../Assets/logo.svg';
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
		this.fetchTabs();
	}

	fetchTabs() {
		const thisComponent = this;
		tabUtil.getAllTabs().then(
			function(tabs) {
				thisComponent.setState((prevState) => core.setTabs(prevState, tabs));
		});
	}

	render() {
		return (
			<div className="App">
				<List tabs={core.getTabs(this.state)}/>
			</div>
		);
	}
}