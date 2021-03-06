import React from 'react';
import TabListItem from '../tabItem/component';

export default function (props) {
    return props.tabs ? (
        <ul className='tab-list'
            onMouseLeave={function() {
                props.triggerEvent({name: 'clearHighlightedTabItem'});
            }}>
            {props.tabs.map(function(tab, index) {
                return <TabListItem triggerEvent={props.triggerEvent}
                                    tab={tab}
                                    highlighted={props.highlightedTabIndex === index}
                                    key={tab.id} />
            })}
        </ul>
    ) : null;
}
