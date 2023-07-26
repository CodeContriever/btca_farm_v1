import React from 'react';
import { Routes, Route, } from "react-router-dom"

// import ProtectedRoutes from './utils/ProtectedRoutes'

import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import VerifyOTP from "./pages/VerifyOTP";
import Signin from "./pages/Signin";
import Reset from "./pages/Reset";
import Recovery from "./pages/Recovery";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Activation from "./pages/Activation";
import License from "./pages/License";
import Support from "./pages/Support";
import Wallet from "./pages/Wallet";
import Withdrawal from "./pages/Withdrawal";
import Franchise from "./pages/Franchise";
import Reseller from "./pages/Reseller";
import Applications from "./pages/Applications";








const App = () => {


  return (
    <div className="">
      <Routes>
        <Route exact path='/' element={<LandingPage />} />

        {/* <Route element={<ProtectedRoutes />}> */}
        <Route element={<HomePage />} path="/home" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route path='/activation' element={<Activation />} />
        <Route path='/license' element={<License />} />
        <Route path='/support' element={<Support />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/withdrawal' element={<Withdrawal />} />
        <Route path='/franchise' element={<Franchise />} />
        <Route path='/reseller' element={<Reseller />} />
        <Route path='/applications' element={<Applications />} />
        {/* </Route> */}

        <Route path='/signup' element={<Signup />} />
        <Route path='/verify_email' element={<VerifyEmail />} />
        <Route path='/verify_OTP' element={<VerifyOTP />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/recovery' element={<Recovery />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App



