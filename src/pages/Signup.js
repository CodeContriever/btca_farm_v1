import React from "react";
import { useState, } from 'react';
import { useNavigate } from 'react-router-dom'



const Signup = () => {
  const navigate = useNavigate()

  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referredBy, setReferredBy] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('https://btca.afribook.world/account/createUserAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullname,
          phoneNumber,
          email,
          password,
          referredBy
        })
      });

      console.log(response)

      if (response.ok) {
        // Handle successful signup
        const data = await response.json();
        console.log('User signed up successfully:', data);

        // Redirect to home page
        navigate('/home');

      }  else {
        // Handle signup error
        const errorData = await response.json();
        console.error('Error signing up:', errorData);
        throw new Error(errorData.message); 
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message || 'An error occurred. Please try again later.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullname || !phoneNumber || !email || !password) {
      // Display an error message or perform other error handling
      console.error('Please fill in all the required fields');
      setError(error.message || 'Please fill in all the required fields');
      return;
    }

    handleSignup();
  };




  return (
    <>

      <main className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Register Form */}
          <div className="bg-white rounded-md shadow-md p-4">

            <div class="flex flex-col items-center justify-center px-2 lg:px-6 py-8 mx-auto lg:py-0">

              {/* Logo */}
              <a href="/" class="flex items-center mt-6 mb-6 text-2xl font-semibold font-Inter text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="/logo.png" alt="logo" />
                BTCA_FARM
              </a>

              {/* Form Column */}
              <div class="w-full bg-[#F9FAFB] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">

                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                  {/* form heading */}
                  <h1 class="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                  </h1>

                  {/* Form */}
                  <form class="space-y-4 md:space-y-6">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

                      {/* Name Field */}
                      <div>

                        <label for="username" class="block mb-2 text-sm font-medium font-Inter text-gray-900 dark:text-white"
                        >
                          Fullname
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm font-Inter rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Boniee Ben"
                          required=""
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                        />
                      </div>

                      {/*  Phonenumber Field */}
                      <div>

                        <label for="phonenumber" class="block mb-2 text-sm font-medium font-Inter text-gray-900 dark:text-white"
                        >
                         Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          id="phonenumber"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm font-Inter rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+234"
                          required=""
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>

                      {/* Email Field */}
                      <div>

                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium font-Inter text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>

                        <input
                          type="email"
                          name="email"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm font-inter rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
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

                      {/* Confirm Password Field */}
                      <div>

                        <label for="confirm-password" class="block mb-2 text-sm font-medium font-Inter text-gray-900 dark:text-white"
                        >
                          Confirm password
                        </label>

                        <input
                          type="confirm-password"
                          name="confirm-password" id="confirm-password" placeholder="••••••••"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm font-Inter rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />

                      </div>

                      {/* Reffered By */}
                      <div>

                        <label
                          for="referredBy"
                          class="block mb-2 text-sm font-medium font-Inter text-gray-900 dark:text-white"
                        >
                          Referred By
                        </label>

                        <input
                          type="text"
                          name="referredBy"
                          id="referredBy"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm font-inter rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="4234769"
                          required=""
                          value={referredBy}
                          onChange={(e) => setReferredBy(e.target.value)}
                        />

                      </div>

                    </div>

                    {/* OR */}
                    <div className="mt-6 flex flex-row justify-center items-center gap-4">
                      <hr className="border-black" />
                      <p className="font-medium font-Inter">OR</p>
                      <hr />
                    </div>

                    {/* App store button */}
                    <div className="mt-6 lg:mt-0 grid grid-cols-1 lg:flex justify-center gap-4 lg:gap-8">

                      <button className=" flex justify-center items-center bg-green-500 text-white text-base py-2 px-4 rounded hover:bg-green-600">
                        Sign up with Google
                      </button>
                      <button className="flex justify-center items-center bg-black text-white text-base py-2 px-4 rounded hover:bg-gray-900">
                        Sign up with Apple
                      </button>

                    </div>

                    {/* Terms & Conditions */}
                    <div class="flex items-start mt-4">

                      {/* Terms & Conditions checkbox*/}
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 " required="" />
                      </div>

                      {/* Terms & Conditions text*/}
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium font-Inter text-primary-600 hover:underline dark:text-primary-500" href="/terms">Terms and Conditions</a></label>
                      </div>

                    </div>

                    {/* Create account button */}
                    <div 
                    class=" flex  flex-col justify-center items-center mt-4"
                    >
                      <button
                      type="submit"
                      onClick={handleSubmit}
                      className="w-[100%] lg:w-full flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium font-Inter" >
                        Signup
                      </button>

                      {error && <p className="mt-4 text-sm lg:text-base text-red-700 font-medium font-Inter">{error}</p>}
                      
                    </div>

                    {/* Already have an account text */}
                    <p class="text-sm font-light font-Inter text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/signin" class="font-medium font-Inter text-primary-600 hover:underline dark:text-primary-500">Login here</a>
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

export default Signup

