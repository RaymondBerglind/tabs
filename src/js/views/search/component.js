import React from 'react';
import searchIcon from '../../../Assets/Icon/ic_search_white_24px.svg';

export default function (props) {
    return (
        <div className='search-box'>
            <img src={searchIcon} alt='' className='search-icon' />
            <input
                type='text'
                className='search-box-input'
                placeholder='Search for tabs…'
                onChange={function(e) {
                    props.triggerEvent({name: 'searchInputWasChanged', data: {searchInput: e.target.value}});
                }} />
        </div>
    );
}