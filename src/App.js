
import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from './Contexts/AuthContexts';


import './App.scss'

//Components
import Nav from './Containers/Nav/nav';
import Footer from './Containers/Footer/footer';

import Home from './Pages/Home/home';
// Info Pages
import Rates from './Pages/Rates/rates';
// Program Pages
import Programs from './Pages/Programs/programs';
// User Pages
import Account from './Pages/Account/account';
import Profile from './Pages/Profile/profile';
// Utility Pages
import NotFound from './Pages/Not-Found/not_found';
// import Loading from './Pages/Loading/loading';
import Backend from './Pages/Backend/backend';
require('dotenv').config("./src");

function App() {
  const { currentUser } = useAuth()

  return <>
      <Nav />
      <div className='content'>
        <Routes>
            <Route exact path="/" element={<Home />} />

            {/* Redirects */}
            {/* <Route exact path="/providence" element={<Navigate to='/?gym=pvd'/>}/> */}

            {/* Profile Routes */}
            <Route exact path="/backend" element={ <Backend /> } />
            <Route exact path="/account" element={currentUser? <Navigate to='/profile' /> : <Account />}/>
            <Route exact path="/profile" element={currentUser? <Profile /> : <Navigate to='/account' />}/>

            {/* Info Routes */}
            <Route exact path="/rates" element={<Rates />} />

            {/* Programs Routes */}
            <Route exact path="/programs" element={<Programs />} />

            <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
  </>
}

export default App;
