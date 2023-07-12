import React from 'react'

import { useDisclosure } from '@chakra-ui/react'
import {  Collapse } from '@chakra-ui/react';

const Nav1 = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">

            <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">

              {/* Logo */}
              <a href="/home" class="flex items-center">

                <img src="/logo.png" class="h-6 mr-3 sm:h-9" alt="BTCA Logo" />

                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BTCA_FARM</span>

              </a>

              <div class="flex items-center lg:order-2">

                {/* Log in */}
                <a href="/signin" class="hidden lg:flex text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>

                {/* Get started */}
                <a href="/home" class="hidden lg:flex text-white bg-[#A020F0]  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get started</a>

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
              <div  class="items-center justify-start lg:hidden  flex w-auto order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                  {/* Home */}
                  <li>
                    <a href="/home" class="block py-2 pl-3 pr-4 text-white bg-[#A020F0]  rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                  </li>

                  {/* About */}
                  <li>
                    <a href="/about" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#A020F0] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                  </li>

                  {/* Contact Us */}
                  <li>
                    <a href="/contact" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#A020F0] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"> Contact Us</a>
                  </li>

                </ul>

              </div>
              </Collapse>

                </div>

              </div>

              {/* Nav items */}
            
              <div  class="items-center justify-between hidden w-full lg:flex flex-col lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                  {/* Home */}
                  <li>
                    <a href="/home" class="block py-2 pl-3 pr-4 text-white bg-[#A020F0]  rounded lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                  </li>

                  {/* About */}
                  <li>
                    <a href="/about" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#A020F0] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                  </li>

                  {/* Contact Us */}
                  <li>
                    <a href="/contact" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#A020F0] lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"> Contact Us</a>
                  </li>

                </ul>

              </div>
             

            </div>

          </nav>
  )
}

export default Nav1