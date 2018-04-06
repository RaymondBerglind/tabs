import React from 'react';

export default function () {
    function TabListItem(tab) {
        return (
            <li key={tab.id}>
                <button>{tab.title}</button>
            </li>
        )
    }

    return function (props) {
        var tabs = props.tabs;

        return tabs ? (
            <ul>{tabs.map(TabListItem)}</ul>
        ) : null;
    }
}
