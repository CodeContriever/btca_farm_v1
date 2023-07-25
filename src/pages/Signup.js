import React from "react";
import { useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';
import { registerUser } from '../helper/helper'

import styles from '../styles/Username.module.css';



const Signup = () => {
  const navigate = useNavigate()
  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues: {
      fullName: 'John Doe',
      phoneNumber: '34567',
      email: 'johndoe@example.com',
      username: 'example123',
      password: 'admin@123'
    },
    validate: registerValidation,

    validateOnBlur: false,

    validateOnChange: false,

    onSubmit: async values => {
      const validationErrors = registerValidation(values);

      if (Object.keys(validationErrors).length === 0) {
        // No validation errors, proceed with form submission
        values = await Object.assign(values, { profile: file || '' });

        try {
          const registerPromise = registerUser(values);

          toast.promise(registerPromise, {
            loading: 'Creating...',
            success: (response) => {
              // Handle the success response here if needed
              console.log('Registration successful:', response);
              navigate('/home'); // Navigate to the home page on successful registration
              return <b>Register Successfully...!</b>;
            },
            error: (error) => {
              // Handle the error here if needed
              console.error('Registration failed:', error);
              toast.error('Could not Register.');
              return 'Could not Register.';
            },
          });

          // No need to navigate here; we'll navigate on success (in the toast.success callback)
        } catch (error) {
          // Handle any unexpected errors
          console.error('Unexpected error:', error);
          toast.error('An unexpected error occurred. Please try again later.');
        }
      } else {
        // There are validation errors, handle them appropriately (e.g., display error messages)
        formik.setErrors(validationErrors);
        toast.error('Please fix the errors in the form');
      }
    },

  });



  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }


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
                onSubmit={formik.handleSubmit}
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
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Boniee Ben"
                      required
                      {...formik.getFieldProps('fullName')}
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
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+234"
                      required
                      {...formik.getFieldProps('phoneNumber')}
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
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Boniee Ben"
                      required
                      {...formik.getFieldProps('email')}
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
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Boniee123"
                      required
                      {...formik.getFieldProps('username')}
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
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                      {...formik.getFieldProps('password')}

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
                      name="confirm-password" id="confirm-password" placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                      {...formik.getFieldProps('password')}

                    />

                  </div>

                  {/* Reffered By */}
                  {/* <div className="flex flex-col gap-1">

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
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="4234769"
                      {...formik.getFieldProps('referredBy')}
                    />

                  </div> */}

                </div>

                {/* Terms & Conditions */}
                <div class="flex items-start mt-8">

                  {/* Terms & Conditions checkbox*/}
                  <div class="flex items-center h-5">

                    <input 
                    id="terms" 
                    aria-describedby="terms" 
                    type="checkbox" 
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 " 
                    required="" 
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
                    <Link className='text-red-500 ml-2' to="/">Login Now</Link>
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

