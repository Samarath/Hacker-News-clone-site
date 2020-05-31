import React from 'react';
import './Sort.css'

const Sort  = (props) => {
    const {searchBy, searchBy1} = props;
    return (
        <div className='srt'>
            <span >Search</span>
            <select name="seach" id='search' onChange={(e) => searchBy(e.target.value)}>
                <option value='story'>Stories</option>
                <option value='show_hn'>Show hn</option>
            </select>

            <span >by</span>
            <select name="seach" id='search' onChange={(e) => searchBy1(e.target.value)}>
                <option value='reset'>All</option>
                <option value='date'>Date</option>
            </select>

        </div>
    )
}

export default Sort;