import React from 'react';
import './body.css'

const Body = (props) => {
    const {blogs} = props;
    const mapped = blogs.map((items, i) => {
        const storyTitle = items.story_title;
        const url = items.story_url;
        const id = items.story_id;
        const author = items.author;

        return storyTitle !== ''? (
            <div key={i} className='blg'>
              <h6>{storyTitle}</h6>
              <span>(<a href={url}>{url}</a>)</span>
              <p>{id} | {author}</p>
            </div>
        ): true
        
    })
    return (
       mapped.length === 0? '':mapped
    )
}

export default Body;