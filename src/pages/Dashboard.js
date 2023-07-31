import React from "react";

import Sidebar from "../components/Sidebar";
import Nav3 from "../components/Nav3";
// import Footer from "../components/Footer";
import DashboardMain from "../components/DashboardMain"
import Footer2 from "../components/Footer2";




const Dashboard = () => {

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

            <div className="">
              <Sidebar />
            </div>

            <div className="col-span-3 lg:col-span-2 w-[100%]">

              <DashboardMain />

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

          {/* <Footer /> */}
          <Footer2 />

        </div>

      </footer >



    </div>

  )
}

export default Dashboard