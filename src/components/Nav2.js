import React from 'react'
import { useState } from "react";

import { useDisclosure } from '@chakra-ui/react'
import { Collapse } from '@chakra-ui/react';

const Nav2 = () => {
  const { isOpen, onToggle } = useDisclosure()

  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonName) => {
    if (buttonName === activeButton) {
      setActiveButton(null); // Hide content if the same button is clicked twice
    } else {
      setActiveButton(buttonName);
    }
  };

    const handleLogout = () => {
      // Clear the user's session or authentication token
      // Example: Remove the token from local storage
      localStorage.removeItem('authToken');
  
      // Redirect the user to the sign-in page
      window.location.href = '/signin';
    };

  return (
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">

      <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">

        {/* Logo */}
        <a href="/home" class="flex items-center">

          <img src="/logo.png" class="h-6 mr-3 sm:h-9" alt="BTCA Logo" />

          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BTCA_FARM</span>

        </a>

        <div class="flex items-center lg:order-2 gap-4">

          {/* Notification & Hamburger */}
          <div className='flex flex-row  gap-4 justify-center items-center'>

            {/* Notictaions */}
            <div class="flex lg:flex-row gap-4">
              {/* Notification bell */}
              <button
                type="button"
                onClick={() => handleButtonClick('notification')}
                class="inline-flex relative  items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-400 rounded-lg ">

                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM1.866 8.832a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z" />
                </svg>


                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">8</div>
              </button>

              {/* <!-- Notification bell dropdowns --> */}
              {activeButton === 'notification' && (
                <div
                  class=" overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-gray-800 divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
                  id="notification-dropdown"
                >
                  <div
                    class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300"
                  >
                    Notifications
                  </div>

                  {/* Notifications */}
                  <div>

                    {/* 1 */}
                    <a
                      href="/1"
                      class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                    >

                      {/* avatar image and sender text */}
                      <div class="flex-shrink-0">

                        <img
                          class="w-11 h-11 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                          alt="Bonnie Green avatar"
                        />

                        <div
                          class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                            ></path>
                            <path
                              d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                            ></path>
                          </svg>
                        </div>
                      </div>

                      {/* notification content */}
                      <div class="pl-3 w-full">
                        <div
                          class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                        >
                          New message from
                          <span class="font-semibold text-gray-900 dark:text-white"
                          >Bonnie Green</span
                          >: "Hey, what's up? All set for the presentation?"
                        </div>
                        <div
                          class="text-xs font-medium text-primary-600 dark:text-primary-500"
                        >
                          a few moments ago
                        </div>
                      </div>

                    </a>

                    {/* 2 */}
                    <a
                      href="/2"
                      class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                    >

                      {/* Avatar */}
                      <div class="flex-shrink-0">
                        <img
                          class="w-11 h-11 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                          alt="Jese Leos avatar"
                        />
                        <div
                          class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                            ></path>
                          </svg>
                        </div>
                      </div>

                      {/* Notification contents */}
                      <div class="pl-3 w-full">
                        <div
                          class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                        >
                          <span class="font-semibold text-gray-900 dark:text-white"
                          >Jese leos</span
                          >
                          and
                          <span class="font-medium text-gray-900 dark:text-white"
                          >5 others</span
                          >
                          started following you.
                        </div>
                        <div
                          class="text-xs font-medium text-primary-600 dark:text-primary-500"
                        >
                          10 minutes ago
                        </div>
                      </div>

                    </a>

                    {/* 3 */}
                    <a
                      href="/3"
                      class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                    >
                      {/* Avatar */}
                      <div class="flex-shrink-0">
                        <img
                          class="w-11 h-11 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                          alt="Joseph McFall avatar"
                        />
                        <div
                          class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>

                      {/* Notification content */}
                      <div class="pl-3 w-full">
                        <div
                          class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
                        >
                          <span class="font-semibold text-gray-900 dark:text-white"
                          >Joseph Mcfall</span
                          >
                          and
                          <span class="font-medium text-gray-900 dark:text-white"
                          >141 others</span
                          >
                          love your story. See it and view more stories.
                        </div>
                        <div
                          class="text-xs font-medium text-primary-600 dark:text-primary-500"
                        >
                          44 minutes ago
                        </div>
                      </div>

                    </a>


                  </div>

                  {/* View all notifications */}
                  <a
                    href="/view_all"
                    class="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
                  >
                    <div class="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      View all
                    </div>
                  </a>

                </div>
              )}
            </div>

            {/* Hamburger menu */}
            <div class="flex flex-col justify-start items-center">
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={onToggle}
              >
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>

              <Collapse in={isOpen} animateOpacity>
                <div class="items-center justify-start lg:hidden  flex w-auto order-1" id="mobile-menu-2">
                  <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                    {/* Home */}
                    <li>
                      <a href="/dashboard" class="block py-2 pl-3 pr-4 text-white bg-[#A020F0]  rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">Dashboard</a>
                    </li>

                    {/* About */}
                    <li>
                      <a href="/wallet" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#A020F0] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Wallet</a>
                    </li>

                    {/* Contact Us */}
                    <li>
                      <a href="/application" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#A020F0] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Applications</a>
                    </li>

                    <hr />

                    {/* Signout */}
                    <li>
                      <a href="/signout" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#A020F0] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Signout</a>
                    </li>

                  </ul>

                </div>
              </Collapse>

            </div>

            {/*signout */}
            <button
                      type="submit"
                      onClick={handleLogout}
                      class="hidden lg:flex justify-center items-center text-white bg-[#A020F0] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ml-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Signout
                      </button>

          </div>


        </div>

        {/* Nav items */}
        <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

            {/* Home */}
            <li>
              <a href="/dashboard" class="block py-2 pl-3 pr-4 text-white lg:hover:text-[#A020F0]   rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">Dashboard</a>
            </li>

            {/* Wallet */}
            <li>
              <a href="/wallet" class="block py-2 pl-3 pr-4 text-white lg:hover:text-[#A020F0]  rounded lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white" aria-current="page">Wallet</a>
            </li>

            {/* Application */}
            <li>
              <a href="/support" class="block py-2 pl-3 pr-4 text-white lg:hover:text-[#A020F0]  rounded lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white" aria-current="page">Support</a>
            </li>


          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Nav2