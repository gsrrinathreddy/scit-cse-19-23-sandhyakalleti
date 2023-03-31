import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import INavbar from './components/INavbar';
import Aboutus from './pages/Aboutus';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import { Card } from '@mui/material';
function App() {
  return(
    <div className='App'>
      <INavbar/>
      <Routes>
        <Route path="Aboutus"element ={<Aboutus/>}/>
        <Route path="Experience"element ={<Experience/>}/>
        <Route path="Hobbies"element ={<Hobbies/>}/>
        <Route path="Qualification"element ={<Qualification/>}/>
        <Route path="Skills"element ={<Skills/>}/>
     </Routes>
      
    </div>
  );
}

export default App;
