import React from "react";
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import * as yup from 'yup'; // Import yup for form validation
import { verifyRegistrationOTP } from '../helper/helper'




const VerifyOTP = () => {

  // Define the validation schema using yup
  const validationSchema = yup.object().shape({
    OTP: yup.string().required('OTP is required'),

  });


  const onSubmit = async (values) => {
    try {
      const registerPromise = verifyRegistrationOTP(values.OTP);

      toast.promise(registerPromise, {
        loading: 'Verifiying...',
        success: (response) => {
          // Handle the success response here if needed
          console.log('OTP verification is successful:', response);
          window.location.href = '/home'; // Redirect to the verifyEmail page on successful registration
          return <b>Register Successfully...!</b>;
        },
        error: (error) => {
          // Handle the error here if needed
          console.error('OTP Verification failed:', error);
          toast.error('Incorrect, please enter a correct OTP.');
          // return 'Could not   Verified.';
        },
      });

      // No need to navigate here; we'll navigate on success (in the toast.success callback)
    } catch (error) {
      // Handle any unexpected errors
      console.error('Unexpected error:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    }
  };



  const formik = useFormik({
    initialValues: { OTP: '' },
    validationSchema, // Use the validation schema for form validation
    onSubmit,
  });



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
            <div className="flex items-center mt-0 lg:mt-16">

              <div
                className="w-[100%] px-6 py-8  bg-[#F9FAFB] rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700"
              >

                {/* form heading */}
                <div>
                  <h1 class="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                    Enter OTP
                  </h1>
                </div>

                {/* Form */}
                <form
                  className='py-1 mt-4'
                  onSubmit={formik.handleSubmit}
                >


                  {/* Verify input fields */}
                  <div class="">

                    {/* Email field */}
                    <div className="flex flex-col gap-1">

                      <input
                        type="number"
                        name="OTP"
                        id="OTP"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter OTP"
                        required
                        {...formik.getFieldProps('OTP')}
                      />
                    </div>

                  </div>

                  {/* Verify button */}
                  <div
                    class=" flex  flex-col justify-center items-center mt-8"
                  >
                    <button
                      type="submit"
                      className="w-[100%] flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium " >
                      Verify
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

export default VerifyOTP

