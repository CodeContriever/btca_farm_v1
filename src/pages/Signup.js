import React from "react";
import { useState, } from 'react';
// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import convertToBase64 from '../helper/convert';

import styles from '../styles/Username.module.css';



const Signup = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [referredBy, setReferredBy] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  // const [error, setError] = useState('');


  const [file, setFile] = useState()
  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  // Display loading toast
  // const loadingToast = toast.loading('Registering...');

  const handleRegister = async () => {
    const requestBody = {
      fullname,
      phoneNumber,
      email,
      username,
      password,
      referredBy,
      // checkbox
    }

    try {
      // Send the POST request to the server
      const response = await fetch('https://btca.afribook.world/account/createUserAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });



      if (response.ok) {
        // Handle successful registration
        const data = await response.json();
        console.log('User registered successfully:', data);

        if (data.success) {
          navigate('/verify_email');
        } else {
          toast.error('An error occurred, please try again later.');
        }

      } else {
        toast.error('An error occurred, please try again later.');
      }

    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('An error occurred, please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullname || !phoneNumber || !email || !password || !username || !checkbox) {
      toast.error('Please fill in all the required fields correctly');
      return;
    }


    // Call the handleRegister function to initiate the registration process
    handleRegister();
  };


  return (
    <>

      <main className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">

        <div className="">
          <Toaster position='top-center' reverseOrder={false}></Toaster>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* First column: Register Form */}
          <div className="bg-white rounded-md shadow-md p-4">

            <div class="flex flex-col items-center">

              {/* Logo */}
              <a href="/" class="flex items-center mt-6 mb-6 text-2xl font-semibold font-Inter text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="/logo.png" alt="logo" />
                BTCA_FARM
              </a>
            </div>

            {/* Form Column */}
            <div
              className="w-[100%] px-6 py-8  bg-[#F9FAFB] rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700"
            >

              {/* form heading */}
              <div>
                <h1 class="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Create an account
                </h1>
              </div>

              {/* Form */}
              <form
                className='py-1'
                onSubmit={handleSubmit}
              >

                {/* Profile avatar */}
                <div
                  className='profile flex justify-center py-8'
                >
                  <label
                    htmlFor="profile"
                  >
                    <img
                      src={file || avatar}
                      className={styles.profile_img} alt="avatar"
                    />
                  </label>

                  <input
                    onChange={onUpload}
                    type="file"
                    id='profile'
                    name='profile'
                  />
                </div>

                {/* Register input fields */}
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

                  {/* Full name field */}
                  <div className="flex flex-col gap-1">

                    <label for="fullname" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                    >
                      Fullname
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Boniee Ben"
                      required

                    />
                  </div>

                  {/* Phone number field */}
                  <div className="flex flex-col gap-1">

                    <label for="phonenumber" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phonenumber"
                      id="phonenumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+234"
                      required

                    />

                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1">

                    <label for="email" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                    >
                      Email address
                    </label>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Boniee Ben"
                      required
                    />
                  </div>

                  {/* Username field */}
                  <div className="flex flex-col gap-1">

                    <label for="username" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                    >
                      Username
                    </label>

                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={username} onChange={(e) => setUsername(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Boniee123"
                      required
                    />
                  </div>


                  {/* Password Field */}
                  <div className="flex flex-col gap-1">

                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required

                    />
                  </div>

                  {/* Confirm Password Field */}
                  <div className="flex flex-col gap-1">

                    <label for="confirm-password" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>

                    <input
                      type="confirm-password"
                      name="confirm-password" id="confirm-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required

                    />

                  </div>

                  {/* Reffered By */}
                  <div className="flex flex-col gap-1">

                    <label
                      for="referredBy"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Referred By
                    </label>

                    <input
                      type="text"
                      name="referredBy"
                      id="referredBy"
                      value={referredBy}
                      onChange={(e) => setReferredBy(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="4234769"
                    />

                  </div>

                </div>

                {/* Terms & Conditions */}
                <div class="flex items-start mt-8">

                  {/* Terms & Conditions checkbox*/}
                  <div class="flex items-center h-5">

                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      value={checkbox}
                      onChange={(e) => setCheckbox(e.target.value)}
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 "
                      required
                    />

                  </div>

                  {/* Terms & Conditions text*/}
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium  text-primary-600 hover:underline dark:text-primary-500" href="/terms">Terms and Conditions</a></label>
                  </div>

                </div>

                {/* Create account button */}
                <div
                  class=" flex  flex-col justify-center items-center mt-8"
                >
                  <button
                    type="submit"
                    className="w-[100%] flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium " >
                    Signup
                  </button>


                </div>



                {/* Already register */}
                <div
                  className="py-4 flex flex-row gap-8"
                >

                  <span
                    className='text-gray-500'
                  >
                    Already Registered?
                    <Link className='text-red-500 ml-2' to="/signin">Login Now</Link>
                  </span>

                </div>

              </form>

              {/* </div> */}


            </div>

          </div>

          {/* Second column: BTCA logo */}
          <div className="hidden lg:flex bg-gray-200 rounded-md shadow-md">

            <div className="flex items-center justify-center p-4 md:p-8" >
              <img src="/logo.png" alt="logo"
              />
            </div>

          </div>

        </div>
      </main>

    </>


  )
}

export default Signup

