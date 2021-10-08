import React from 'react';

import './App.css';

import Home from './components/Home/Home';
import {BrowserRouter} from 'react-router-dom'


const App=() =>{

  // const toggle=useSelector(state=>state.navbar.toggle);
 
  return (
    <BrowserRouter>
    <Home/>
    </BrowserRouter>
     
     
     
    
   
  );
}

export default App;
