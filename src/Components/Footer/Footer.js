import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='ft'>
           <ul>
             <li><a href='#'>about</a></li>
             <li><a href='https://news.ycombinator.com/'>Hacker news</a></li>
             <li><a href='https://hn.algolia.com/api'>API Documentation</a></li>
           </ul> 
        </div>
    )
}

export default Footer;