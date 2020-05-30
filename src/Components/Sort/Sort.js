import React from 'react';
import './Sort.css'

const Sort  = (props) => {
    const {searchBy, searchBy1, searchBy2} = props;
    return (
        <div className='srt'>
            <span >Search</span>
            <select name="seach" id='search' onChange={(e) => searchBy(e.target.value)}>
                <option value='all'>All</option>
                <option value='story'>Stories</option>
                <option value='comment'>Comments</option>
            </select>

            <span>by</span>
            <select name='by' id='by' onChange={(e) => searchBy1(e.target.value)}>
                <option value='popularity'>Popularity</option>
                <option value='date'>Date</option>   
            </select>

            <span>for</span>
            <select name='for' id='for' onChange={(e) => searchBy2(e.target.value)}>
                <option value='all'>All time</option>
                <option value='last24h'>Last 24h</option>
                <option value='pastWeek'>Past Week</option>
                <option value='pastMonth'>Past Month</option>
                <option value='pastYear'>Past Year</option>
            </select>
        </div>
    )
}

export default Sort;