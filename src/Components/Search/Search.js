import React from 'react';
import './Search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaHeading } from "react-icons/fa";
import { IconContext } from "react-icons";

const Search = (props) => {
    const {querySearch} = props;
    let username = props.name;

    if(username.length > 5){
       username = username.slice(0,5) + '...'
    }

    return (
        <div className="search">
           <IconContext.Provider value={{className: "icon1" }}>
              <div>
                 <FaHeading />
              </div>
           </IconContext.Provider>
           
            <span className='user'>{username}</span>
            <div className='inp'>
            <IconContext.Provider value={{className: "icon" }}>
                <div>
                    <FaSearch />
                </div>
             </IconContext.Provider>
                  <input type="text" placeholder="Search stories by title, url or author" onChange={(e) => querySearch(e.target.value)}/>
            </div>      
            
        </div>
    )
}

export default Search;