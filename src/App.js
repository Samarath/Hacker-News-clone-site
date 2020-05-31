import React, {useState, useEffect} from 'react';
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
  const [filters, setFilters] = useState('');
  const [login, setLogin] = useState([]);

  useEffect(() => {
    querySearch();
  }, []);

  const querySearch = (event) => {
    const axios = require('axios');
    let query = ' ';
    if(event !== ''){
      query = event;
    }

  //  axios.all([
  //     axios.get(`search?query=${query}&tags=story&page=1`),
  //     axios.get(`search?query=${query}&tags=story&page=2`),
  //     axios.get(`search?query=${query}&tags=story&page=3`),
  //     axios.get(`search?query=${query}&tags=story&page=4`),
  //     axios.get(`search?query=${query}&tags=story&page=5`)
  //   ])
  //   .then(axios.spread(page1, page2, page3, page4, page5) => {

  //   })
    axios.all([axios.get(`search?query=${query}&tags=story&page=1`),
           axios.get(`search?query=${query}&tags=story&page=2`),
           axios.get(`search?query=${query}&tags=story&page=3`)])
     .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {  
         console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
     }))
     .catch(error => console.log(error));

  //  axios.get(`search?query=${query}&tags=story&page=2`)
  // .then(function (response) {
  //   setBlogs(response.data.hits);
  //   console.log('page 2');
  //  })
  //  .catch(function (error) {
  //     console.log(error);
  //  })
  }

  const searchBy = (value) => {
    console.log(value);
    setFilters(value);

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
         <Body blogs={blogs}/>
       </div>
       </BrowserRouter>
       <Footer/>
      </div>
    )
}

export default App;
