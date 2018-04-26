import React from 'react';
import tabIcon from '../../../Assets/Icon/ic_tab_white_24px.svg';

export default class TabItem extends React.Component {
    constructor(props) {
        super(props);
        this.tabItem = React.createRef();
    }

    componentDidUpdate() {
        if (this.props.highlighted) {
            this.tabItem.current.scrollIntoView({block: 'nearest'});
        }
    }

    render() {
        var tab = this.props.tab
        return (
            <li ref={this.tabItem}>
                <div className={'tab-item' + (this.props.highlighted ? ' highlighted' : '')}
                    onClick={function() {
                        this.props.triggerEvent({name: 'tabWasSelected', data: {tab}});
                    }}
                    onMouseMove={function() {
                        this.props.triggerEvent({name: 'tabWasHighlighted', data: {tab}});
                    }}>
                    <img className='tab-item-favicon' src={tab.favIconUrl ? tab.favIconUrl : tabIcon} alt=''/>
                    <span className='tab-item-title'>{tab.title}</span>
                    <span className='tab-item-url'>{tab.url}</span>
                </div>
            </li>
        );
    }
}
