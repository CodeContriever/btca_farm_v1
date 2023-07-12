import React from "react";
import { useState } from 'react';
import Wrapper from "../components/Wrapper";

import Sidebar from "../components/Sidebar";
import Nav3 from "../components/Nav3";
import Footer from "../components/Footer";




const Payout = () => {

  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  return (
    <div
    className="">

      {/* Header */}
      <header className="bg-white border-b-2 border-gray-200 py-4">

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

            <div className="">
              <Sidebar />
            </div>

            <div className="col-span-3 lg:col-span-2 w-[100%]">

               <div>
                <div className="mb-4">

                  <h1
                    className="box-border mb-0 mt-0 text-gray-800 text-base lg:text-2xl font-medium font-inter leading-6"
                  >
                    Payout
                  </h1>

                </div>

                {/* Banner */}
                <div
                  className="box-border border-2 border-gray-200 bg-gray-100 flex flex-nowrap mb-6 overflow-x-auto rounded-md"
                >
                  <button
                    className={`box-border p-3 md:p-6 transition-colors whitespace-nowrap text-base md:text-lg font-medium leading-6 cursor-pointer relative text-center 
                    ${activeButton === 'payout' ? 'text-[#A020F0]' : 'text-gray-600'}`}
                    onClick={() => handleButtonClick('payout')}
                  >
                    Payout
                  </button>

                  <button
                    className={`box-border p-3 md:p-6 transition-colors whitespace-nowrap text-base md:text-lg font-medium leading-6 cursor-pointer relative text-center 
                    ${activeButton === 'history' ? 'text-[#A020F0]' : 'text-gray-600'}`}
                    onClick={() => handleButtonClick('history')}
                  >
                    History
                  </button>
                </div>

                {/* payout content */}
                {activeButton === 'payout' && (

                  <Wrapper className="">
                    <div
                      className="box-border rounded-md p-4 bg-red-100 py-4"
                    >

                      <div
                        className="box-border flex"
                      >

                        <div
                          className="box-border inline-flex flex-shrink-0 mr-2"
                        >

                          <svg
                            className="box-border"
                            height="24"
                            width="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 21a9 9 0 100-18 9 9 0 000 18z"
                              fill="#FF4443"
                              style={{ boxSizing: "border-box" }}
                            />
                            <path
                              d="M15.79 8.21a.72.72 0 010 1.02L13.017 12l2.771 2.77a.72.72 0 01.065.945l-.065.074a.72.72 0 01-1.018 0L12 13.02l-2.77 2.77a.72.72 0 11-1.02-1.018L10.983 12 8.21 9.23a.72.72 0 01-.065-.945l.065-.074a.72.72 0 011.018 0L12 10.98l2.77-2.77a.72.72 0 011.02 0z"
                              fill="#fff"
                              style={{ boxSizing: "border-box" }}
                            />
                          </svg>
                        </div>{" "}

                        <div className="box-border">
                          {" "}
                          <p
                            className="box-border mb-0 mt-0 text-gray-600 text-base font-inter break-words leading-6"
                          >
                            Please{" "}
                            <a
                              className="box-border text-base font-inter no-underline transition-colors text-blue-600"
                              href="/activate"
                            >
                              activate
                            </a>{" "}
                            Google 2FA for your account to make payout.
                          </p>
                        </div>
                      </div>{" "}
                    </div>
                  </Wrapper>
                )}

                {/* History content */}

                {activeButton === 'history' && (
                  <Wrapper
                    className="box-border mb-6"
                  >

                    <div
                      className="box-border bg-gray-100 rounded-md border border-gray-200 pb-8"
                    >

                      <div
                        className="box-border pt-4 pb-0 px-4 flex"
                      >
                        {" "}
                        <p
                          className="box-border mb-0 mt-0 text-gray-700 text-lg font-medium leading-6"
                        >
                          {"Filter"}
                        </p>

                        {/* datepicker */}
                        <div
                          className="box-border flex  mr-0"
                        >
                          <div className="flex flex-col box-border p-6 lg:grid gap-4 grid-cols-3">

                            {/* from */}
                            <form>
                              <div>
                                <label
                                  for="website-admin"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  From
                                </label>
                                <div class="flex">
                                  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                  </span>
                                  <input type="date" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green" />
                                </div>

                              </div>
                            </form>

                            {/* To */}
                            <form>
                              <div>
                                <label
                                  for="website-admin"
                                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  To
                                </label>
                                <div class="flex">
                                  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                  </span>
                                  <input type="date" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green" />
                                </div>

                              </div>
                            </form>

                            {/* Statuses */}
                            <div>
                              <label
                                for="website-admin"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Statuses
                              </label>
                              <button
                                id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                                class="text-sm text-gray-600 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 font-medium rounded-lg px-8 py-2.5 text-center inline-flex items-center " type="button"
                              >
                                All Statuses
                                <svg
                                  class="w-2.5 h-2.5 ml-2.5"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none" viewBox="0 0 10 6"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                              </button>

                              {/* <!-- Dropdown menu --> */}
                              <div
                                id="dropdown"
                                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul
                                  class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton"
                                >

                                  {/* dashboard */}
                                  <li>
                                    <a
                                      href="/dashboard" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      Dashboard
                                    </a>
                                  </li>

                                  {/* settings */}
                                  <li>
                                    <a
                                      href="/settings"
                                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      Settings
                                    </a>
                                  </li>

                                  {/* earnings */}
                                  <li>
                                    <a
                                      href="/earnings"
                                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      Earnings
                                    </a>
                                  </li>

                                  {/* signout */}
                                  <li>
                                    <a
                                      href="/signin"
                                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      Sign out
                                    </a>
                                  </li>
                                </ul>
                              </div>

                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  </Wrapper>
                )}


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

          <Footer />

        </div>

      </footer >



    </div>

  )
}

export default Payout