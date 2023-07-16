import React from 'react'
import { useState } from 'react'

import { Box, Flex, Spacer } from '@chakra-ui/react';

import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Dashbar = () => {
  const [activeButton, setActiveButton] = useState('chevronUpIcon');

  const handleButtonClick = () => {
    setActiveButton(activeButton === 'chevronUpIcon' ? 'chevronDownIcon' : 'chevronUpIcon');
  };

  const renderIcon = () => {
    if (activeButton === 'chevronUpIcon') {
      return (
        <ChevronUpIcon
          w={6}
          h={6}
          className="transition-opacity duration-200 ease-in delay-0 text-gray-700"
        />
      );
    } else {
      return (
        <ChevronDownIcon
          w={6}
          h={6}
          className="transition-opacity duration-200 ease-in delay-0 text-gray-700"
        />
      );
    }
  };

  return (
    <div
      className=""
    >


      <Flex minWidth='max-content' alignItems='center' gap='2'>

        <div>

          <h2
            className="box-border mb-0 mt-0 text-gray-800 font-inter text-base lg:text-xl font-medium leading-6 flex"
          >
            BTCA Farming Dashboard
          </h2>

        </div>

        <Spacer />

        <div
          className="hidden  box-border relative cursor-pointer w-64 rounded-md border border-gray-300 px-4 py-3 transition duration-300 outline-none bg-gray-100 lg:flex items-center pr-4 focus:outline-purple"
          tabIndex="0"
        >

          <button
            className="box-border flex flex-row gap-20 transition-colors whitespace-nowrap text-base  font-medium cursor-pointer relative text-center"
            onClick={handleButtonClick}
          >
            Farming BTCA
            {renderIcon()}
          </button>

          {activeButton === 'chevronUpIcon' && (
            <Box
              className="box-border max-h-[300px]"
              tabIndex="-1"
            >
              <ul
                className="box-border mb-0 mt-0 bg-white rounded-md list-none p-1 shadow-sm overflow-x-hidden pl-1 absolute top-full z-10  border border-gray-300 left-0 right-0 inline-block max-h-none"
              >
                {" "}
                <li
                  className="box-border block"
                >
                  <span
                    className="box-border outline-none rounded-md font-inter text-base font-medium leading-6 items-center cursor-pointer flex min-h-12 relative whitespace-nowrap bg-gray-100 text-blue-600 py-3 px-4"
                  >
                    <div
                      className="box-border gap-3 text-gray-700 font-inter text-[16px] font-medium leading-6 flex items-center flex-1"
                    >
                      <img
                        className="border-0 box-content max-w-full align-middle h-5"
                        alt="Farming BTCA"
                        src='/logo.png'
                      />

                      {"Farming BTCA"}

                      <svg
                        className="box-border text-blue-600 ml-auto mr-0"
                        height="20"
                        width="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M20.707 6.293a1 1 0 010 1.414l-8.586 8.586a3 3 0 01-4.242 0l-3.586-3.586a1 1 0 111.414-1.414l3.586 3.586a1 1 0 001.414 0l8.586-8.586a1 1 0 011.414 0z"
                          fillRule="evenodd"
                          style={{ boxSizing: "border-box" }}
                        />
                      </svg>
                      
                    </div>
                  </span>{" "}
                </li>

                <li
                  className="box-border block mt-4"
                >
                  <span
                    className="box-border outline-none rounded-md text-gray-700 font-inter text-base font-medium leading-6 items-center cursor-pointer flex min-h-12 relative whitespace-nowrap py-3 px-4"
                  >
                    <div
                      className="box-border gap-6 text-gray-700 font-inter text-[16px] font-medium leading-6 items-center flex flex-1"
                    >
                      <img
                        className="border-0 box-content max-w-full align-middle h-5"
                        alt="Farming PLCUX"
                        src='/logo.png'
                      />
                      {"Farming PLCUX"}
                    </div>
                  </span>{" "}
                </li>

                <li
                  className="box-border block mt-1"
                >
                  <span
                    className="box-border outline-none rounded-md text-gray-700 font-inter text-base font-medium leading-6 items-center cursor-pointer flex min-h-12 relative whitespace-nowrap bg-gray-100 py-3 px-4"
                  >
                    <div
                      className="box-border gap-3 text-gray-700 font-inter text-base font-medium leading-6 flex items-center flex-1"
                    >
                      <img
                        className="border-0 box-content max-w-full align-middle h-5"
                        alt="PLCUX"
                        src='/logo.png'
                      />

                      {"PLCUX"}

                    </div>

                  </span>{" "}

                </li>{" "}

                <li
                  className="box-border hidden"
                >
                  <span
                    className="box-border outline-none rounded-md text-gray-700 font-inter text-[16px] font-medium leading-6 items-center cursor-pointer flex min-h-12 relative whitespace-nowrap py-3 px-4"
                  >
                    No elements found. Consider changing the search query.
                  </span>
                </li>{" "}

                <li
                  className="box-border hidden"
                >
                  <span
                    className="box-border outline-none rounded-md text-gray-700 font-inter text-[16px] font-medium leading-6 items-center cursor-pointer flex min-h-12 relative whitespace-nowrap py-3 px-4"
                  >
                    List is empty.
                  </span>
                </li>{" "}

              </ul>
            </Box>
          )}


        </div>

      </Flex>


    </div>
  )
}

export default Dashbar