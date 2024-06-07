// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home.jsx";
import Category from "../Pages/Category/Category.jsx";
import Game from "../Pages/Game/Game.jsx";
import SignUp from "../Pages/SignUp/SignUp.jsx";
import SignIn from "../Pages/SignIn/SignIn.jsx";
import ContactUs from "../Pages/ContactUs/ContactUs.jsx"
function AllRoutes() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/game" element={<Game />} />
        <Route path="/user/register" element={<SignUp/>} />
        <Route path='/user/login' element = {<SignIn/>} />
        <Route path='/contactUs' element={<ContactUs/>} />

      </Routes>
    </Router>
  );
}

export default AllRoutes;
