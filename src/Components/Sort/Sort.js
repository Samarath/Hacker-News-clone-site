import React from 'react';
import './Sort.css'

const Sort  = (props) => {
    const {searchBy} = props;
    return (
        <div className='srt'>
            <span >Search</span>
            <select name="seach" id='search' onChange={(e) => searchBy(e.target.value)}>
                <option value='story'>Stories</option>
                <option value='comment'>Comments</option>
            </select>

        </div>
    )
}

export default Sort;