import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Role = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption) {
      navigate(selectedOption);
    }
  };


  return (
    <>
      <main className="bg-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">

        <div className="">
          {/* <Toaster position='top-center' reverseOrder={false}></Toaster> */}
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First column: Register Form */}
          <div className="bg-white rounded-md shadow-md p-4">
            <div class="flex flex-col items-center">
              {/* Logo */}
              <a href="/" class="flex items-center mt-6 mb-6 text-2xl font-semibold font-Inter text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="/logo.png" alt="logo" />
                BTCA_FARM
              </a>
            </div>

            {/* Form Column */}
            <div className="flex items-center mt-0 lg:mt-16">
              <div
                className="w-[100%] px-6 py-8  bg-[#F9FAFB] rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700"
              >
                {/* form heading */}
                <div>
                  <h1 class="text-xl font-bold font-Inter leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                    Select Role
                  </h1>
                </div>

                {/* Form */}
                <form className='py-1 mt-4'>

                  {/* Role */}
                  <div className="flex flex-col gap-0.5">

                    <label
                      for="register"
                      className="text-sm font-medium text-white dark:text-white">Register as</label>

                    <select
                      id="register"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleSelectChange}
                    >

                      <option value="">Select an option</option>
                      <option value="/farmer">Farmer</option>
                      <option value="/franchise">Franchise</option>
                      <option value="/reseller">Reseller</option>

                    </select>


                  </div>

                  {/* Already register */}
                  <div
                    className="py-4 flex flex-row gap-8"
                  >
                    <span
                      className='text-gray-500'
                    >
                      Already Registered?
                      <Link className='text-red-500 ml-2' to="/signin">Login Now</Link>
                    </span>
                  </div>

                </form>

              </div>

            </div>

          </div>

          {/* Second column: BTCA logo */}
          <div className="hidden lg:flex bg-gray-200 rounded-md shadow-md">
            <div className="flex items-center justify-center p-4 md:p-8" >
              <img src="/logo.png" alt="logo" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Role;
