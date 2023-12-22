import React from 'react';
import Toast from './Usecase/Toast';
import { Routes , Route } from "react-router-dom";
import Usestate from './Usecase/Usestate';
import Useref from './Usecase/Useref';
import Login from './Form/Login';
import Signup from './Form/Signup';
import Home from './Components/Home';

const App = () => {

  return (
  <>
      {/* <Usestate /> */}
      {/* <Useref /> */}
      {/* <Toast /> */}
      <Routes>
        <Route path="/" element={<Login /> } /> 
        <Route path="/signup" element={ <Signup /> } /> 
        <Route path="/home" element={<Home /> } /> 
      </Routes>
    
     
  </>

  );
};

export default App;
