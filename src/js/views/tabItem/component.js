import React from 'react';
import tabIcon from '../../../Assets/Icon/ic_tab_white_24px.svg';

export default function (props) {
    var tab = props.tab;
    return (
        <li>
            <div className={'tab-item' + (props.highlighted ? ' highlighted' : '')}
                onClick={function() {
                    props.triggerEvent({name: 'tabWasSelected', data: {tab}});
                }}
                onMouseMove={function() {
                    props.triggerEvent({name: 'tabWasHighlighted', data: {tab}});
                }}>
                <img className='tab-item-favicon' src={tab.favIconUrl ? tab.favIconUrl : tabIcon} alt=''/>
                <span className='tab-item-title'>{tab.title}</span>
                <span className='tab-item-url'>{tab.url}</span>
            </div>
        </li>
    );
}
