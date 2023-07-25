import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate'
import useFetch from '../hooks/fetch.hook';
import { useAuthStore } from '../store/store'
import { verifyPassword } from '../helper/helper'

import styles from '../styles/Username.module.css';



const Signin = () => {
  const navigate = useNavigate()

  const { username } = useAuthStore(state => state.auth)
  const [{ isLoading, apiData, serverError }] = useFetch(`/user/${username}`)

  const formik = useFormik({
    initialValues: {
      username: 'example123',
      password: 'admin@123'
    },
    validate: passwordValidate,

    validateOnBlur: false,

    validateOnChange: false,

    onSubmit: async values => {

      let loginPromise = verifyPassword({ username, password: values.password })
      toast.promise(loginPromise, {
        loading: 'Checking...',
        success: <b>Login Successfully...!</b>,
        error: <b>Password Not Match!</b>
      });

      loginPromise.then(res => {
        let { token } = res.data;
        localStorage.setItem('token', token);
        navigate('/home')
      })
    }

  });

  if (isLoading) return (
  <main class="min-h-screen bg-[#F9FAFB] dark:bg-gray-900">

  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

    <div class="mx-auto max-w-screen-sm text-center">

      <h1
       class="text-xl tracking-tight font-extrabold text-primary-600 dark:text-primary-500"
       >
        Loading........
        </h1>

    </div>

  </div>
</main>
)

  if (serverError) return (
    <main class="min-h-screen bg-[#F9FAFB] dark:bg-gray-900">

    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
  
      <div class="mx-auto max-w-screen-sm text-center">
  
        <h1
         class="text-xl tracking-tight font-extrabold text-red"
         >
         Error retrieving user profile please try again
          </h1>

          <a href="/home" class="inline-flex text-white bg-black hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
      </div>
  
    </div>
  </main>
  )




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
                <h4 className='text-5xl font-bold'>Hello {apiData?.firstName || apiData?.username} </h4>
                <h1 class="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                  Signin to your account
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
                    <img src={apiData?.profile || avatar} className={styles.profile_img} alt="avatar" />
                  </label>

                </div>

                {/* Register input fields */}
                <div class="flex flex-col gap-8 mt-8">

                  {/* Username field */}
                  {/* <div className="flex flex-col gap-1">

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
                  </div> */}


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
}

export default Signin

