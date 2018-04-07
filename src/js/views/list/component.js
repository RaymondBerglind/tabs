import React from 'react';

export default function () {
    function TabListItem(props) {
        var tab = props.tab;
        return (
            <li>
                <div className={'tab-item' + (props.highlighted ? ' highlighted' : '')}
                    onClick={function() {
                        props.triggerEvent({name: 'tabWasHighlighted', data: {tab}})
                    }}>
                    <img className='tab-item-favicon' src={tab.favIconUrl} alt=''/>
                    <span className='tab-item-title'>{tab.title}</span>
                    <span className='tab-item-url'>{tab.url}</span>
                </div>
            </li>
        )
    }

    return function (props) {
        return props.tabs ? (
            <ul className='tab-list'>{props.tabs.map(function(tab, index) {
                return <TabListItem {...props}
                                    tab={tab}
                                    highlighted={props.highlightedTabIndex === index}
                                    key={tab.id} />
            })}</ul>
        ) : null;
    }
}
