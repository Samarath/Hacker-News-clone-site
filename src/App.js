import React, {useState, useEffect} from 'react';
import Search from './Components/Search/Search'
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer'
import './App.css';
import Signin from './Components/SignIn/SignIn';
import 'tachyons';
import Sort from './Components/Sort/Sort'
import 'axios'

const App = () => {
  
  const [blogs, setPage1] = useState([]);
  const [login, setLogin] = useState([]);
  const [filter, setFilters] = useState('');
  const [qury, setqry] = useState('');

  useEffect(() => {
    querySearch();
  }, []);

  const querySearch = (event) => {

    const axios = require('axios');
    let query = ' ';
    if(event !== ''){
      query = event;
      setqry(event);
    }


   axios.get(`/search?query=${query}&tags=${filter}`)
  .then(function (response) {
    setPage1(response.data.hits)
  })
  .catch(function (error) {
    console.log(error);
  })

  }

  const logout = () => {
    setLogin([]);
  }

  const searchBy = (value) => {

    fetch(`/search?query=${qury}&tags=${value}`)
    .then(response => response.json())
    .then(res => setPage1(res.hits));

    setFilters(value);

  }

  const searchBy1 = (value) => {
    if(value === 'reset'){

      fetch(`/search?query=${qury}&tags=${filter}`)
      .then(response => response.json())
      .then(res => setPage1(res.hits))

    }else {
      fetch(`/search_by_date?query=${qury}`)
      .then(response => response.json())
      .then(res => setPage1(res.hits))
    }
  }

  const detail = (details) => {
    setLogin(() => details);
  }


  return (
      login.length === 0? <Signin detail={detail} />
      :
      <div>
      <div className='main'>
         <Search querySearch={querySearch} name={login[0]} logout={logout}/>
         <Sort searchBy={searchBy} searchBy1={searchBy1}/>
         <Body blogs={blogs}/>
       </div>
       <Footer/>
      </div>
    )
}

export default App;
