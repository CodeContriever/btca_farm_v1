import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectRegistrationData } from '../store/registration';

const VerifyOTP = () => {
  const navigate = useNavigate();

  const registrationData = useSelector(selectRegistrationData);

  const {
    userId,
  } = registrationData.data;

  const [formData, setFormData] = useState({
    OTP: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://btca.afribook.world/account/verifyEmail',
        {
          OTP: formData.OTP,
        },
        {
          headers: {
            userId: userId,
          },
        }
      );

      if (response.status === 201) {
        // Email verification was successful, navigate to the home page
        navigate('/role');
      } else {
        toast.error('Could not verify, please enter a registered email');
      }
    } catch (error) {
      console.error('Error verifying email address:', error);
      toast.error('An error occurred, please try again later.');
    }
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
            <div className="flex flex-col items-center">
              {/* Logo */}
              <a href="/" className="flex items-center mt-6 mb-6 text-2xl font-semibold font-Inter text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="/logo.png" alt="logo" />
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
                  <h1 className="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                    Verify OTP
                  </h1>
                </div>

                {/* Form */}
                <form className='py-1 mt-4' onSubmit={handleSubmit}>
                  {/* Verify input fields */}
                  <div className="">
                    {/* Email field */}
                    <div className="flex flex-col gap-1">
                      <input
                        type="number"
                        name="OTP"
                        id="OTP"
                        value={formData.OTP}
                        onChange={handleInputChange}
                        placeholder="OTP"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Verify button */}
                  <div
                    className="flex flex-col justify-center items-center mt-8"
                  >
                    <button
                      type="submit"
                      className="w-[100%] flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium"
                    >
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
              </div>
            </div>
          </div>

          {/* Second column: BTCA logo */}
          <div className="hidden lg:flex bg-gray-200 rounded-md shadow-md">
            <div className="flex items-center justify-center p-4 md:p-8" >
              <img src="/logo.png" alt="logo" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default VerifyOTP;
