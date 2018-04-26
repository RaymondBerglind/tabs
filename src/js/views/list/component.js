import React from 'react';
import TabListItem from '../tabItem/component';

export default function (props) {
    return props.tabs ? (
        <ul className='tab-list'
            // style={{pointerEvents: 'none'}}
            onMouseLeave={function() {
                props.triggerEvent({name: 'clearHighlightedTabItem'});
            }}>
            {props.tabs.map(function(tab, index) {
                return <TabListItem {...props}
                                    tab={tab}
                                    highlighted={props.highlightedTabIndex === index}
                                    key={tab.id} />
        })}</ul>
    ) : null;
}
