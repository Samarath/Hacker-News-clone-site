import React from 'react';
import './body.css'

const Body = (props) => {
    const  {blogs} = props;
    const mapped = blogs.map((items, i) => {
        
        let url = items.url;
        const id = items.points;
        const author = items.author;
        const comment = items.num_comments;
        let storyTitle = items.title;

        return (
            <div key={i} className='blg'>
              <h6><a href={url}>{storyTitle}</a></h6>
              <span className='user'>(<a href={url}>{url}</a>)</span>
              <p><a href={url}>{id} points</a> | <a href={url}>{author}</a> | <a href={url}>{comment} comments</a></p>
            </div>
        )
        
    })
    return (
       mapped.length === 0? '':mapped
        // <h1>heelo</h1>
    )
}

export default Body;