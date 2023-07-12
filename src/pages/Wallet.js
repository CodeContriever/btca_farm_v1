import React from "react";

import {  Button } from "@chakra-ui/react";

import Sidebar from "../components/Sidebar";
import Nav3 from "../components/Nav3";
import Footer from "../components/Footer";




const Wallet = () => {

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

            {/* Wallet card */}
            <div className="col-span-3 lg:col-span-2 w-[100%]">

            <div
                className="box-border flex flex-col flex-grow"
              >
               
                <div className="box-border">

                  <div
                    className="box-border gap-6 grid grid-cols-[1fr,max-content] mb-6"
                  >

                    <div className="box-border">
                      <h1
                        className="box-border mb-0 mt-0 text-gray-700 text-base lg:text-2xl font-medium font-inter leading-6 "
                      >
                        My Wallets
                      </h1>{" "}
                    </div>
                  </div>

                  <div
                    className="box-border rounded-md bg-white shadow-lg"
                  >

                    <div
                      className="box-border gap-6 grid p-6"
                    >

                      {/* Card 1 */}
                      <div
                        className="box-border flex flex-col gap-6 rounded-t-md border border-gray-300 p-6 bg-white"
                      >

                        {/* card body */}
                        <div className="flex flex-col gap-6 p-4 bg-[#fff7d9]">

                          <div className="flex flex-row">
                            {/* <img /> */}
                            <p
                              className="box-border mt-0 text-gray-700 text-base font-medium font-inter leading-6 mb-2"
                            >
                              No wallet assigned
                            </p>
                          </div>

                          <div>
                            <p
                              className="box-border mb-0 mt-0 text-gray-600 text-base break-words font-inter leading-6"
                            >
                              Please install the corresponding application and log in
                            </p>
                          </div>

                        </div>

                        <div className="flex gap-4">
                          <img
                            src="/logo.png"
                            alt="logo"
                            className="w-9 h-9"
                          />

                          <h1
                            className="box-border mb-0 mt-0 text-gray-800 text-base font-bold font-inter leading-6 break-words flex items-center text-uppercase"
                          >
                            BTCA WALLET
                          </h1>

                        </div>

                        {/* card footer */}
                        <div>

                          <Button
                            colorScheme='teal'
                            variant='outline'
                          >
                            Go to my Apps
                          </Button>

                        </div>
                      </div>

                      {/* Card 2 */}
                      <div
                        className="box-border flex flex-col gap-6 rounded-b-md border border-gray-300 p-6 bg-white"
                      >

                        {/* card body */}
                        <div className="flex flex-col gap-6 bg-[#fff7d9] p-4">

                          <div className="flex flex-row">

                         {/* <img /> */}

                            <p
                              className="box-border mt-0 text-gray-700 text-base font-medium font-inter leading-6 mb-2"
                            >
                              No wallet assigned
                            </p>

                          </div>

                          <div>
                            <p
                              className="box-border mb-0 mt-0 text-gray-600 text-base break-words font-inter leading-6"
                            >
                              Please install the corresponding application and log in
                            </p>
                          </div>

                        </div>

                        <div className="flex gap-4">
                          <img
                            src="/logo.png"
                            alt="logo"
                            className="w-9 h-9"
                          />

                          <h1
                            className="box-border mb-0 mt-0 text-gray-800 text-base font-bold font-inter leading-6 break-words flex items-center text-uppercase"
                          >
                            BTCA FARM
                          </h1>

                        </div>

                        {/* card footer */}
                        <div>
                          <Button
                            // rightIcon={<ArrowForwardIcon />} 
                            colorScheme='teal'
                            variant='outline'
                          >
                            Go to my Apps
                          </Button>

                        </div>

                      </div>

                    </div>

                  </div>


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

          <Footer />

        </div>

      </footer >



    </div>

  )
}

export default Wallet