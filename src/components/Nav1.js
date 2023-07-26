import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';

const Nav1 = () => {

  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonName) => {
    if (buttonName === activeButton) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  return (

    <nav class="">

      {/* Nav Items */}
      <div class="flex flex-wrap justify-between items-center">

        {/* logo */}
        <div class="order-2 lg:order-1 flex justify-start items-center gap-4 lg:gap-8">

          {/* Logo */}
          <a href="/home" class="flex items-center justify-between mr-4">
            <img
              src="/logo.png"
              class="mr-3 h-6 lg:h-8"
              alt="BTCA Logo"
            />

            <span class="self-center text-md lg:text-2xl font-semibold whitespace-nowrap dark:text-white">BTCA_FARM</span>
          </a>

        </div>

        {/* Hamburger menu */}
        <div
          className=" order-1 box-border relative cursor-pointer  transition duration-300 "
          tabIndex="0"
        >
          <button
            onClick={() => handleButtonClick('menu')}
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>

            <span class="sr-only">Toggle sidebar</span>

          </button>

          {activeButton === 'menu' && (
            <div
              class="items-center justify-start lg:hidden  flex  w-[100%] order-1 bg-white"
              id="mobile-menu-2"
              tabIndex="-1"
            >

              <ul
                class="bg-white w-64 absolute top-8 z-10 flex flex-col justify-center p-4 gap-4 mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">

                {/* Home */}
                <li>
                  <a href="/home"
                    class="lg:bg-transparent text-[#A020F0] text-md lg:text-base dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>

                {/*  About Us */}
                <li>
                  <a href="/about"
                    class="lg:bg-transparent hover:text-[#A020F0] text-md lg:text-base dark:text-white"
                  >
                    About Us
                  </a>
                </li>

                {/* Contact Us */}
                <li>
                  <a href="/license"
                    class="lg:bg-transparent hover:text-[#A020F0] text-md lg:text-base dark:text-white"
                  >
                    Contact Us
                  </a>
                </li>



                <hr />

                {/* Signin*/}
                <li>
                  <Link to={'/signin'} className='lg:bg-transparent hover:text-[#A020F0] text-md lg:text-base dark:text-white'>
                    Log in
                  </Link>


                </li>

                {/* signup*/}
                <li>
                  <Link to={'/signup'} className='lg:bg-transparent hover:text-[#A020F0] text-md lg:text-base dark:text-white'>
                    Get Started
                  </Link>

                </li>

              </ul>

            </div>
          )}

        </div>

        {/* Nav items */}
        <div class="hidden w-full lg:flex items-center justify-between order-2 lg:w-auto " id="nav_items">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

            {/* Home */}
            <li>
              <a href="/home" class="block py-2 pl-3 pr-4 text-white lg:hover:text-[#A020F0]   rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
            </li>

            {/* About Us*/}
            <li>
              <a href="/about" class="block py-2 pl-3 pr-4 text-white lg:hover:text-[#A020F0]  rounded lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white" aria-current="page">About Us</a>
            </li>

            {/* Contact Us*/}
            <li>
              <a href="/contact" class="block py-2 pl-3 pr-4 text-white lg:hover:text-[#A020F0]  rounded lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white" aria-current="page">Contact Us</a>
            </li>


          </ul>

        </div>

        {/* Signin & Signup buttons */}
        <div class="flex items-center lg:order-2">

          {/* Log in */}

          <Link to={'/signin'} className='hidden lg:flex text-gray-800 font-medium  text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2'>
            Log in
          </Link>

          <Link to={'/signup'} className='hidden lg:flex text-white bg-[#A020F0]  hover:bg-blue-800  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2'>
            Get Started
          </Link>


        </div>

      </div>

    </nav>

  )
}

export default Nav1