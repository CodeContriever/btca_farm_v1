import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import convertToBase64 from '../helper/convert';
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';

import { useDispatch } from 'react-redux';
import { setUser } from '../redux/UserSlice';
// import { useUser } from '../utils/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { setUser } = useUser();

  const [file, setFile] = useState()
  /**  file upload handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    try {
      const response = await axios.post('https://btca.afribook.world/account/loginWithPasswordAndEmail', {
        email,
        password,
      });

      console.log('API Response:', response.data);

      if (response.status === 200) {
        // Handle successful signin
        const data = response.data;
        console.log('Verify OTP:', data);

        // Store the token in local storage
        localStorage.setItem('token', data.accessToken);

        if (data.success) {
          // User email is registered, navigate to the homepage
          console.log('Navigating to home...');
          navigate('/home');
          // Display a success toast (optional)
          toast.success('Welcome');

          // Set the user information in the context
          setUser(data.user);

          // Dispatch the action to set the user information in Redux store
          dispatch(setUser(data.user));

          // Now you can use the user object to display user details in your UI
        } else {
          // User email is not registered, navigate to the verify OTP page
          console.log('Navigating to verify_OTP...');
          navigate('/verify_OTP');
          // Display a success toast (optional)
          toast.success('Verify OTP');
        }
      } else {
        // Handle signin error
        toast.error('Incorrect inputs, please try again');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error('Error signing in...');
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all the required fields correctly');
      return;
    }

    // toast.error(''); // Clear any previous error messages

    // Call the handleSignin function to initiate the signin process
    handleSignin();
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
              <div className="flex flex-col items-center">
                <h1 class="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Signin to your account
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


                {/* Login input fields */}
                <div class="flex flex-col gap-8 mt-8">

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

                  <span className='text-gray-500'>Forgot Password? <Link className='text-red-500' to="/recovery">Recover Now</Link></span>

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
};

export default Login;
