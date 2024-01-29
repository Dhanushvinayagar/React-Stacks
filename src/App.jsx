import React from 'react';
import { Routes, Route } from "react-router-dom";
import Toast from './Usecase/Toast';
import Usestate from './Usecase/Usestate';
import Useref from './Usecase/Useref';
import Home from './Components/Home';
import Memorize from './Usecase/Memorize';

import Login from './Form/Login';
import Signup from './Form/Signup';
import './App.css'
import Homepage from './pages/Homepage';
import Post from './pages/Post';
import Tanstack from './Tanstack/Tanstack';
import TanstackId from './Tanstack/TanstackId';
import Source from './Cases/Source';

// To work on Tanstack run command "npm run serve"
const App = () => {
  // console.log(process.env.REACT_APP_BASE_URL);
  return (
    <div className='App'>
      {/* <Usestate /> */}
      {/* <Useref /> */}
      {/* <Toast /> */}
      {/* <Home />  */}    {/* parent child relationship */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/post/:id" element={<Post />} />


        {/* useCallback useMemo */}
        <Route path="/usestate" element={<Usestate />} />
        <Route path="/useref" element={<Useref />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/props" element={<Home />} />
        <Route path="/memo" element={<Memorize />} />

        {/* tanstack query */}
        <Route path="/tanstack" element={<Tanstack />} />
        <Route path="/tanstack/:id" element={<TanstackId />} />

        {/* Packages */}
        <Route path="/packages" element={<Source />} />


        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </div>

  );
};

export default App;
