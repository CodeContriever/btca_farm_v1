import React from "react";
import { useState } from 'react';

import { useNavigate } from 'react-router-dom'





const Signin = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = async () => {
    try {
      const response = await fetch('https://btca.afribook.world/account/loginWithPasswordAndEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
  
      if (response.ok) {
        // Handle successful signin
        const data = await response.json();
        console.log('User signed in successfully:', data);

          // Redirect to home page
          navigate('/home');

      }  else {
        // Handle signin error
        const errorData = await response.json();
        console.error('Error signing in:', errorData);
        throw new Error(errorData.message); 
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setError(error.message || 'An error occurred. Please try again later.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( !email || !password) {
      // Display an error message or perform other error handling
      console.error('Please fill in all the required fields');
      setError(error.message || 'Please fill in all the required fields correctly')
      return;
    }

    handleSignin();
  };

  return (
    <>

      <main className="bg-gray-100 min-h-screen flex items-center justify-center p-2 lg:p-4 md:p-8">

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Login Form */}
          <div className="bg-white rounded-md shadow-md p-4">

            <div class="flex flex-col items-center justify-center px-2 lg:px-6 py-8 mx-auto lg:py-0">

              {/* Logo */}
              <a href="/" class="flex items-center mt-6 mb-6 text-2xl font-semibold font-Inter text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="/logo.png" alt="logo" />
                BTCA_FARM
              </a>

              {/* Form Column */}
              <div class="w-full bg-[#F9FAFB] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                  {/* form heading */}
                  <h1 class="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                   Sign In account
                  </h1>

                  {/* Form */}
                  <form 
                  class="space-y-4 md:space-y-6"
                  onSubmit={""}
                  >
                    
                      {/* Name Field */}
                      <div>

                        <label for="email" class="block mb-2 text-sm font-medium font-Inter text-gray-900 dark:text-white"
                        >
                          Email
                          </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm font-Inter rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonniee@example.com"
                          required=""
                          value={email}
  onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      {/* Password Field */}
                      <div>

                        <label
                          for="password"
                          class="block mb-2 text-sm font-medium font-Inter text-gray-900 dark:text-white"
                        >
                          Password
                        </label>

                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm font-Inter rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                   

                    {/* OR */}
                    <div className="mt-6 flex flex-row justify-center items-center gap-4">
                      <hr className="border-black" />
                      <p className="font-medium font-Inter">OR</p>
                      <hr />
                    </div>

                    {/* App store button */}
                    <div className="mt-6 lg:mt-0 grid grid-cols-1 lg:flex justify-center gap-4 lg:gap-8">

                      <button className="flex justify-center items-center bg-green-500 text-white text-base py-2 px-4 rounded hover:bg-green-600">
                        Signin with Google
                      </button>
                      <button className="flex justify-center items-center bg-black text-white text-base py-2 px-4 rounded hover:bg-gray-900">
                        Signin with Apple
                      </button>

                    </div>

                    {/* Login account button */}
                    <div class=" flex  flex-col justify-center items-center mt-8">

                      <button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-[100%] lg:w-full flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium font-Inter">
                        Login
                      </button>
                   
                      {error && <p className="mt-4 text-sm lg:text-base text-red-700 font-medium font-Inter">{error}</p>}

                    </div>

                    {/* Already have an account text */}
                    <p class="text-sm font-light font-Inter text-gray-500 dark:text-gray-400">
                      You don't have an account yet? <a href="/signup" class="font-medium font-Inter text-primary-600 hover:underline dark:text-primary-500">Signup here</a>
                    </p>

                  </form>

                </div>

              </div>
            </div>

          </div>

          <div className="hidden lg:flex bg-gray-200 rounded-md shadow-md">
            {/* Full image */}
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

export default Signin

