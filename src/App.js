import React, {useState, useEffect} from 'react';
import Search from './Components/Search/Search'
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer'
import './App.css';
import Signin from './Components/SignIn/SignIn';
import 'tachyons';

const App = () => {
  // const [filters, setFilters] = useState('');
  const [blogs, setPage1] = useState([]);
  const [login, setLogin] = useState([]);
  // const [secondPage, setPage2] = useEffect([]);
  // const [thirdPage, setPage3] = useEffect([]);
  // const [forthPage, setPage4] = useEffect([]);
  // const [fifthPage, setPage5] = useEffect([]);

  useEffect(() => {
    querySearch();
  }, []);

  const querySearch = (event) => {
    const axios = require('axios');
    let query = ' ';
    if(event !== ''){
      query = event;
    }


   axios.get(`/search?query=${query}&tags=story`)
  .then(function (response) {
    // handle success
    console.log(response);
    setPage1(response.data.hits)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  }

  const logout = () => {
    setLogin([]);
  }

  // const searchBy = (value) => {
  //   console.log(value);
  //   setFilters(value);

  // }

  const detail = (details) => {
    setLogin(() => details);
  }


  return (
      login.length === 0? <Signin detail={detail} />
      :
      <div>
      <div className='main'>
         <Search querySearch={querySearch} name={login[0]} logout={logout}/>
         <Body blogs={blogs}/>
       </div>
       <Footer/>
      </div>
    )
}

export default App;
