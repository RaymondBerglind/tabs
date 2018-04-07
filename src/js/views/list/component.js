import React from 'react';

export default function () {
    function TabListItem(tab) {
        return (
            <li key={tab.id}>
                <div className='tab-item'>
                    <img className='tab-item-favicon' src={tab.favIconUrl} alt=''/>
                    <span className='tab-item-title'>{tab.title}</span>
                    <span className='tab-item-url'>{tab.url}</span>
                </div>
            </li>
        )
    }

    return function (props) {
        var tabs = props.tabs;

        return tabs ? (
            <ul className='tab-list'>{tabs.map(TabListItem)}</ul>
        ) : null;
    }
}
