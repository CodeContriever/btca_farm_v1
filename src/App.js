import React from 'react';
import { Routes, Route, } from "react-router-dom"

import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Activation from "./pages/Activation";
import Support from "./pages/Support";
import Wallet from "./pages/Wallet";
import Payout from "./pages/Payout";








const App = () => {


  return (
    <div className="">
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/activation' element={<Activation />} />
        <Route path='/support' element={<Support />} />
        <Route path='/payout' element={<Payout />} />
        <Route path='/wallet' element={<Wallet />} />
      </Routes>
    </div>
  )
}

export default App



