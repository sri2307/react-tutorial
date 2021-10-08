import React from 'react';
import {useSelector} from 'react-redux';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header';

const App=() =>{

  const toggle=useSelector(state=>state.navbar.toggle);
 
  return (
   <div className="app">
     <Header />
     <Sidebar />
     
     
     
   </div>
   
  );
}

export default App;
