import React from 'react';
import './body.css'

const Body = (props) => {
    const  {blogs} = props;

    console.log(blogs)

    const mapped = blogs.map((items, i) => {
        const storyTitle = items.title;
        const url = items.url;
        const id = items.points;
        const author = items.author;
        const comment = items.num_comments;

        return storyTitle !== ''? (
            <div key={i} className='blg'>
              <h6><a href={url}>{storyTitle}</a></h6>
              <span className='user'>(<a href={url}>{url}</a>)</span>
              <p><a href={url}>{id} points</a> | <a href={url}>{author}</a> | <a href={url}>{comment} comments</a></p>
            </div>
        ): true
        
    })
    return (
       mapped.length === 0? '':mapped
        // <h1>heelo</h1>
    )
}

export default Body;