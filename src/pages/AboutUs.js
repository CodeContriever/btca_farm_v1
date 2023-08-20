import React from "react";
import { Link } from "react-router-dom";
import Nav2 from "../components/Nav2";
import Footer2 from "../components/Footer2"
import TechCarousel from "../components/carousels/TechCarousel";









const AboutUs = () => {
  const getBackgroundImage = () => {
    if (window.innerWidth < 768) {  // Small screens
      return 'url(bg_btca-8.jpg)';
    } else if (window.innerWidth < 1024) {  // Medium screens
      return 'url(bg_btca-9.jpg)';
    } else {  // Large screens
      return 'url(bg_btca-6.jpg)';
    }
  };

  return (
    <div
      className="">

      <header
        className='box-border w-[100%]  py-8 flex justify-center items-center bg-[#e6ebf0] sticky top-0 left-0 right-0 z-[10001] border-b-2 border-gray-200 my-0 shadow-[inset 0 -1px #e9eaea]'
      >

        {/* Wrapper */}
        <div className="container mx-auto px-4">

          <Nav2 />

        </div>

      </header>

      <main
        className="bg-[#F9FAFB]"
      >

        {/* Hero section */}
        <section
          className="bg-[#e6ebf0] dark:bg-gray-900 py-24 md:py-48"
          style={{
            backgroundImage: getBackgroundImage(),
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "0.9",
          }}
        >

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            <div className="flex flex-row items-center justify-between">

              <div className=" ">
                {/* Hero heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#A020F0] tracking-tight leading-none  dark:text-white">Bitcoin Africa
                  <span className="block max-w-2xl text-gray-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
                  >
                    the internet of blockchain giving wealth back to people
                  </span>
                </h1>

                {/* Hero descroption */}
                <p className="max-w-2xl mb-6 font-medium text-white mt-8 lg:mb-8 text-base sm:text-lg md:text-xl lg:text-md leading-7 dark:text-gray-400">Bitcoin Africa incorporates the best of blockchain technology in easy to use application to enables you to freely exchange assets, data and create wealth</p>

                {/* CTA  */}
                <div className="space-x-8">

                  <Link
                    className='px-5 py-2 text-base font-medium text-center text-white rounded-lg bg-[#A020F0]'
                  >
                    Whitepaper
                  </Link>

                  <Link className='px-5 py-2  text-base font-medium text-center text-white border border-gray-300 rounded-lg '
                  >
                    Play Video
                  </Link>

                </div>

              </div>

              {/* Hero image */}
              <div class="hidden lg:flex items-center justify-center">
                <img
                  src="logo.png"
                  alt="BTCA logo"
                  className="max-w-md"
                />
              </div>

            </div>

          </div>

        </section>

        {/* What is Bitcoin Farm*/}
        <section className="bg-[#e6ebf0] dark:bg-gray-900">

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            <div class="py-8 mx-auto max-w-screen-xl md:py-16 md:px-12">

              {/*  heading */}
              <h1 class="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-[#A020F0] dark:text-white text-center"
              >
                What is BITCOIN FARM
              </h1>

              {/* Hero desc */}
              <p class="mb-8 text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7  text-gray-500  text-justify md:text-center  dark:text-gray-400 max-w-2xl md:max-w-full">Bitcoin Africa is an ever-expanding ecosystem of interconnected apps and services, built for a decentralized future. Bitcoin Africa, (BTCA), is the world’s first decentralised peer-to-peer digital currency and micro payment system designed for the Afro-Descendant community.  Bitcoin Africa (BTCA) will help Africans to build, transfer and retain wealth. And this innovation enables you to freely exchange assets and data across sovereign, decentralized blockchain.</p>

            </div>

          </div>

        </section>


        {/* BTCA Farm section */}
        <section
          className="bg-[#e6ebf0] dark:bg-gray-900 py-20"
          style={{
            backgroundImage: "url(bg_btca-9.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "0.9",
          }}
        >

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            <div class="flex flex-row items-center justify-between">

              <div class=" ">
                {/* Heading */}
                <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none  text-[#A020F0] dark:text-white"
                >
                  BTCA Farm
                </h1>

                {/* Description */}
                <p class="max-w-2xl mb-6 text-white mt-8 md:mb-8 text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7 dark:text-gray-400">
                  Is an app for BTCA Coins mining using smart contracts. It allows you to secure mining opportunities by simply freezing coins in your FARM wallet. It uses the power of blockchain to give access to the global digital economy for millions of people in the emerging economies.
                </p>

                {/* CTA  */}
                <div className="flex items-center space-x-4">
                  {/* Play Store Button */}
                  <Link
                    to={'https://play.google.com/store/apps/details?id=your_app_package_name'}
                    className=" font-bold text-blue-500  transition duration-300"
                  >
                    <img
                      className="w-28 lg:w-52"
                      src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
                      alt="Play Store Logo"
                    />
                    {/* Download on Play Store */}
                  </Link>

                  {/* Apple Store Button */}
                  <Link
                    to={'https://apps.apple.com/app/your_app_id'}
                    className="flex  transition duration-300"

                  >
                    <img
                      className="w-24 lg:w-48"
                      src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png"
                      alt="Apple Store Logo"
                    />
                    {/* Download on Apple Store */}
                  </Link>
                </div>

              </div>

              {/* Hero image */}
              <div class="hidden lg:flex items-center justify-center">
                <img
                  src="logo.png"
                  alt="BTCA logo"
                  className="max-w-md"
                />
              </div>

            </div>

          </div>

        </section>


        {/* Feature section */}
        <section className="bg-[#e6ebf0] dark:bg-gray-900 py-20">

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-32">

              {/* Max minting */}
              <div className="flex flex-col items-start justify-center">

                <h3 className="mb-2  text-xl sm:text-2xl md:text-3xl  font-semibold text-[#A020F0] dark:text-white">Max minting</h3>

                <div className="flex flex-col lg:flex-row gap-4">

                  <p
                    className="order-2 lg:order-1 text-gray-500 text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7 dark:text-gray-400 max-w-sm"
                  >
                    Monthly mining over the course of 12 months. The process is entirely on the BTCA blockchain.
                  </p>

                  <div>
                    <svg class="order-1 lg:order-2 w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                  </div>


                </div>
              </div>

              {/* Operating term */}
              <div className="flex flex-col items-start justify-center">

                <h3 className="mb-2 text-xl sm:text-2xl md:text-3xl font-semibold  text-[#A020F0] dark:text-white">Operating term</h3>

                <div className="flex flex-col lg:flex-row gap-4">

                  <p
                    className="order-2 lg:order-1 text-gray-500 text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7 dark:text-gray-400 max-w-sm"
                  >
                    Smart Contracts allow you to mine for a period of one year, providing uninterrupted mining during the entire operating term.
                  </p>

                  <div>
                    <svg class="order-1 lg:order-2 w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                  </div>


                </div>
              </div>

              {/* Fast transactions */}
              <div className="flex flex-col items-start justify-center">

                <h3 className="mb-2 text-xl sm:text-2xl md:text-3xl font-semibold text-[#A020F0] dark:text-white">Fast transactions</h3>

                <div className="flex flex-col lg:flex-row gap-4">

                  <p
                    className="order-2 lg:order-1  text-gray-500 text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7 dark:text-gray-400 max-w-sm"
                  >
                    All mining transactions are available in the app. You can easily spend; transfer and freeze (mine) more coin again.
                  </p>

                  <div>
                    <svg class="order-1 lg:order-2 w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                  </div>


                </div>
              </div>

              {/* Safety & security */}
              <div className="flex flex-col items-start justify-center">

                <h3 className="mb-2  text-xl sm:text-2xl md:text-3xl font-semibold text-[#A020F0] dark:text-white">Safety & security</h3>

                <div className="flex flex-col lg:flex-row gap-4">

                  <p
                    className="order-2 lg:order-1 text-gray-500 text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7 dark:text-gray-400 max-w-sm"
                  >
                    The user is the sole owner of all access keys to his wallet and all the coins in it.
                  </p>

                  <div>
                    <svg className="order-1 lg:order-2 w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                  </div>


                </div>
              </div>

            </div>

          </div>


        </section>

        {/*How do I start earning section */}
        <section
          className="bg-[#e6ebf0] dark:bg-gray-900 py-20"
          style={{
            backgroundImage: "url(bg_btca-8.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "0.9",
          }}
        >

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            {/* Heading */}
            <div className="py-8 px-4 mx-auto max-w-screen-xl md:text-center md:py-16 lg:px-12">

              <h1 class="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-[#A020F0] dark:text-white text-center"
              >
                How Do I Start Earning With BTCA Farm
              </h1>

              {/* Hero desc */}
              <p class="mb-8 text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7 text-white dark:text-gray-400 text-center">
                Register on the website, Download BTCA wallet and farm apps, Activate your mining space, Send your coins to Farm App for mining, New coins can be mined 24/7 and sent to your main wallet, where you can spend them.

              </p>

            </div>

            {/* Mockup & stepper */}
            <div className=" flex justify-center items-center lg:ml-64">

              <div className="md:flex flex-row items-center  gap-20">

                {/* mockup */}
                <div className="hidden md:flex">
                  <div class="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                    <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                    <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                    </div>
                  </div>
                </div>


                {/* Stepper */}
                <div className="px-4 lg:px-0">

                  <ol className="relative flex flex-col gap-24 text-white border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">

                    <li className=" ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                        <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                        </svg>
                      </span>
                      <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">Step 1</h4>

                      <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">After installation, log in to the Ultima Farm;</p>

                    </li>

                    <li className=" ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                        <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                          <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                        </svg>
                      </span>
                      <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">Step 2</h4>
                      <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">Create a Farm Wallet and send coins to it;</p>
                    </li>

                    <li className=" ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                        <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                          <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                        </svg>
                      </span>
                      <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">Step 3</h4>
                      <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">Enter into a smart contract;</p>
                    </li>

                    <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                        <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                          <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                        </svg>
                      </span>
                      <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">Step 4</h4>
                      <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">Coins will be mined to your wallet every month in equal amounts!</p>
                    </li>

                  </ol>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* APPS */}
        <section
          className="bg-[#e6ebf0] dark:bg-gray-900 "

        >

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            <div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

              {/* heading */}
              <h1 class="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-[#A020F0] dark:text-white"
              >
                APPS
              </h1>

            </div>

            {/* Mockup & stepper */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-12  lg:gap-x-64">

              {/* Stepper 1 */}
              <div className="flex flex-col gap-8 px-4 lg:px-0">

                <div className="flex flex-row justify-start lg:justify-end gap-8">

                  <div className="flex flex-col gap-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">ULTIMA</h2>
                    <p className="text-xl sm:text-2xl md:text-3xl font-semibold  text-[#A020F0]">Wallet</p>
                  </div>

                  <div className="w-20 h-20">
                    <img src="/logo.png" alt="" />
                  </div>

                </div>

                <ol className="relative flex flex-col gap-24 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">

                  <li class="ml-6 w-full">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                      <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                      </svg>
                    </span>
                    <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">Easy</h4>

                    <p className=" text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">Easy and simple, with full control of your BTCA.</p>
                  </li>

                  <li class="ml-6 w-full">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                      </svg>
                    </span>
                    <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-medium md:font-semibold text-gray-700">Safe</h4>

                    <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">The Private Key is only stored on your smartphone.</p>
                  </li>

                  <li className="ml-6 w-full">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                      </svg>
                    </span>
                    <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">Functional</h4>

                    <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">Receive, send, store BTCA. Can be integrated in the application and the BTCA Farm and stores all mined coins.</p>
                  </li>

                  <li className="ml-6 w-full">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                      </svg>
                    </span>
                    <h3 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">Transaction</h3>
                    <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">Unprecedented level of security to date</p>
                  </li>

                </ol>

              </div>

              {/* mockup */}
              <div className="hidden lg:flex">

                <div class="self-center relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                  <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                  <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                  <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                  <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                  <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                  </div>
                </div>

              </div>


              {/* Stepper 2 */}
              <div className="flex flex-col gap-8 px-4 lg:px-0">

                <div className="flex flex-row  justify-start lg:justify-end gap-8">

                  <div className="flex flex-col gap-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
                    >
                      ULTIMA
                    </h2>

                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#A020F0]">Farm</p>
                  </div>

                  <div className="w-20 h-20">
                    <img src="/logo.png" alt="" />
                  </div>

                </div>

                <ol class="relative flex flex-col gap-24 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">

                  <li className="ml-6 w-full">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                      <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                      </svg>
                    </span>
                    <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 ">Safe</h4>

                    <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">Secure and non-standard encryption of the Private Key and storing the encrypted data on your smartphone.</p>
                  </li>

                  <li className="ml-6 w-full">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                      </svg>
                    </span>

                    <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">Personal</h4>

                    <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">Turn your smartphone into your efficient and ergonomic farm that brings you the most value!</p>
                  </li>

                  <li className="ml-6 w-full">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                      <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                      </svg>
                    </span>
                    <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">Autonomous</h4>

                    <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">The App can run without your participation, mining new BTCA for you. Link to download.</p>
                  </li>

                </ol>

              </div>

            </div>


          </div>

        </section>

        {/*SEE EXPLORER*/}
        <section
          className="bg-[#e6ebf0] dark:bg-gray-900 py-20"
          style={{
            backgroundImage: "url(bg_btca-8.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: "0.9",
          }}
        >

          {/* Wrapper */}
          <div className="container mx-auto px-6">

            {/* Heading */}
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

              {/* Heading */}
              <h1 className="mb-4  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-[#A020F0] dark:text-white"
              >
                SEE EXPLORER
              </h1>

              <h3 className="mb-8 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-none text-gray-700 dark:text-white">
                OUR TECHNOLOGY
              </h3>

            </div>

            {/* Tecnologies */}
            <TechCarousel />



          </div>

        </section>


      </main>


      {/* Footer */}
      <footer
        className="p-4 bg-[#e6ebf0] sm:p-6 dark:bg-gray-800 border-t-2 border-gray-200"
      >
        {/* Wrapper */}
        <div
          className="container mx-auto px-6"
        >

          <Footer2 />

        </div>

      </footer >

    </div >
  )
}

export default AboutUs

