import React, {useState} from 'react';
import Search from './Components/Search/Search'
import Sort from './Components/Sort/Sort'
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer'
import './App.css';
import Signin from './Components/SignIn/SignIn';
import 'tachyons';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [filters, setFilters] = useState('story');
  const [filters1, setFilters1] = useState('popularity');
  const [filters2, setFilters2] = useState('all');
  const [login, setLogin] = useState([]);

  const querySearch = (event) => {
    const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get(`/search_by_date?query=${event.target.value}`)
  .then(function (response) {
    // handle success
    setBlogs(response.data.hits);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }

  const searchBy = (value) => {
    setFilters(value);
  }

  const searchBy1 = (value) => {
    setFilters1(value);
  }

  const searchBy2 = (value) => {
    setFilters2(value);
  }

  const detail = (details) => {
    setLogin(() => details);
  }


  return (
      login.length === 0? <Signin detail={detail} />
      :
      <div>
      <BrowserRouter>
      <div className='main'>
        <Search querySearch={querySearch} name={login[0]}/>
        <Sort 
          searchBy={searchBy}
          searchBy1={searchBy1}
          searchBy2={searchBy2}
         />
         <Body blogs={blogs}/>
       </div>
       </BrowserRouter>
       <Footer/>
      </div>
    )
}

export default App;
