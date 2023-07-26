import React from "react";
import Sidebar from "../components/Sidebar";
import Nav3 from "../components/Nav3";
import Footer from "../components/Footer";

import { Input } from '@chakra-ui/react'




const Activation = () => {

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


            {/* Activation card */}
            <div className="col-span-3 lg:col-span-2 w-[100%]">

              <div
                className=''
              >

                <div className="mb-4">

                  <h1 className="mb-0 mt-0 text-gray-800 text-base lg:text-2xl font-medium font-inter leading-6">
                    Activation
                  </h1>
                </div>

                {/* Card */}
                <div
                  className="box-border flex flex-col flex-grow items-center justify-center rounded-md lg:px-8 py-20 bg-white shadow-lg"
                >

                  {/* Card header */}
                  <div>

                    <p
                      className="box-border mb-0 mt-0 text-gray-600 text-base font-medium leading-6"
                    >
                      {"Please, enter your Activation Code"}
                    </p>

                  </div>

                  {/* Card body */}
                  <div className="box-inherit whitespace-nowrap overflow-hidden truncate border-0 m-0 outline-none bg-transparent block text-inherit w-full max-w-[75%] text-gray-800 text-base leading-6 break-words py-5">
                    <Input
                      variant='outline'
                      placeholder='Activation Code'

                      className="py-5 md:py-8 border border-b border-gray-200 font"
                    />
                  </div>

                  {/* Card footer */}
                  <div
                    className="relative w-full mt-8 lg:mt-0"
                  >
                    <button
                      className=" lg:mb-9  box-border absolute bottom-0 right-[80px] md:right-[120px]  border-0 m-0 overflow-visible antialiased tracking-normal font-inter rounded-md outline-none transition duration-300 ease-in font-base leading-4 text-center bg-[#A020F0] text-white py-2 px-4 cursor-not-allowed pointer-events-none opacity-50"
                    >
                      Activate
                    </button>
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

export default Activation