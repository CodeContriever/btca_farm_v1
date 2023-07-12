import React from "react";

import Sidebar from "../components/Sidebar";
import Nav3 from "../components/Nav3";
import Footer from "../components/Footer";




const PageLayout = () => {

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

            </div>

          </div>

        </div>


      </main>



      {/* Footer */}
      <footer
        className="p-4 bg-white sm:p-6 dark:bg-gray-800 border-b-2 border-gray-200"
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

export default PageLayout