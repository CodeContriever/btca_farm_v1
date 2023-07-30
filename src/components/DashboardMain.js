import React from 'react'
import { useState } from 'react';
import Wrapper from './Wrapper';


import { Box, } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';


import { Card, CardHeader, CardBody, } from '@chakra-ui/react';
import ShareLink from './dashboard/ShareLink';
import Dashbar from './dashboard/Dashbar';
import FarmSpeed from './dashboard/FarmSpeed';
import Gauge from './dashboard/Gauge';

const DashboardMain = () => {


  const [activeButton, setActiveButton] = useState("myFarm");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  const [transactionData, setTransactionData] = useState([])
  // const [error, setError] = useState('');

  const handleFarmHistoryClick = async (buttonName) => {
    setActiveButton(buttonName);
    try {
      const response = await fetch(`https://btca.afribook.world/transaction/getUserTransactionHistory/ea02f715-37c0-4c27-95fb-3452e6cfb1f0`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

      if (response.ok) {
        const data = await response.json();
        setTransactionData(data);
      }

      else {
        // Handle signin error
        const errorData = await response.json();
        console.error('Error getting your history:', errorData);
        throw new Error(errorData.message);
      }

    } catch (error) {
      console.error('Error fetching transaction history:', error);
      // setError(error.message || 'Error fetching transaction history');
    }

  };

  const handleFrozenHistoryClick = async (buttonName) => {
    setActiveButton(buttonName);
    try {
      const response = await fetch(`https://btca.afribook.world/transaction/getWalletTransactionHistory/0xA258dDa230F78C51F202e893EE22e4845bFee5fF`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

      if (response.ok) {
        const data = await response.json();
        setTransactionData(data);
      }

      else {
        // Handle signin error
        const errorData = await response.json();
        console.error('Error getting your history:', errorData);
        throw new Error(errorData.message);
      }

    } catch (error) {
      console.error('Error fetching transaction history:', error);
      // setError(error.message || 'Error fetching transaction history');
    }

  };




  return (
    <div
      className=''
    >

      {/* share Link */}
      <div
        className='w-[100%]  mb-8'
      >
        <ShareLink />

      </div>

      {/* Dashbar */}
      <div
        className='w-[100%] mb-8'
      >

        <Dashbar />

      </div>


      {/* Banner */}
      <div
        className='w-[100%] mb-6'
      >

        {/* Myfarm, farm and frozen history buttons */}
        <div
          className="box-border border-2 border-gray-200 bg-gray-100 flex flex-nowrap mb-6 overflow-x-auto rounded-md"
        >
          <button
            className={`box-border p-3 md:p-6 transition-colors whitespace-nowrap text-base md:text-lg font-medium leading-6 cursor-pointer relative text-center 
                    ${activeButton === 'payout' ? 'text-blue-600' : 'text-gray-600'}`}
            onClick={() => handleButtonClick('myFarm')}
          >
            My Farm
          </button>

          <button
            className={`box-border p-3 md:p-6 transition-colors whitespace-nowrap text-base md:text-lg font-medium leading-6 cursor-pointer relative text-center 
                    ${activeButton === 'history' ? 'text-blue-600' : 'text-gray-600'}`}
            onClick={() => handleFarmHistoryClick('FarmHistory')}
          >
            Farm History
          </button>

          <button
            className={`box-border p-3 md:p-6 transition-colors whitespace-nowrap text-base md:text-lg font-medium leading-6 cursor-pointer relative text-center 
                    ${activeButton === 'history' ? 'text-blue-600' : 'text-gray-600'}`}
            onClick={() => handleFrozenHistoryClick('FrozenHistory')}
          >
            Frozen History
          </button>
        </div>

        {/* myFarm content */}
        {activeButton === 'myFarm' && (

          <div className="">

            {/* First grid box */}
            <div class="grid grid-cols-1  lg:grid-cols-3 gap-8 mb-20">

              {/* 1 */}
              <div class="border-2 border-dashed rounded-lg border-gray-300 px-2 py-4">

                <div
                  class=" px-4 py-8 text-gray-900 bg-gray-300 border shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >

                  {/* Heading */}
                  <h2>Mining Factor</h2>


                  {/* Logo, refresh & BTCA*/}
                  <div
                    className="flex flex-row justify-between items-center mt-8"
                  >
                    <div>
                      <h3
                        className="box-border mb-0 mt-0 text-gray-500 font-inter text-base lg:text-xl font-medium leading-6 break-words whitespace-nowrap"
                      >
                        BTCA
                      </h3>
                      <p>Max Load For Mining</p>
                    </div>

                    {/* Logo & refresh img */}
                    <div className='flex flex-row items-center justify-center gap-4'>
                      <img
                        className="border-0 box-content max-w-full align-middle m-1.5 h-6 w-6"
                        alt="BTCA logo"
                        src="/logo.png"
                      />

                    </div>



                  </div>

                  <div className='mt-8 flex justify-center items-center w-[100%]'>
                    <button
                      type='submit'
                      className="w-full flex justify-center items-center bg-[#A020F0]  rounded-lg text-base px-4 py-2 text-white font-medium font-Inter" >
                      Payout
                    </button>

                  </div>

                </div>

              </div>

              {/* 2 */}
              <div class="border-2 border-dashed rounded-lg border-gray-300 px-2 py-4">

                <div
                  class=" px-4 py-16 bg-white text-gray-900  border shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >

                  {/* Heading */}
                  <h2>BTCA Upgrade Balance</h2>

                  {/* Logo, refresh & BTCA*/}
                  <div
                    className="flex flex-row justify-between items-center mt-8"
                  >

                    {/* Logo & refresh img */}
                    <div className='flex flex-row items-center justify-center gap-4'>
                      <img
                        className="border-0 box-content max-w-full align-middle m-1.5 h-6 w-6"
                        alt="BTCA logo"
                        src="/logo.png"
                      />

                      <svg
                        className="plc-svgIcon resIndicatorPrice__icon"
                        height="24"
                        width="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ boxSizing: "border-box", color: "#aaabad" }}
                      >
                        <path
                          d="M21.332 9.628l.001-6.093-2.42 2.42-.271-.271A9.103 9.103 0 0012.162 3C7.11 3 3 7.11 3 12.163c0 5.052 4.11 9.163 9.163 9.163 5.052 0 9.163-4.11 9.163-9.163h-1.774c0 4.074-3.315 7.39-7.39 7.39-4.074 0-7.389-3.316-7.389-7.39 0-4.075 3.315-7.39 7.39-7.39 1.974 0 3.83.77 5.225 2.165l.271.271-2.42 2.42h6.093z"
                          style={{ boxSizing: "border-box" }}
                        />
                      </svg>

                    </div>

                    {/* USDT */}
                    <p
                      className="box-border mb-0 mt-0 text-gray-500 font-inter text-base lg:text-xl font-medium leading-6 break-words whitespace-nowrap"
                    >
                      BTCA
                    </p>

                  </div>

                </div>

              </div>

              {/* 3 */}
              <div class="border-2 border-dashed rounded-lg border-gray-300 px-2 py-4">

                <div
                  class=" px-4 py-16 text-gray-900 bg-gray-300 border shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >

                  {/* Heading */}
                  <h2>Total Farmed Amount</h2>

                  {/* Logo, refresh & BTCA*/}
                  <div
                    className="flex flex-row justify-between items-center mt-8"
                  >

                    {/* Logo & refresh img */}
                    <div className='flex flex-row items-center justify-center gap-4'>
                      <img
                        className="border-0 box-content max-w-full align-middle m-1.5 h-6 w-6"
                        alt="BTCA logo"
                        src="/logo.png"
                      />

                      <svg
                        className="plc-svgIcon resIndicatorPrice__icon"
                        height="24"
                        width="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ boxSizing: "border-box", color: "#aaabad" }}
                      >
                        <path
                          d="M21.332 9.628l.001-6.093-2.42 2.42-.271-.271A9.103 9.103 0 0012.162 3C7.11 3 3 7.11 3 12.163c0 5.052 4.11 9.163 9.163 9.163 5.052 0 9.163-4.11 9.163-9.163h-1.774c0 4.074-3.315 7.39-7.39 7.39-4.074 0-7.389-3.316-7.389-7.39 0-4.075 3.315-7.39 7.39-7.39 1.974 0 3.83.77 5.225 2.165l.271.271-2.42 2.42h6.093z"
                          style={{ boxSizing: "border-box" }}
                        />
                      </svg>

                    </div>

                    {/* USDT */}
                    <p
                      className="box-border mb-0 mt-0 text-gray-500 font-inter text-base lg:text-xl font-medium leading-6 break-words whitespace-nowrap"
                    >
                      BTCA
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ########  Indicator  ######## */}
            <div
              class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600  mb-8"
            >
              <div
                className="box-border border-2 border-gray-300 rounded-md p-9 flex flex-col lg:flex-row items-center justify-around "
              >
                {/* indicator_Guage */}
                <div
                  className="text-center"
                >
                  <Gauge />


                </div>{" "}

                {/* Indicator-guage_Legend */}
                <div
                  className="box-border m-0"
                >
                  {/* Green */}
                  <div
                    className="box-border gap-2 flex items-center"
                  >
                    <div
                      className="box-border rounded-full h-2 w-2 mr-2 bg-green-500"
                    />{" "}
                    <p
                      className="box-border mb-0 mt-0 font-inter font-semibold uppercase text-gray-800 text-base  leading-6"
                    >
                      Green:
                    </p>{" "}
                    <p
                      className="box-border mb-0 mt-0 text-gray-800 font-inter text-base leading-6 font-medium"
                    >
                      Price is Good
                    </p>
                  </div>

                  {/* Yellow */}
                  <div
                    className="box-border gap-[8px] flex items-center mt-[8px]"
                  >
                    <div
                      className="box-border rounded-full h-[8px] w-[8px] mr-[8px] bg-yellow-400"
                    />{" "}
                    <p
                      className="box-border mb-0 mt-0 font-inter font-semibold uppercase text-gray-800 text-base leading-6"
                    >
                      Yellow:
                    </p>{" "}
                    <p
                      className="box-border mb-0 mt-0 text-gray-800 font-inter text-base leading-6 font-medium"
                    >
                      50% freezing
                    </p>
                  </div>

                  {/* Red */}
                  <div
                    className="box-border gap-[8px] flex items-center mt-[8px]"
                  >
                    <div
                      className="box-border rounded-full h-[8px] w-[8px] mr-[8px] bg-red-500"
                    />{" "}
                    <p
                      className="box-border mb-0 mt-0 font-inter font-semibold uppercase text-gray-800 text-base leading-6"
                    >
                      Red:
                    </p>{" "}
                    <p
                      className="box-border mb-0 mt-0 text-gray-800 font-inter text-base leading-6 font-medium"
                    >
                      100% freezing
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* Second Grid box */}
            {/* Market & Community price */}
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-20">

              {/* 1 */}
              <div
                class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 p-4"
              >

                <div
                  class=" px-4 py-4 text-gray-900 bg-white border shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >

                  {/* Heading */}
                  <h2>Market Price</h2>

                  {/* Logo, refresh and USDT */}
                  <div
                    className="flex flex-row justify-between"
                  >

                    {/* Logo & refresh img */}
                    <div className='flex flex-row items-center justify-center gap-4'>
                      <img
                        className="border-0 box-content max-w-full align-middle m-1.5 h-6 w-6"
                        alt="BTCA logo"
                        src="/logo.png"
                      />

                      <svg
                        className="plc-svgIcon resIndicatorPrice__icon"
                        height="24"
                        width="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ boxSizing: "border-box", color: "#aaabad" }}
                      >
                        <path
                          d="M21.332 9.628l.001-6.093-2.42 2.42-.271-.271A9.103 9.103 0 0012.162 3C7.11 3 3 7.11 3 12.163c0 5.052 4.11 9.163 9.163 9.163 5.052 0 9.163-4.11 9.163-9.163h-1.774c0 4.074-3.315 7.39-7.39 7.39-4.074 0-7.389-3.316-7.389-7.39 0-4.075 3.315-7.39 7.39-7.39 1.974 0 3.83.77 5.225 2.165l.271.271-2.42 2.42h6.093z"
                          style={{ boxSizing: "border-box" }}
                        />
                      </svg>

                    </div>

                    {/* USDT */}
                    <p
                      className="box-border mb-0 mt-0 text-gray-500 font-inter text-base lg:text-xl font-medium leading-6 break-words whitespace-nowrap"
                    >
                      USDT
                    </p>

                  </div>

                </div>

              </div>

              {/* 2 */}
              <div
                class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 p-4"
              >

                <div
                  class=" px-4 py-4 text-gray-900 bg-white border shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >

                  {/* Heading */}
                  <h2>Community Price</h2>

                  {/* Logo, refresh and USDT */}
                  <div
                    className="flex flex-row justify-between"
                  >

                    {/* Logo & refresh img */}
                    <div className='flex flex-row items-center justify-center gap-4'>
                      <img
                        className="border-0 box-content max-w-full align-middle m-1.5 h-6 w-6"
                        alt="BTCA logo"
                        src="/logo.png"
                      />

                      <svg
                        className="plc-svgIcon resIndicatorPrice__icon"
                        height="24"
                        width="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ boxSizing: "border-box", color: "#aaabad" }}
                      >
                        <path
                          d="M21.332 9.628l.001-6.093-2.42 2.42-.271-.271A9.103 9.103 0 0012.162 3C7.11 3 3 7.11 3 12.163c0 5.052 4.11 9.163 9.163 9.163 5.052 0 9.163-4.11 9.163-9.163h-1.774c0 4.074-3.315 7.39-7.39 7.39-4.074 0-7.389-3.316-7.389-7.39 0-4.075 3.315-7.39 7.39-7.39 1.974 0 3.83.77 5.225 2.165l.271.271-2.42 2.42h6.093z"
                          style={{ boxSizing: "border-box" }}
                        />
                      </svg>

                    </div>

                    {/* USDT */}
                    <p
                      className="box-border mb-0 mt-0 text-gray-500 font-inter text-base lg:text-xl font-medium leading-6 break-words whitespace-nowrap"
                    >
                      USDT
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ######## */}
            {/* Farm Status */}
            <div
              class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 mb-8"
            >

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* 1 */}
                <div class="p-4">

                  <div class="p-6  text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">

                    {/* <!-- Status guage--> */}
                    <div className='flex flex-col justify-center gap-8'>

                      <svg
                        className="box-border mb-16 w-full"
                        height="207"
                        width="232"
                        fill="none"
                        viewBox="0 0 232 207"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M115.815 150.781c3.013 0 5.584-.668 7.711-2.004a16.134 16.134 0 0 0 5.185-5.208c1.33-2.227 2.305-4.764 2.925-7.613.621-2.85.931-5.833.931-8.949l-.931-48.75h25.927l.931 48.75c0 6.589-.842 12.777-2.527 18.565-1.684 5.698-4.299 10.64-7.844 14.825-3.546 4.185-8.022 7.479-13.429 9.884-5.318 2.404-11.611 3.606-18.879 3.606-7.535 0-14.005-1.247-19.412-3.74-5.318-2.582-9.706-6.01-13.163-10.284-3.457-4.274-5.983-9.216-7.578-14.825-1.596-5.699-2.393-11.709-2.393-18.031v-48.75h25.926v48.75c0 3.116.31 6.144.931 9.082.62 2.849 1.595 5.387 2.925 7.613 1.329 2.137 3.013 3.873 5.052 5.209 2.127 1.246 4.698 1.87 7.712 1.87Zm5-72.524h45.656l-22.828-24.35"
                          fill="var(--primary-color)"
                          opacity="0.1"
                          style={{ boxSizing: "border-box" }}
                        />{" "}
                        <g style={{ boxSizing: "border-box" }}>
                          <path
                            clipRule="evenodd"
                            d="M205.977 106.223a.4.4 0 0 1-.363.439l-2.496.232a.391.391 0 0 1-.075-.777l2.493-.254a.401.401 0 0 1 .441.36Zm-1.296-8.808c.044.219-.1.43-.318.473l-2.461.475a.39.39 0 0 1-.151-.766l2.456-.497a.401.401 0 0 1 .474.315Zm-2.157-8.637a.403.403 0 0 1-.27.503l-2.401.715a.39.39 0 0 1-.227-.748l2.394-.737a.402.402 0 0 1 .504.267Zm-6.81-16.426a.404.404 0 0 1-.167.546l-2.213 1.173a.392.392 0 0 1-.37-.69l2.202-1.192a.404.404 0 0 1 .548.163Zm-4.584-7.631a.404.404 0 0 1-.113.56l-2.087 1.384a.391.391 0 0 1-.435-.651l2.074-1.402a.403.403 0 0 1 .561.109Zm-5.308-7.147a.404.404 0 0 1-.058.57l-1.941 1.58a.392.392 0 0 1-.498-.605l1.927-1.598a.404.404 0 0 1 .57.053ZM173.247 45a.404.404 0 0 1 .054.569l-1.598 1.927a.392.392 0 0 1-.606-.497l1.581-1.942a.404.404 0 0 1 .569-.057Zm-7.037-4.748a.403.403 0 1 0-.67-.448l-1.384 2.087a.392.392 0 0 0 .651.436l1.403-2.075Zm-7.741-5.145c.197.106.27.351.163.548l-1.192 2.202a.39.39 0 0 1-.69-.37l1.173-2.212a.402.402 0 0 1 .546-.167Zm-16.426-6.81c.213.064.333.29.267.504l-.737 2.394a.39.39 0 0 1-.748-.227l.715-2.4a.403.403 0 0 1 .503-.271Zm-8.637-2.157a.4.4 0 0 1 .315.475l-.497 2.456a.39.39 0 0 1-.766-.152l.475-2.46a.402.402 0 0 1 .473-.32Zm-8.808-1.296c.222.021.383.22.36.441l-.254 2.494a.391.391 0 0 1-.777-.076l.232-2.496a.402.402 0 0 1 .439-.363Zm-17.349.363a.401.401 0 1 0-.799.078l.253 2.494a.39.39 0 0 0 .777-.076l-.231-2.496Zm-9.247.933c.219-.043.43.1.473.319l.475 2.46a.39.39 0 0 1-.766.152l-.498-2.456a.402.402 0 0 1 .316-.475Zm-8.637 2.157a.403.403 0 0 1 .502.27l.716 2.401a.39.39 0 0 1-.748.227l-.737-2.394a.403.403 0 0 1 .267-.504Zm-16.426 6.81a.403.403 0 0 1 .546.168l1.173 2.212a.391.391 0 0 1-.69.37l-1.193-2.202a.403.403 0 0 1 .164-.547Zm-7.632 4.584a.403.403 0 0 1 .56.113l1.384 2.087a.391.391 0 0 1-.65.436l-1.403-2.075a.403.403 0 0 1 .11-.56ZM58.161 45a.403.403 0 0 1 .569.057L60.31 47a.391.391 0 0 1-.605.497l-1.598-1.927a.403.403 0 0 1 .054-.57ZM45.586 57.574a.403.403 0 0 1 .57-.053l1.927 1.597a.392.392 0 0 1-.498.606l-1.941-1.58a.403.403 0 0 1-.058-.57Zm-5.308 7.147a.403.403 0 0 1 .56-.11l2.075 1.403a.391.391 0 0 1-.436.65l-2.086-1.383a.403.403 0 0 1-.113-.56Zm-4.584 7.631a.403.403 0 0 1 .547-.163l2.203 1.192a.391.391 0 0 1-.37.69l-2.213-1.173a.403.403 0 0 1-.167-.546Zm-6.81 16.426a.403.403 0 0 1 .503-.267l2.395.737a.39.39 0 0 1-.227.748l-2.4-.715a.403.403 0 0 1-.272-.503Zm-2.157 8.637a.402.402 0 0 1 .474-.315l2.456.497a.39.39 0 0 1-.151.767l-2.46-.476a.402.402 0 0 1-.32-.473Zm-1.297 8.808a.402.402 0 0 1 .442-.36l2.493.254a.39.39 0 0 1-.075.777l-2.496-.232a.402.402 0 0 1-.364-.439Zm.364 17.349a.403.403 0 1 0 .078.8l2.493-.254a.39.39 0 0 0-.075-.777l-2.496.231Zm.933 9.247a.403.403 0 0 1 .318-.473l2.46-.475a.39.39 0 0 1 .152.767l-2.456.497a.402.402 0 0 1-.474-.316Zm2.156 8.637a.403.403 0 0 1 .271-.502l2.401-.716a.39.39 0 0 1 .227.748l-2.395.738a.403.403 0 0 1-.504-.268Zm6.978 15.88a.403.403 0 1 0 .38.71l2.203-1.192a.392.392 0 0 0-.37-.69l-2.213 1.172Zm4.417 8.178a.403.403 0 0 1 .113-.56l2.086-1.384a.391.391 0 0 1 .436.651l-2.074 1.402a.404.404 0 0 1-.561-.109Zm5.308 7.146a.404.404 0 0 1 .058-.569l1.941-1.58a.392.392 0 0 1 .498.605l-1.928 1.598a.403.403 0 0 1-.569-.054Zm140.236 0a.404.404 0 0 1-.57.054l-1.927-1.598a.391.391 0 0 1 .498-.605l1.941 1.58a.405.405 0 0 1 .058.569Zm4.747-7.037a.403.403 0 1 0 .448-.669l-2.087-1.384a.391.391 0 0 0-.435.651l2.074 1.402Zm5.145-7.741a.404.404 0 0 1-.548.164l-2.202-1.192a.392.392 0 0 1 .37-.69l2.213 1.172c.197.105.272.35.167.546Zm6.81-16.426a.402.402 0 0 1-.504.268l-2.394-.738a.39.39 0 0 1 .227-.748l2.401.716a.403.403 0 0 1 .27.502Zm2.157-8.637a.402.402 0 0 1-.474.316l-2.456-.497a.39.39 0 0 1 .151-.767l2.461.475a.403.403 0 0 1 .318.473Zm1.296-8.808a.402.402 0 0 1-.441.361l-2.43-.248a.453.453 0 0 1-.405-.496.325.325 0 0 1 .354-.293l2.559.238a.4.4 0 0 1 .363.438Z"
                            fill="#D5D5D6"
                            fillRule="evenodd"
                            opacity=".6"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ boxSizing: "border-box" }}
                          />{" "}
                          <path
                            clipRule="evenodd"
                            d="M206.408 114.704a.846.846 0 0 1-.856.844l-4.953-.045a.798.798 0 0 1-.788-.799c0-.437.351-.795.788-.799l4.953-.045a.846.846 0 0 1 .856.844Zm-6.883-34.72a.842.842 0 0 1-.465 1.1l-4.603 1.86a.79.79 0 0 1-1.025-.434.79.79 0 0 1 .418-1.031l4.567-1.945a.841.841 0 0 1 1.108.45Zm-19.684-29.417a.842.842 0 0 1-.008 1.196l-3.541 3.476a.792.792 0 0 1-1.115-.008.792.792 0 0 1-.008-1.115l3.476-3.541a.841.841 0 0 1 1.196-.008Zm-29.416-19.684c.432.18.632.677.449 1.108l-1.945 4.567a.79.79 0 0 1-1.031.418.79.79 0 0 1-.433-1.025l1.858-4.604a.842.842 0 0 1 1.102-.464ZM115.704 24c.471 0 .849.385.844.856l-.045 4.953a.797.797 0 0 1-.799.788.797.797 0 0 1-.799-.788l-.045-4.953a.845.845 0 0 1 .844-.856Zm-34.72 6.883a.841.841 0 0 1 1.1.465l1.86 4.603a.791.791 0 0 1-.434 1.025.79.79 0 0 1-1.031-.418l-1.945-4.567a.84.84 0 0 1 .45-1.108ZM51.566 50.567a.842.842 0 0 1 1.196.008l3.476 3.54c.304.31.3.809-.008 1.116a.793.793 0 0 1-1.115.008l-3.541-3.476a.842.842 0 0 1-.008-1.196ZM31.883 79.983a.84.84 0 0 1 1.107-.449l4.568 1.945a.79.79 0 0 1 .418 1.031.791.791 0 0 1-1.025.433l-4.604-1.858a.841.841 0 0 1-.464-1.102Zm-6.027 33.877a.845.845 0 1 0 0 1.688l4.953-.045a.797.797 0 0 0 .788-.799.797.797 0 0 0-.788-.799l-4.953-.045Zm6.027 35.565a.842.842 0 0 1 .464-1.102l4.604-1.858a.79.79 0 0 1 1.025.433.79.79 0 0 1-.418 1.031l-4.568 1.945a.841.841 0 0 1-1.107-.449Zm19.684 29.416a.841.841 0 0 1 .008-1.196l3.54-3.476a.792.792 0 0 1 1.116.008.792.792 0 0 1 .008 1.115l-3.476 3.541a.842.842 0 0 1-1.196.008Zm128.274 0a.842.842 0 0 1-1.196-.008l-3.476-3.541a.792.792 0 0 1 .008-1.115.792.792 0 0 1 1.115-.008l3.541 3.476a.842.842 0 0 1 .008 1.196Zm19.684-29.416a.841.841 0 0 1-1.108.449l-4.567-1.945a.791.791 0 0 1-.419-1.031.791.791 0 0 1 1.026-.433l4.603 1.858a.842.842 0 0 1 .465 1.102Z"
                            fill="#D5D5D6"
                            fillRule="evenodd"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ boxSizing: "border-box" }}
                          />
                        </g>{" "}
                        <g style={{ boxSizing: "border-box" }}>
                          <circle
                            cx="116"
                            cy="115"
                            fill="#e9eaea"
                            r="10"
                            style={{ boxSizing: "border-box" }}
                          />{" "}
                          <path
                            clipRule="evenodd"
                            d="m111.5 111-46.965 55.631 54.817-46.654a6.063 6.063 0 0 0 1.022-.869l.126-.108-.015-.014a6 6 0 1 0-8.97-7.972L111.5 111Z"
                            fill="#55575c"
                            fillRule="evenodd"
                            transform="rotate(0 116 115)"
                            style={{ boxSizing: "border-box" }}
                          />{" "}
                          <circle
                            cx="116"
                            cy="115"
                            fill="#e9eaea"
                            r="2"
                            style={{ boxSizing: "border-box" }}
                          />
                        </g>{" "}
                        <path
                          d="M41 191A106 106 0 1 1 191 191"
                          stroke="#e9eaea"
                          strokeLinecap="round"
                          strokeWidth="20"
                          style={{ boxSizing: "border-box" }}
                        />{" "}
                        <path
                          d="M41 191A106 106 0 0 1 41.04668119422594 190.95331880577402"
                          stroke="url(#gauge)"
                          strokeLinecap="round"
                          strokeWidth="16"
                          style={{ boxSizing: "border-box" }}
                        />{" "}
                        <path
                          id="gauge-anim"
                          d="M41 191A106 106 0 0 1 41.04668119422594 190.95331880577402"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeWidth="16"
                          style={{
                            boxSizing: "border-box",
                            animation:
                              "2s ease 0s infinite normal none running anim-data-v-269d2259",
                          }}
                        />{" "}
                        <circle
                          cx="41.04668119422594"
                          cy="190.95331880577402"
                          fill="#fff"
                          r="3"
                          style={{ boxSizing: "border-box" }}
                        />{" "}
                        <defs style={{ boxSizing: "border-box" }}>
                          <radialgradient
                            id="gauge"
                            cx="0"
                            cy="0"
                            gradientTransform="matrix(163.08315 -.52777 1.204 372.04105 34.722 198.861)"
                            gradientUnits="userSpaceOnUse"
                            r="1"
                            style={{ boxSizing: "border-box" }}
                          >
                            <stop
                              offset="0"
                              stopColor="#ADC5EC"
                              style={{ boxSizing: "border-box" }}
                            />{" "}
                            <stop
                              offset="1"
                              stopColor="#0D5BDB"
                              style={{ boxSizing: "border-box" }}
                            />
                          </radialgradient>
                        </defs>
                      </svg>

                      <button
                        type='submit'
                        className="w-full flex justify-center items-center bg-[#A020F0]  rounded-lg text-base text-white px-4 py-2 -white font-medium font-Inter" >
                        Increase License
                      </button>


                      {/* 2 */}
                      <div
                        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 p-4"
                      >

                        <div
                          class=" px-4 py-4 text-gray-900 bg-white border shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                        >

                          {/* Heading */}
                          <h2>Frozen</h2>

                          {/* Logo, refresh and USDT */}
                          <div
                            className="flex flex-row justify-between"
                          >

                            {/* Logo & refresh img */}
                            <div className='flex flex-row items-center justify-center gap-4'>
                              <img
                                className="border-0 box-content max-w-full align-middle m-1.5 h-6 w-6"
                                alt="BTCA logo"
                                src="/logo.png"
                              />

                              <svg
                                className="plc-svgIcon resIndicatorPrice__icon"
                                height="24"
                                width="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ boxSizing: "border-box", color: "#aaabad" }}
                              >
                                <path
                                  d="M21.332 9.628l.001-6.093-2.42 2.42-.271-.271A9.103 9.103 0 0012.162 3C7.11 3 3 7.11 3 12.163c0 5.052 4.11 9.163 9.163 9.163 5.052 0 9.163-4.11 9.163-9.163h-1.774c0 4.074-3.315 7.39-7.39 7.39-4.074 0-7.389-3.316-7.389-7.39 0-4.075 3.315-7.39 7.39-7.39 1.974 0 3.83.77 5.225 2.165l.271.271-2.42 2.42h6.093z"
                                  style={{ boxSizing: "border-box" }}
                                />
                              </svg>

                            </div>

                            {/* USDT */}
                            <p
                              className="box-border mb-0 mt-0 text-gray-500 font-inter text-base lg:text-xl font-medium leading-6 break-words whitespace-nowrap"
                            >
                              BTCA
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Max Load */}
                <div
                  class="p-4 "
                >
                  {/* <!-- Max Load Status --> */}
                  <Wrapper
                    className="box-border rounded-md overflow-hidden p-6 flex flex-col justify-between relative bg-[#4B0F70] shadow-none"
                  >

                    {/* Header: maxload status */}
                    <Box
                      className="box-border flex items-center justify-between mb-[24px]"
                    >
                      <p
                        className="box-border mb-0 mt-0 font-inter text-base font-medium leading-5 text-white"
                      >
                        <span
                          className="box-border outline-none"
                        >
                          MAX LOAD Status
                        </span>
                      </p>
                    </Box>

                    {/* Load status widgets cont */}
                    <div
                      className="box-border gap-12 grid flex-1"
                    >
                      {/* Total MaxLoad Card */}
                      <Card
                        className="box-border rounded-md overflow-hidden shadow-sm flex flex-col justify-between relative bg-opacity-12"
                      >
                        <CardHeader
                          className="box-border flex items-center justify-between"
                        >
                          <p
                            className="box-border mb-0 mt-0 font-inter text-base font-medium leading-6 text-black opacity-50"
                          >
                            <span
                              className="box-border outline-none"
                            >
                              Total Max Load
                            </span>{" "}
                          </p>{" "}
                        </CardHeader>{" "}

                        <CardBody>
                          <p
                            className="box-border mb-0 mt-0 font-inter text-base font-bold leading-6 break-words flex min-w-0 text-black gap-[8px]"
                          >
                            0{" "}
                            <span
                              className="box-border outline-none whitespace-nowrap opacity-50 text-black ml-auto mr-0"

                            >
                              BTCA
                            </span>
                          </p>
                        </CardBody>
                      </Card>{" "}

                      {/* Available Maxload */}
                      <Card
                        className="box-border rounded-md overflow-hidden shadow-sm flex flex-col justify-between relative bg-opacity-12 bg-white"
                      >
                        <CardHeader
                          className="box-border flex items-center justify-between"
                        >
                          <p
                            className="box-border mb-0 mt-0 font-inter text-base font-medium leading-5 text-black opacity-50"
                          >
                            <span
                              className="box-border outline-none"
                            >
                              Available max load
                            </span>{" "}
                          </p>{" "}
                        </CardHeader>{" "}

                        <CardBody>
                          <p
                            className="box-border mb-0 mt-0 font-inter text-xl font-bold leading-6 break-words flex min-w-0 text-white gap-[8px]"

                          >
                            0{" "}
                            <span
                              className="box-border outline-none whitespace-nowrap opacity-50 text-black ml-auto mr-0"
                            >
                              BTCA
                            </span>
                          </p>
                        </CardBody>
                      </Card>{" "}

                      {/* Used MaxLoad */}
                      <Card
                        className="box-border rounded-md overflow-hidden shadow-sm flex flex-col justify-between relative bg-opacity-12"
                      >
                        <CardHeader
                          className="box-border flex items-center justify-between"
                        >
                          <p
                            className="box-border mb-0 mt-0 font-inter text-base font-medium leading-5 text-black opacity-50"
                          >
                            <span
                              className="box-border outline-none"
                            >
                              Used Max Load
                            </span>{" "}
                          </p>{" "}
                        </CardHeader>{" "}

                        <CardBody>
                          <p
                            className="box-border mb-0 mt-0 font-inter text-black text-base font-bold leading-6 break-words flex min-w-0 gap-2"
                          >
                            0{" "}
                            <span
                              className="box-border outline-none whitespace-nowrap opacity-50 text-black ml-auto mr-0"
                            >
                              BTCA
                            </span>
                          </p>
                        </CardBody>

                      </Card>

                    </div>

                  </Wrapper>

                </div>

              </div>

            </div>


            {/* ######## */}
            {/* Farm speed */}
            <div
              class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 mb-20"
            >

              <FarmSpeed />

            </div>


            {/* Third Grid box */}
            {/* Farm Packages  */}
            <Wrapper className="grid grid-cols-1 lg:grid-cols-3 gap-4">


              {/* <div
                class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 p-0 lg:p-4"
              > */}

              {/* Packages  card */}
              <div className='bg-[#A020F0] rounded-lg overflow-hidden py-4 px-2  text-center text-white space-y-8'>
                {/* card Header */}
                <div>
                  <h2 className='font-bold text-base uppercase'>STARTER</h2>
                </div>

                <hr />

                {/* card Body */}
                <div
                  className='space-y-4'
                >

                  {/* Up to */}
                  <div>
                    <h3 className='font-medium text-base'>Up to 0.125BTCA</h3>
                    <p className='font-medium text-base'>Freezing MAX Load</p>
                  </div>

                  <hr />

                  {/* Mining reward */}
                  <div>
                    <h3 className='font-medium text-base'>0.5BTCA</h3>
                    <p className='font-medium text-base'>Mining Reward per month</p>
                  </div>

                  <hr />

                  {/*Expected Mining */}
                  <div>
                    <h3 className='font-medium text-base'>4.88BTCA</h3>
                    <p className='font-medium text-base'>Expected Mining</p>
                  </div>

                  <hr />

                  {/*Validity */}
                  <div>
                    <h3 className='font-medium text-base'>1 Year</h3>
                    <p className='font-medium text-base'>Validity</p>
                  </div>

                  <hr />

                  {/*Unfreezing Term */}
                  <div>
                    <h3 className='font-medium text-base'>$10</h3>
                    <p className='font-medium text-base'>Unfreezing Term </p>
                  </div>

                  <hr />

                </div>


                {/* card Footer */}
                <div>
                  <button
                    className='px-20 py-2 font-medium text-base outline otline-1 outline-white'
                  >
                    Activate
                  </button>
                </div>

              </div>

              {/* </div> */}

            </Wrapper>


          </div>

        )}


        {/* FarmHistory content */}
        {activeButton === 'FarmHistory' && (

          <Wrapper
            className=""
          >
            <div
              className="box-border rounded-md bg-white shadow-lg"
            >

              <div className="box-border gap-6 grid p-6">

                {/* Card */}
                <div className="box-border flex flex-col gap-6 rounded-t-md border border-gray-300 p-6 bg-white">

                  {/* Card body */}
                  <div className="flex flex-col gap-6 p-4 bg-[#fff7d9]">
                    {transactionData.length > 0 ? (
                      <div
                        className="box-border rounded-md bg-white shadow-md"
                      >

                        <ul>

                          {transactionData.map((transaction) => (
                            <li key={transaction.id}>
                              <div
                                className="box-border flex flex-col gap-6 rounded-t-md border border-gray-300 p-6 bg-white"
                              >

                                {/* card body */}
                                <div className="flex flex-col gap-6 p-4 bg-[#fff7d9]">

                                  <div className="flex flex-row">
                                    <p
                                      className="box-border mt-0 text-gray-700 text-base font-medium font-inter leading-6 mb-2"
                                    >
                                      {transaction.amount}
                                    </p>
                                  </div>

                                  <div>
                                    <p
                                      className="box-border mb-0 mt-0 text-gray-600 text-base break-words font-inter leading-6"
                                    >
                                      {transaction.date}
                                    </p>
                                  </div>

                                </div>



                                {/* card footer */}
                                <div>

                                  <Button
                                    colorScheme='teal'
                                    variant='outline'
                                  >
                                    Go to my Wallet
                                  </Button>

                                </div>
                              </div>

                            </li>
                          ))}

                        </ul>

                      </div>

                    ) : (

                      // No transaction history
                      <div
                        className="box-border rounded-md bg-white shadow-md"
                      >

                        <div
                          className="box-border flex flex-col items-center justify-center text-center px-4 py-12"
                        >

                          <img
                            className="border-0 box-content h-auto max-w-full align-middle"
                            alt="Empty"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEzNyIgdmlld0JveD0iMCAwIDE1MCAxMzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcyLjMgMTA2LjdjMjggMCA1MC43LTIyLjcgNTAuNy01MC44IDAtMjguMS0yMi44LTUwLjgtNTAuNy01MC44LTI4IDAtNTAuNyAyMi43LTUwLjcgNTAuOCAwIDI4LjEgMjIuNyA1MC44IDUwLjcgNTAuOFoiIGZpbGw9IiNFQUVFRjkiLz48cGF0aCBkPSJNMTE5LjcgMjIuNmE0LjEgNC4xIDAgMSAwIDAtOC4yIDQuMSA0LjEgMCAwIDAgMCA4LjJaTTEyNS43IDYuNmEyLjggMi44IDAgMSAwIDAtNS42IDIuOCAyLjggMCAwIDAgMCA1LjZaTTI0LjMgMjIuNWEyLjggMi44IDAgMSAwIDAtNS42IDIuOCAyLjggMCAwIDAgMCA1LjZaTTcuMiA3Ni41YTUuMiA1LjIgMCAxIDAgMC0xMC40IDUuMiA1LjIgMCAwIDAgMCAxMC40WiIgZmlsbD0iI0U3RUJGNiIvPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0ibTg3IDI4LjkgMTUuMyA1NWMuNSAxLjktLjYgMy44LTIuNSA0LjNsLTUzLjkgMTQuM2MtMS45LjUtMy44LS42LTQuMy0yLjVMMjIuOCAyOWMtLjUtMS45LjYtMy44IDIuNS00LjNsMzktMTAuM0w4NyAyOC45WiIgZmlsbD0idXJsKCNiKSIvPjwvZz48cGF0aCBkPSJtODYuMiA2My43LTI5LjEgNy43LTMuMi44LTkuNyAyLjZjLS40LjEtLjcuNi0uNSAxLjEuMS41LjYuOCAxIC43bDkuNy0yLjYgMy4yLS44IDI5LjEtNy43Yy40LS4xLjctLjYuNS0xLjEtLjEtLjUtLjYtLjgtMS0uN1pNODQuMyA1Ni45bC0xMC44IDIuOC0zLjcgMUw0Mi41IDY4Yy0uNC4xLS43LjYtLjUgMS4xLjEuNS42LjggMSAuN2wyNy40LTcuMyAzLjctMSAxMC44LTIuOGMuNC0uMS43LS42LjUtMS4xLS4yLS40LS43LS44LTEuMS0uN1pNODIuNyA1MGwtMi44LjctMi44LjctMzYuNSA5LjdjLS40LjEtLjcuNi0uNSAxLjEuMS41LjYuOCAxIC43bDM2LjUtOS43IDMuMS0uOCAyLjUtLjdjLjQtLjEuNy0uNi41LTEuMS0uMS0uNC0uNS0uNy0xLS42WiIgZmlsbD0iI0Q1RERFQSIvPjxwYXRoIGQ9Im02NS44IDg1LjQtMiAuNWMtLjQuMS0uOS0uMi0xLS43LS4xLS41LjEtMSAuNS0xLjFsMi0uNWMuNC0uMS45LjIgMSAuNy4xLjYtLjEgMS0uNSAxLjFaIiBmaWxsPSIjQ0VEN0UyIi8+PHBhdGggZD0ibTU5LjcgODctMTEuNSAzYy0uNC4xLS45LS4yLTEtLjctLjEtLjUuMS0xIC41LTEuMWwxMS41LTNjLjQtLjEuOS4yIDEgLjcuMi41IDAgMS0uNSAxLjFaTTgxLjMgNDMuMWwtOS4xIDIuNC0yLjIuNi0zMS4xIDguMmMtLjQuMS0uNy42LS41IDEuMS4xLjUuNi44IDEgLjdsMzEtOC4xIDIuMi0uNiA5LTIuNGMuNS0uMS43LS42LjYtMS4yIDAtLjQtLjUtLjgtLjktLjdaTTU5LjggMjggMzQgMzQuOGMtLjYuMi0xLjItLjItMS40LS44LS4yLS42LjItMS4yLjgtMS40bDI1LjgtNi44Yy42LS4yIDEuMi4yIDEuNC44LjIuNi0uMiAxLjItLjggMS40Wk00NS42IDM4LjQgMzUuNyA0MWMtLjYuMi0xLjItLjItMS40LS44LS4yLS42LjItMS4yLjgtMS40bDkuOC0yLjZjLjYtLjIgMS4yLjIgMS40LjguMi42LS4yIDEuMi0uNyAxLjRaTTY0LjMgMTQuNGw0IDE1LjJjLjYgMi4xIDIuOSAzLjQgNSAyLjhMODcgMjguOSIgZmlsbD0iI0Q1RERFQSIvPjxnIGZpbHRlcj0idXJsKCNjKSI+PHBhdGggZD0ibTEyNy40IDQ0LjQtOS4yIDU2LjRjLS4zIDEuOS0yLjIgMy4yLTQuMSAyLjhMNTkuMyA5NGMtMS45LS4zLTMuMi0yLjItMi45LTQuMWwxMi43LTcyLjNjLjMtMS45IDIuMi0zLjIgNC4xLTIuOGwzOS44IDcgMTQuNCAyMi42WiIgZmlsbD0idXJsKCNkKSIvPjwvZz48cGF0aCBkPSJtMTEyLjEgNzUuNy0yOS42LTUuMi0zLjItLjYtOS45LTEuN2MtLjQtLjEtLjkuMy0uOS44LS4xLjUuMiAxIC42IDEuMWw5LjkgMS43IDMuMi42IDI5LjYgNS4yYy40LjEuOS0uMy45LS44LjEtLjUtLjEtMS0uNi0xLjFaTTExMy4zIDY4LjhsLTExLTEuOS0zLjctLjctMjcuOS00LjljLS40LS4xLS45LjMtLjkuOC0uMS41LjIgMSAuNiAxLjFsMjcuOSA0LjkgMy43LjcgMTEgMS45Yy40LjEuOS0uMy45LS44LjEtLjUtLjItMS0uNi0xLjFaIiBmaWxsPSIjQ0VEN0UyIi8+PHBhdGggZD0ibTExNC43IDYxLjgtMi45LS41LTIuOS0uNS0zNy4yLTYuNWMtLjQtLjEtLjkuMy0uOS44LS4xLjUuMiAxIC42IDEuMWwzNy4yIDYuNSAzLjIuNiAyLjUuNGMuNC4xLjktLjMuOS0uOC4yLS41IDAtMS0uNS0xLjFaIiBmaWxsPSIjRDVEREVBIi8+PHBhdGggZD0ibTg0LjUgODYuOS0yLS4zYy0uNC0uMS0uNy0uNi0uNi0xLjEuMS0uNS41LS45LjktLjhsMiAuM2MuNC4xLjcuNi42IDEuMS0uMS42LS41LjgtLjkuOFoiIGZpbGw9IiNDRUQ3RTIiLz48cGF0aCBkPSJtNzguNCA4NS44LTExLjctMmMtLjQtLjEtLjctLjYtLjYtMS4xLjEtLjUuNS0uOS45LS44bDExLjcgMmMuNC4xLjcuNi42IDEuMS0uMS42LS41LjktLjkuOFoiIGZpbGw9IiNFM0VBRjIiLz48cGF0aCBkPSJtMTE2LjMgNTUtOS4zLTEuNi0yLjMtLjRMNzMgNDcuNGMtLjQtLjEtLjkuMy0uOS44LS4xLjUuMiAxIC42IDEuMWwzMS43IDUuNiAyLjMuNCA5LjIgMS42Yy41LjEuOS0uMyAxLS44LjEtLjUtLjItMS0uNi0xLjFaTTEwMy4yIDMyLjNsLTI2LjMtNC42Yy0uNi0uMS0xLS43LS45LTEuMy4xLS42LjctMSAxLjMtLjlsMjYuMyA0LjZjLjYuMSAxIC43LjkgMS4zLS4xLjUtLjcgMS0xLjMuOVpNODUuOSAzNS43bC0xMC4xLTEuOGMtLjYtLjEtMS0uNy0uOS0xLjMuMS0uNi43LTEgMS4zLS45bDEwIDEuOGMuNi4xIDEgLjcuOSAxLjMtLjEuNi0uNyAxLTEuMi45Wk0xMTIuOSAyMS44bC0yLjcgMTUuNWMtLjQgMi4yIDEuMiA0LjMgMy40IDQuN2wxMy44IDIuNCIgZmlsbD0iI0Q1RERFQSIvPjxwYXRoIGQ9Ik04OS43IDk1LjVjMTIuMzE2IDAgMjIuMy05Ljk4NCAyMi4zLTIyLjNzLTkuOTg0LTIyLjMtMjIuMy0yMi4zLTIyLjMgOS45ODQtMjIuMyAyMi4zIDkuOTg0IDIyLjMgMjIuMyAyMi4zWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik04Ny42IDc2LjhjLS4xLS40LS4xLS44LS4xLTEuMyAwLTEuNy43LTMuMiAyLjUtNC41bDEuNS0xLjFjLjktLjcgMS4zLTEuNSAxLjMtMi41IDAtMS40LTEtMi44LTMuMS0yLjgtMi4yIDAtMy4yIDEuOC0zLjIgMy41IDAgLjQgMCAuNy4xIDFsLTQtLjFjLS4xLS40LS4yLS45LS4yLTEuNCAwLTMuNCAyLjUtNi42IDcuMi02LjYgNC44IDAgNy40IDMuMSA3LjQgNi4yIDAgMi41LTEuMyA0LjItMy4xIDUuNWwtMS4zLjljLTEuMS44LTEuNyAxLjgtMS43IDN2LjJoLTMuM1ptMS43IDJjMS40IDAgMi41IDEuMSAyLjUgMi41cy0xLjEgMi41LTIuNSAyLjUtMi41LTEuMS0yLjUtMi41Yy4xLTEuMyAxLjEtMi41IDIuNS0yLjVaIiBmaWxsPSIjOTg5RkIwIi8+PHBhdGggZD0iTTEyMy4wNzkgMTA3LjgyNGMtLjg2NSAwLTEuNzMxLS4zNDctMi40MjMtMS4xMjZMMTA2LjIgOTIuMjQzbC0uNTE5LjM0NmMtNC42NzQgMy40NjMtMTAuMTI3IDUuMjgtMTUuNjY3IDUuMjgtNi42NjUgMC0xMy4zMy0yLjY4My0xOC4yNjQtNy4zNTctNS4xOTQtNC45MzQtOC4wNS0xMS42LTguMDUtMTguODcgMC0xNC40NTUgMTEuNzcyLTI2LjIyNyAyNi4yMjctMjYuMjI3IDkuODY4IDAgMTguNTI0IDUuMTkzIDIzLjE5OCAxNC4wMjIgNC41ODggOC43NDMgMy45ODIgMTguOTU3LTEuNjQ0IDI3LjE4bC0uMzQ3LjUxOSAxNC41NDIgMTQuNTQyYzEuNDcyIDEuNDcxIDEuMTI1IDIuOTQzLjg2NiAzLjcyMi0uNjkzIDEuMzg1LTIuMDc4IDIuNDI0LTMuNDYzIDIuNDI0Wk04OS45MjcgNTIuNTk5Yy0xMC41NiAwLTE5LjA0MyA4LjU3LTE5LjA0MyAxOS4wNDMgMCAxMS45NDUgOS43ODEgMTkuMTMgMTkuMzAzIDE5LjEzIDUuOCAwIDExLjA4LTIuNTk3IDE0LjgwMi03LjI3MiA0LjU4Ny01LjcxMiA1LjM2Ni0xMy40MTYgMi4xNjQtMjAuMDgxLTMuMjktNi42NjUtOS44NjgtMTAuODItMTcuMjI2LTEwLjgyWiIgZmlsbD0iIzk4OUZCMCIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjYyLjUyNCIgeTE9IjEyLjM1OSIgeDI9IjYyLjUyNCIgeTI9IjEwMy41NzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkRGRUZGIi8+PHN0b3Agb2Zmc2V0PSIuOTk2IiBzdG9wLWNvbG9yPSIjRUNGMEY1Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSI5MS44NTUiIHkxPSIxMi42NyIgeDI9IjkxLjg1NSIgeTI9IjEwNC42MzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkRGRUZGIi8+PHN0b3Agb2Zmc2V0PSIuOTk2IiBzdG9wLWNvbG9yPSIjRUNGMEY1Ii8+PC9saW5lYXJHcmFkaWVudD48ZmlsdGVyIGlkPSJhIiB4PSIuNjgiIHk9IjMuNCIgd2lkdGg9IjEyMy43NDEiIGhlaWdodD0iMTMyLjIyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+PGZlT2Zmc2V0IGR5PSIxMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjExIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMzk3NzA4IDAgMCAwIDAgMC40Nzc0OSAwIDAgMCAwIDAuNTc1IDAgMCAwIDAuMjcgMCIvPjxmZUJsZW5kIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd180OThfMjE3MjMiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk4XzIxNzIzIiByZXN1bHQ9InNoYXBlIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iYyIgeD0iMzQuMzU3IiB5PSIzLjcyOCIgd2lkdGg9IjExNS4wNDMiIGhlaWdodD0iMTMyLjk0NSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPjxmZU9mZnNldCBkeT0iMTEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjM5NzcwOCAwIDAgMCAwIDAuNDc3NDkgMCAwIDAgMCAwLjU3NSAwIDAgMCAwLjI3IDAiLz48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk4XzIxNzIzIi8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5OF8yMTcyMyIgcmVzdWx0PSJzaGFwZSIvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4="
                          />

                          <p
                            className="box-border mb-0 mt-0 text-gray-700 text-base font-medium leading-6"

                          >
                            Empty
                          </p>

                          <p
                            className="box-border mb-0 text-gray-500 text-base font-normal leading-5 mt-2"
                          >
                            You do not have any Farm History
                          </p>

                        </div>

                      </div>

                    )}

                  </div>

                  {/* Card footer */}
                  <div>
                    <Button colorScheme="teal" variant="outline">
                      Go to my Wallet
                    </Button>
                  </div>
                </div>

              </div>

            </div>

          </Wrapper>

        )}


        {/* FrozenHistory content */}
        {activeButton === 'FrozenHistory' && (

          <Wrapper
            className=""
          >
            <div
              className="box-border rounded-md bg-white shadow-lg"
            >

              <div className="box-border gap-6 grid p-6">

                {/* Card */}
                <div className="box-border flex flex-col gap-6 rounded-t-md border border-gray-300 p-6 bg-white">

                  {/* Card body */}
                  <div className="flex flex-col gap-6 p-4 bg-[#fff7d9]">
                    {transactionData.length > 0 ? (
                      <div
                        className="box-border rounded-md bg-white shadow-md"
                      >

                        <ul>

                          {transactionData.map((transaction) => (
                            <li key={transaction.id}>
                              <div
                                className="box-border flex flex-col gap-6 rounded-t-md border border-gray-300 p-6 bg-white"
                              >

                                {/* card body */}
                                <div className="flex flex-col gap-6 p-4 bg-[#fff7d9]">

                                  <div className="flex flex-row">
                                    <p
                                      className="box-border mt-0 text-gray-700 text-base font-medium font-inter leading-6 mb-2"
                                    >
                                      {transaction.amount}
                                    </p>
                                  </div>

                                  <div>
                                    <p
                                      className="box-border mb-0 mt-0 text-gray-600 text-base break-words font-inter leading-6"
                                    >
                                      {transaction.date}
                                    </p>
                                  </div>

                                </div>



                                {/* card footer */}
                                <div>

                                  <Button
                                    colorScheme='teal'
                                    variant='outline'
                                  >
                                    Go to my Wallet
                                  </Button>

                                </div>
                              </div>

                            </li>
                          ))}

                        </ul>

                      </div>

                    ) : (

                      // No transaction history
                      <div
                        className="box-border rounded-md bg-white shadow-md"
                      >

                        <div
                          className="box-border flex flex-col items-center justify-center text-center px-4 py-12"
                        >

                          <img
                            className="border-0 box-content h-auto max-w-full align-middle"
                            alt="Empty"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjEzNyIgdmlld0JveD0iMCAwIDE1MCAxMzciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcyLjMgMTA2LjdjMjggMCA1MC43LTIyLjcgNTAuNy01MC44IDAtMjguMS0yMi44LTUwLjgtNTAuNy01MC44LTI4IDAtNTAuNyAyMi43LTUwLjcgNTAuOCAwIDI4LjEgMjIuNyA1MC44IDUwLjcgNTAuOFoiIGZpbGw9IiNFQUVFRjkiLz48cGF0aCBkPSJNMTE5LjcgMjIuNmE0LjEgNC4xIDAgMSAwIDAtOC4yIDQuMSA0LjEgMCAwIDAgMCA4LjJaTTEyNS43IDYuNmEyLjggMi44IDAgMSAwIDAtNS42IDIuOCAyLjggMCAwIDAgMCA1LjZaTTI0LjMgMjIuNWEyLjggMi44IDAgMSAwIDAtNS42IDIuOCAyLjggMCAwIDAgMCA1LjZaTTcuMiA3Ni41YTUuMiA1LjIgMCAxIDAgMC0xMC40IDUuMiA1LjIgMCAwIDAgMCAxMC40WiIgZmlsbD0iI0U3RUJGNiIvPjxnIGZpbHRlcj0idXJsKCNhKSI+PHBhdGggZD0ibTg3IDI4LjkgMTUuMyA1NWMuNSAxLjktLjYgMy44LTIuNSA0LjNsLTUzLjkgMTQuM2MtMS45LjUtMy44LS42LTQuMy0yLjVMMjIuOCAyOWMtLjUtMS45LjYtMy44IDIuNS00LjNsMzktMTAuM0w4NyAyOC45WiIgZmlsbD0idXJsKCNiKSIvPjwvZz48cGF0aCBkPSJtODYuMiA2My43LTI5LjEgNy43LTMuMi44LTkuNyAyLjZjLS40LjEtLjcuNi0uNSAxLjEuMS41LjYuOCAxIC43bDkuNy0yLjYgMy4yLS44IDI5LjEtNy43Yy40LS4xLjctLjYuNS0xLjEtLjEtLjUtLjYtLjgtMS0uN1pNODQuMyA1Ni45bC0xMC44IDIuOC0zLjcgMUw0Mi41IDY4Yy0uNC4xLS43LjYtLjUgMS4xLjEuNS42LjggMSAuN2wyNy40LTcuMyAzLjctMSAxMC44LTIuOGMuNC0uMS43LS42LjUtMS4xLS4yLS40LS43LS44LTEuMS0uN1pNODIuNyA1MGwtMi44LjctMi44LjctMzYuNSA5LjdjLS40LjEtLjcuNi0uNSAxLjEuMS41LjYuOCAxIC43bDM2LjUtOS43IDMuMS0uOCAyLjUtLjdjLjQtLjEuNy0uNi41LTEuMS0uMS0uNC0uNS0uNy0xLS42WiIgZmlsbD0iI0Q1RERFQSIvPjxwYXRoIGQ9Im02NS44IDg1LjQtMiAuNWMtLjQuMS0uOS0uMi0xLS43LS4xLS41LjEtMSAuNS0xLjFsMi0uNWMuNC0uMS45LjIgMSAuNy4xLjYtLjEgMS0uNSAxLjFaIiBmaWxsPSIjQ0VEN0UyIi8+PHBhdGggZD0ibTU5LjcgODctMTEuNSAzYy0uNC4xLS45LS4yLTEtLjctLjEtLjUuMS0xIC41LTEuMWwxMS41LTNjLjQtLjEuOS4yIDEgLjcuMi41IDAgMS0uNSAxLjFaTTgxLjMgNDMuMWwtOS4xIDIuNC0yLjIuNi0zMS4xIDguMmMtLjQuMS0uNy42LS41IDEuMS4xLjUuNi44IDEgLjdsMzEtOC4xIDIuMi0uNiA5LTIuNGMuNS0uMS43LS42LjYtMS4yIDAtLjQtLjUtLjgtLjktLjdaTTU5LjggMjggMzQgMzQuOGMtLjYuMi0xLjItLjItMS40LS44LS4yLS42LjItMS4yLjgtMS40bDI1LjgtNi44Yy42LS4yIDEuMi4yIDEuNC44LjIuNi0uMiAxLjItLjggMS40Wk00NS42IDM4LjQgMzUuNyA0MWMtLjYuMi0xLjItLjItMS40LS44LS4yLS42LjItMS4yLjgtMS40bDkuOC0yLjZjLjYtLjIgMS4yLjIgMS40LjguMi42LS4yIDEuMi0uNyAxLjRaTTY0LjMgMTQuNGw0IDE1LjJjLjYgMi4xIDIuOSAzLjQgNSAyLjhMODcgMjguOSIgZmlsbD0iI0Q1RERFQSIvPjxnIGZpbHRlcj0idXJsKCNjKSI+PHBhdGggZD0ibTEyNy40IDQ0LjQtOS4yIDU2LjRjLS4zIDEuOS0yLjIgMy4yLTQuMSAyLjhMNTkuMyA5NGMtMS45LS4zLTMuMi0yLjItMi45LTQuMWwxMi43LTcyLjNjLjMtMS45IDIuMi0zLjIgNC4xLTIuOGwzOS44IDcgMTQuNCAyMi42WiIgZmlsbD0idXJsKCNkKSIvPjwvZz48cGF0aCBkPSJtMTEyLjEgNzUuNy0yOS42LTUuMi0zLjItLjYtOS45LTEuN2MtLjQtLjEtLjkuMy0uOS44LS4xLjUuMiAxIC42IDEuMWw5LjkgMS43IDMuMi42IDI5LjYgNS4yYy40LjEuOS0uMy45LS44LjEtLjUtLjEtMS0uNi0xLjFaTTExMy4zIDY4LjhsLTExLTEuOS0zLjctLjctMjcuOS00LjljLS40LS4xLS45LjMtLjkuOC0uMS41LjIgMSAuNiAxLjFsMjcuOSA0LjkgMy43LjcgMTEgMS45Yy40LjEuOS0uMy45LS44LjEtLjUtLjItMS0uNi0xLjFaIiBmaWxsPSIjQ0VEN0UyIi8+PHBhdGggZD0ibTExNC43IDYxLjgtMi45LS41LTIuOS0uNS0zNy4yLTYuNWMtLjQtLjEtLjkuMy0uOS44LS4xLjUuMiAxIC42IDEuMWwzNy4yIDYuNSAzLjIuNiAyLjUuNGMuNC4xLjktLjMuOS0uOC4yLS41IDAtMS0uNS0xLjFaIiBmaWxsPSIjRDVEREVBIi8+PHBhdGggZD0ibTg0LjUgODYuOS0yLS4zYy0uNC0uMS0uNy0uNi0uNi0xLjEuMS0uNS41LS45LjktLjhsMiAuM2MuNC4xLjcuNi42IDEuMS0uMS42LS41LjgtLjkuOFoiIGZpbGw9IiNDRUQ3RTIiLz48cGF0aCBkPSJtNzguNCA4NS44LTExLjctMmMtLjQtLjEtLjctLjYtLjYtMS4xLjEtLjUuNS0uOS45LS44bDExLjcgMmMuNC4xLjcuNi42IDEuMS0uMS42LS41LjktLjkuOFoiIGZpbGw9IiNFM0VBRjIiLz48cGF0aCBkPSJtMTE2LjMgNTUtOS4zLTEuNi0yLjMtLjRMNzMgNDcuNGMtLjQtLjEtLjkuMy0uOS44LS4xLjUuMiAxIC42IDEuMWwzMS43IDUuNiAyLjMuNCA5LjIgMS42Yy41LjEuOS0uMyAxLS44LjEtLjUtLjItMS0uNi0xLjFaTTEwMy4yIDMyLjNsLTI2LjMtNC42Yy0uNi0uMS0xLS43LS45LTEuMy4xLS42LjctMSAxLjMtLjlsMjYuMyA0LjZjLjYuMSAxIC43LjkgMS4zLS4xLjUtLjcgMS0xLjMuOVpNODUuOSAzNS43bC0xMC4xLTEuOGMtLjYtLjEtMS0uNy0uOS0xLjMuMS0uNi43LTEgMS4zLS45bDEwIDEuOGMuNi4xIDEgLjcuOSAxLjMtLjEuNi0uNyAxLTEuMi45Wk0xMTIuOSAyMS44bC0yLjcgMTUuNWMtLjQgMi4yIDEuMiA0LjMgMy40IDQuN2wxMy44IDIuNCIgZmlsbD0iI0Q1RERFQSIvPjxwYXRoIGQ9Ik04OS43IDk1LjVjMTIuMzE2IDAgMjIuMy05Ljk4NCAyMi4zLTIyLjNzLTkuOTg0LTIyLjMtMjIuMy0yMi4zLTIyLjMgOS45ODQtMjIuMyAyMi4zIDkuOTg0IDIyLjMgMjIuMyAyMi4zWiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik04Ny42IDc2LjhjLS4xLS40LS4xLS44LS4xLTEuMyAwLTEuNy43LTMuMiAyLjUtNC41bDEuNS0xLjFjLjktLjcgMS4zLTEuNSAxLjMtMi41IDAtMS40LTEtMi44LTMuMS0yLjgtMi4yIDAtMy4yIDEuOC0zLjIgMy41IDAgLjQgMCAuNy4xIDFsLTQtLjFjLS4xLS40LS4yLS45LS4yLTEuNCAwLTMuNCAyLjUtNi42IDcuMi02LjYgNC44IDAgNy40IDMuMSA3LjQgNi4yIDAgMi41LTEuMyA0LjItMy4xIDUuNWwtMS4zLjljLTEuMS44LTEuNyAxLjgtMS43IDN2LjJoLTMuM1ptMS43IDJjMS40IDAgMi41IDEuMSAyLjUgMi41cy0xLjEgMi41LTIuNSAyLjUtMi41LTEuMS0yLjUtMi41Yy4xLTEuMyAxLjEtMi41IDIuNS0yLjVaIiBmaWxsPSIjOTg5RkIwIi8+PHBhdGggZD0iTTEyMy4wNzkgMTA3LjgyNGMtLjg2NSAwLTEuNzMxLS4zNDctMi40MjMtMS4xMjZMMTA2LjIgOTIuMjQzbC0uNTE5LjM0NmMtNC42NzQgMy40NjMtMTAuMTI3IDUuMjgtMTUuNjY3IDUuMjgtNi42NjUgMC0xMy4zMy0yLjY4My0xOC4yNjQtNy4zNTctNS4xOTQtNC45MzQtOC4wNS0xMS42LTguMDUtMTguODcgMC0xNC40NTUgMTEuNzcyLTI2LjIyNyAyNi4yMjctMjYuMjI3IDkuODY4IDAgMTguNTI0IDUuMTkzIDIzLjE5OCAxNC4wMjIgNC41ODggOC43NDMgMy45ODIgMTguOTU3LTEuNjQ0IDI3LjE4bC0uMzQ3LjUxOSAxNC41NDIgMTQuNTQyYzEuNDcyIDEuNDcxIDEuMTI1IDIuOTQzLjg2NiAzLjcyMi0uNjkzIDEuMzg1LTIuMDc4IDIuNDI0LTMuNDYzIDIuNDI0Wk04OS45MjcgNTIuNTk5Yy0xMC41NiAwLTE5LjA0MyA4LjU3LTE5LjA0MyAxOS4wNDMgMCAxMS45NDUgOS43ODEgMTkuMTMgMTkuMzAzIDE5LjEzIDUuOCAwIDExLjA4LTIuNTk3IDE0LjgwMi03LjI3MiA0LjU4Ny01LjcxMiA1LjM2Ni0xMy40MTYgMi4xNjQtMjAuMDgxLTMuMjktNi42NjUtOS44NjgtMTAuODItMTcuMjI2LTEwLjgyWiIgZmlsbD0iIzk4OUZCMCIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjYyLjUyNCIgeTE9IjEyLjM1OSIgeDI9IjYyLjUyNCIgeTI9IjEwMy41NzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkRGRUZGIi8+PHN0b3Agb2Zmc2V0PSIuOTk2IiBzdG9wLWNvbG9yPSIjRUNGMEY1Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImQiIHgxPSI5MS44NTUiIHkxPSIxMi42NyIgeDI9IjkxLjg1NSIgeTI9IjEwNC42MzEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkRGRUZGIi8+PHN0b3Agb2Zmc2V0PSIuOTk2IiBzdG9wLWNvbG9yPSIjRUNGMEY1Ii8+PC9saW5lYXJHcmFkaWVudD48ZmlsdGVyIGlkPSJhIiB4PSIuNjgiIHk9IjMuNCIgd2lkdGg9IjEyMy43NDEiIGhlaWdodD0iMTMyLjIyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+PGZlT2Zmc2V0IGR5PSIxMSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjExIi8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMzk3NzA4IDAgMCAwIDAgMC40Nzc0OSAwIDAgMCAwIDAuNTc1IDAgMCAwIDAuMjcgMCIvPjxmZUJsZW5kIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd180OThfMjE3MjMiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk4XzIxNzIzIiByZXN1bHQ9InNoYXBlIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iYyIgeD0iMzQuMzU3IiB5PSIzLjcyOCIgd2lkdGg9IjExNS4wNDMiIGhlaWdodD0iMTMyLjk0NSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+PGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPjxmZU9mZnNldCBkeT0iMTEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMSIvPjxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjM5NzcwOCAwIDAgMCAwIDAuNDc3NDkgMCAwIDAgMCAwLjU3NSAwIDAgMCAwLjI3IDAiLz48ZmVCbGVuZCBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk4XzIxNzIzIi8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5OF8yMTcyMyIgcmVzdWx0PSJzaGFwZSIvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4="
                          />

                          <p
                            className="box-border mb-0 mt-0 text-gray-700 text-base font-medium leading-6"

                          >
                            Empty
                          </p>

                          <p
                            className="box-border mb-0 text-gray-500 text-base font-normal leading-5 mt-2"
                          >
                            You do not have any Frozen History
                          </p>

                        </div>

                      </div>

                    )}

                  </div>

                  {/* Card footer */}
                  <div>
                    <Button colorScheme="teal" variant="outline">
                      Go to my Wallet
                    </Button>
                  </div>
                </div>

              </div>

            </div>

          </Wrapper>

        )}

      </div>



    </div>
  )
}

export default DashboardMain