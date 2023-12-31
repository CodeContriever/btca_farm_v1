import React from "react";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Nav3 from "../components/Nav3";
import Footer2 from "../components/Footer2";

import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import * as yup from 'yup'; // Import yup for form validation
import { registerFranchise } from '../helper/helper'

import { Label, Select } from 'flowbite-react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";






const Franchise = () => {

  const [date, setDate] = useState(new Date());
  // Function to handle when a day is clicked in the date picker
  const handleDateSelect = (selectedDate) => {
    // Update the selected date in the state
    setDate(selectedDate);
  };
  // Function to handle when the value of the date picker has changed
  const handleDateChange = (selectedDate) => {
    // Check if the selected date is different from the current date in the state
    if (selectedDate !== date) {
      // Update the selected date in the state
      setDate(selectedDate);
    }
  };

  const [activeButton, setActiveButton] = useState("personal_information");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }


  // Define the validation schema using yup
  const validationSchema = yup.object().shape({
    // Personal details
    fullName: yup.string().required('Full name is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    gender: yup.string().required('Gender is required'),

    // Address
    first_Address: yup.string().required('First address is required'),
    second_Address: yup.string(),
    landmark: yup.string(),
    city: yup.string(),
    state: yup.string().required('State field  is required'),
    country: yup.string().required('Country field is required'),

    // Means of identification
    ID: yup.string().required('ID is required'),
    ID_Number: yup.string().required('ID_Number is required'),
    date_Of_Birth: yup.string().required('Date of Birth is required'),

    // Next of kin
    nextOfKin: yup.string().required('Field is required'),
    nextOfKin_Address: yup.string().required('Address field is required'),
    nextOfKin_Number: yup.string().required('Field is required'),

    // Guarantor
    guarantor: yup.string().required('Guarantor name is required'),
    guarantor_Number: yup.string().required('Guarantor number is required'),
    guarantor_ID: yup.string().required('Guarantor ID is required'),


  });


  const onSubmit = async (values) => {
    try {
      const {
        // Personal details
        fullName,
        phoneNumber,
        gender,

        // Address
        first_Address, // Corrected key here
        second_Address,
        landmark,
        city,
        state,
        country,

        // Means of identification
        user_ID,
        ID_Number,
        date_Of_Birth,

        // Next of kin
        nextOfKin,
        nextOfKin_Address,
        nextOfKin_Number,

        // Guarantor
        guarantor,
        guarantor_Number,
        guarantor_ID,
      } = values;

      const registerPromise = registerFranchise(
        // Personal details
        fullName,
        phoneNumber,
        gender,

        // Address
        first_Address,
        second_Address,
        landmark,
        city,
        state,
        country,

        // Means of identification
        user_ID,
        ID_Number,
        date_Of_Birth,

        // Next of kin
        nextOfKin,
        nextOfKin_Address,
        nextOfKin_Number,

        // Guarantor
        guarantor,
        guarantor_Number,
        guarantor_ID,
      );

      toast.promise(registerPromise, {
        loading: 'Creating...',
        success: (response) => {
          // Handle the success response here if needed
          console.log('Registration successful:', response);
          window.location.href = '/verifyEmail'; // Redirect to the verifyEmail page on successful registration
          return <b>Register Successfully...!</b>;
        },
        error: (error) => {
          // Handle the error here if needed
          console.error('Registration failed:', error);
          toast.error('Could not Register.');
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
    // initialValues = {''} ,
    validationSchema,
    onSubmit,
  });





  return (

    <div
      className="">

      {/* Header */}
      <header
        className='box-border w-[100%]  py-8 flex justify-center items-center bg-white  sticky top-0 left-0 right-0 z-[10001] border-b-2 border-gray-200 my-0 shadow-[inset 0 -1px #e9eaea]'
      >

        {/* Wrapper */}
        <div className="container mx-auto px-4">

          <Nav3></Nav3>

        </div>

      </header>



      <main
        className="bg-[#F9FAFB]"
      >

        {/* Wrapper */}
        <div className="container mx-auto px-4 py-20">

          <div className="grid grid-cols-3 gap-4">

            {/* Sidebar */}
            <div className="">
              <Sidebar />
            </div>


            {/* Franchise form */}
            <div className="col-span-3 lg:col-span-2 w-[100%]">

              <div
                className=''
              >

                {/* section heading */}
                <div className="mb-4">

                  <h1 className="mb-0 mt-0 text-gray-800 text-base lg:text-2xl font-medium font-inter leading-6">
                    Franchise
                  </h1>

                </div>

                {/* Card for form */}
                <div
                  className="box-border  rounded-md px-8 py-8 bg-white shadow-lg"
                >
                  {/* Form stepper */}
                  <ol class="mb-8 flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">

                    <li

                    >
                      <button
                        className={`flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700
                         ${activeButton === 'personal_information' ? 'text-[#A020F0]' : 'text-gray-600'}`}

                        onClick={() => handleButtonClick('personal_information')}
                      >
                        <span
                          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
                        >
                          <svg
                            class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>

                          Personal <span class="hidden sm:inline-flex sm:ml-2">Info</span>
                        </span>
                      </button>
                    </li>

                    <li

                    >
                      <button
                        className={`flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700
                          ${activeButton === 'means_of_identification' ? 'text-[#A020F0]' : 'text-gray-600'}`}
                        onClick={() => handleButtonClick('means_of_identification')}
                      >
                        <span
                          class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"
                        >
                          <svg
                            class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>

                          Account <span class="hidden sm:inline-flex sm:ml-2">Info</span>
                        </span>
                      </button>

                    </li>

                  </ol>

                  {/* Personal information */}
                  {activeButton === 'personal_information' && (
                    <div>
                      {/* Form */}
                      <form
                        className='py-1'
                      >

                        {/* Personal infromation  input fields */}
                        <div className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">

                          <div class="flex flex-col gap-8 ">

                            {/* Heading */}
                            <div>
                              <h3 className="mb-0 mt-0 text-gray-800 text-lg font-medium  leading-6">
                                Personal Infromation
                              </h3>
                            </div>

                            {/* details input fields */}
                            <div className="flex flex-col gap-8">

                              {/* Full Name field */}
                              <div className="flex flex-col gap-0.5">

                                <label for="fullName" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  Full Name
                                </label>

                                <input
                                  type="text"
                                  name="fullName"
                                  id="fullName"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Smith"
                                  required
                                  {...formik.getFieldProps('fullName')}
                                />
                              </div>

                              {/* Phone number field */}
                              <div className="flex flex-col gap-0.5">

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

                              {/* Gender input field */}
                              <div
                                className="w-full"
                                id="select"
                              >

                                <div className="mb-0.5 block">
                                  <Label
                                    htmlFor="gender"
                                    value="Select your gender"
                                  />
                                </div>

                                <Select
                                  id="gender"
                                  required
                                  className=""
                                  {...formik.getFieldProps('gender')}
                                >
                                  <option>
                                    Male
                                  </option>
                                  <option>
                                    Female
                                  </option>
                                  <option>
                                    I prefer not to say
                                  </option>
                                </Select>
                              </div>

                            </div>

                          </div>

                        </div>

                        {/* Address input fields */}
                        <div className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">

                          <div class="flex flex-col gap-8">

                            {/* Heading */}
                            <div>
                              <h3 className="mb-0 mt-0 text-gray-800 text-lg font-medium  leading-6">
                                Address
                              </h3>
                            </div>

                            <div className="grid grid-rows-3 gap-8">

                              {/* Address 1 field */}
                              <div className="flex flex-col gap-1">

                                <label for="address" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  Address 1
                                </label>

                                <input
                                  type="text"
                                  name="address"
                                  id="address"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Address"
                                  required
                                  {...formik.getFieldProps('first_Address')}
                                />
                              </div>

                              {/* Address 2 field */}
                              <div className="flex flex-col gap-1">

                                <label for="address_2" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  Address 2
                                </label>

                                <input
                                  type="text"
                                  name="address_2"
                                  id="address_2"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Second address"
                                  required
                                  {...formik.getFieldProps('second_Address')}
                                />
                              </div>

                              {/* Landmark field */}
                              <div className="flex flex-col gap-1">

                                <label for="landmark" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  Landmark
                                </label>

                                <input
                                  type="text"
                                  name="landmark"
                                  id="landmark"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Landmark"
                                  required
                                  {...formik.getFieldProps('landmark')}
                                />
                              </div>

                              {/* City field */}
                              <div className="flex flex-col gap-1">

                                <label for="city" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  City
                                </label>

                                <input
                                  type="text"
                                  name="city"
                                  id="city"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City"
                                  required
                                  {...formik.getFieldProps('city')}
                                />
                              </div>

                              {/* State field */}
                              <div className="flex flex-col gap-1">

                                <label for="state" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  State
                                </label>

                                <input
                                  type="text"
                                  name="state"
                                  id="state"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="State"
                                  required
                                  {...formik.getFieldProps('state')}
                                />
                              </div>


                              {/* Country field */}
                              <div className="flex flex-col gap-1">

                                <label for="country" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  Country
                                </label>

                                <input
                                  type="text"
                                  name="country"
                                  id="country"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country"
                                  required
                                  {...formik.getFieldProps('country')}
                                />
                              </div>

                            </div>

                          </div>

                        </div>


                        {/* Next button */}
                        <div
                          class=" flex  flex-col justify-center items-center mt-8"
                        >
                          <button
                            type="text"
                            className="w-[100%] flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium "
                            onClick={() => handleButtonClick('means_of_identification')}
                          >
                            Next
                          </button>

                        </div>

                      </form>
                    </div>
                  )}

                  {/* Means of identification / Next of kin ./ Guarantor */}

                  {activeButton === 'means_of_identification' && (
                    <div>
                      {/* Form */}
                      <form
                        className='py-1'
                      >

                        {/* Means of identification input fields */}
                        <div className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">

                          <div class="flex flex-col gap-8">

                            {/* Heading */}
                            <div>
                              <h3 className="mb-0 mt-0 text-gray-800 text-lg font-medium  leading-6">
                                Means of identification
                              </h3>
                            </div>

                            <div className="flex flex-col gap-8">

                              {/* ID field */}
                              <div className="flex flex-col gap-1">

                                <label for="id" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  ID
                                </label>

                                <input
                                  type="text"
                                  name="id"
                                  id="id"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ID"
                                  required
                                  {...formik.getFieldProps('ID')}
                                />
                              </div>

                              {/* ID number field */}
                              <div className="flex flex-col gap-1">

                                <label for="number" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  ID Number
                                </label>

                                <input
                                  type="number"
                                  name="number"
                                  id="number"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="4567"
                                  required
                                  {...formik.getFieldProps('ID_Number')}
                                />

                              </div>

                              {/* Date of Birth Field */}
                              <div
                                className="w-full flex flex-col gap-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >

                                <label for="date" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  Date of Birth
                                </label>

                                <DatePicker
                                  selected={date}
                                  onSelect={handleDateSelect} //when day is clicked
                                  onChange={handleDateChange} //only when value has changed
                                  {...formik.getFieldProps('date_Of_Birth')}
                                />

                              </div>

                            </div>

                          </div>

                        </div>


                        {/* Next of kin input fields */}
                        <div className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">

                          <div class="flex flex-col gap-8">

                            {/* Heading */}
                            <div>
                              <h3 className="mb-0 mt-0 text-gray-800 text-lg font-medium  leading-6">
                                Next of kin
                              </h3>
                            </div>

                            {/* details input fields */}
                            <div className="flex flex-col gap-8">

                              {/* Full Name field */}
                              <div className="flex flex-col gap-1">

                                <label for="fullName" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  Full Name
                                </label>

                                <input
                                  type="text"
                                  name="fullName"
                                  id="fullName"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Smith"
                                  required
                                  {...formik.getFieldProps('nextOfKin')}
                                />
                              </div>

                              {/* Address field */}
                              <div className="flex flex-col gap-1">

                                <label for="address" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  Address
                                </label>

                                <input
                                  type="text"
                                  name="address"
                                  id="address"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Address"
                                  required
                                  {...formik.getFieldProps('nextOfKin_Address')}
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
                                  {...formik.getFieldProps('nextOfKin_Number')}
                                />

                              </div>

                            </div>

                          </div>

                        </div>


                        {/* Guarantor or State director input fields */}
                        <div className="w-[100%] outline outline-offset-2 outline-3 outline-[#A020F0] p-4 mb-8">

                          <div class="flex flex-col gap-8">

                            {/* Heading */}
                            <div>
                              <h3 className="mb-0 mt-0 text-gray-800 text-lg font-medium  leading-6">
                                Guarantor / State Director
                              </h3>
                            </div>

                            {/* details input fields */}
                            <div className="flex flex-col gap-8">

                              {/* Full Name field */}
                              <div className="flex flex-col gap-1">

                                <label for="fullName" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  Full Name
                                </label>

                                <input
                                  type="text"
                                  name="fullName"
                                  id="fullName"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Smith"
                                  required
                                  {...formik.getFieldProps('guarantor')}
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
                                  {...formik.getFieldProps('guarantor_Number')}
                                />

                              </div>

                              {/* Guarabtor's ID field */}
                              <div className="flex flex-col gap-1">

                                <label for="user_id" class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
                                >
                                  User ID
                                </label>

                                <input
                                  type="text"
                                  name="user_id"
                                  id="user_id"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User ID"
                                  required
                                  {...formik.getFieldProps('guarantor_ID')}
                                />
                              </div>

                            </div>

                          </div>

                        </div>


                        {/* Submit button */}
                        <div
                          class=" flex  flex-col justify-center items-center mt-8"
                        >
                          <button
                            type="submit"
                            className="w-[100%] flex justify-center items-center bg-[#A020F0] rounded-lg text-base px-4 py-2 lg:px-5 lg:py-2.5 text-white font-medium "
                            onSubmit={formik.handleSubmit}
                          >
                            Submit
                          </button>

                        </div>

                      </form>
                    </div>
                  )}

                </div>
              </div>
            </div>

          </div>

        </div>


      </main>



      {/* Footer */}
      <footer
        className="p-4 bg-white sm:p-6 dark:bg-gray-800 border-t-2 border-gray-200"
      >
        {/* Wrapper */}
        <div
          className="container mx-auto px-4"
        >

          <Footer2 />

        </div>

      </footer >



    </div>



  )
}

export default Franchise