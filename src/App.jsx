import React from 'react';
import Toast from './Usecase/Toast';
import { Routes , Route } from "react-router-dom";
import Usestate from './Usecase/Usestate';
import Useref from './Usecase/Useref';
import Login from './Form/Login';
import Signup from './Form/Signup';
import Home from './Components/Home';
import './App.css'
import Homepage from './pages/Homepage';
import Post from './pages/Post';
const App = () => {

  return (
  <div className='App'>
      {/* <Usestate /> */}
      {/* <Useref /> */}
      {/* <Toast /> */}
      {/* <Home />  */}    {/* parent child relationship */}
      <Routes>
        <Route path="/" element={<Login /> } /> 
        <Route path="/signup" element={ <Signup /> } /> 
        <Route path="/home" element={ <Homepage />} />   
        <Route path="/post/:id" element={ <Post />} />   
        
      </Routes>  
  </div>

  );
};

export default App;
