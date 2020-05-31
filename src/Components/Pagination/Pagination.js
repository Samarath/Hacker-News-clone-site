import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Body from '../Body/Body'

const Paginaion = () => {
    return(
        <BrowserRouter>
        <div>
           <Switch>
               <Route path='page=0' component={Body}/>
               <Body blogs={blogs}/>
           </Switch> 
           
         </div>
         </BrowserRouter>
    )
}
export default Paginaion;
//In order to use it i need to make almost five or six bodies with other urls then i will do routing to it and i need to hurry because i don't have much time for it 
//I also need to fix a way to fix the urls because the url is broken and based on that i made this site responsive and made some other changes and also i need to fix some functionality for it , so hurry tomorrow is very important day for you and don't waste too much time to here and there just do it okay