import React from 'react'
import { Box,} from '@chakra-ui/react';

const Main_Three = () => {
  return (
    <div class="">

      {/* First Gridbox */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {/*  1 */}
        <div
          class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64"
        >


        </div>

        {/* 2 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
        >

        </div>

        {/* 3 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
        >

        </div>

        {/* 4 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
        >

        </div>

      </div>

      {/* ########Indicator######## */}
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
      >
        <Box
                className="box-border border-2 border-gray-300 rounded-md p-9 flex flex-col lg:flex-row items-center justify-center "
              >
                {/* indicator_Guage */}
                <div
                  className="text-center"
                >
                  <svg
                    height="130"
                    width="232"
                    fill="none"
                    viewBox="0 0 232 130"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ boxSizing: "border-box" }}
                  >
                    <circle
                      cx="116"
                      cy="115"
                      fill="#E9EAEA"
                      r="10"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <path
                      clipRule="evenodd"
                      d="m118.693 120.489 63.782-35.106-67.895 23.911a6.018 6.018 0 0 0-1.265.446l-.157.055.01.018a6 6 0 1 0 5.516 10.657l.009.019Z"
                      fill="#55575C"
                      fillRule="evenodd"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <circle
                      cx="116"
                      cy="115"
                      fill="#fff"
                      r="2"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <path
                      d="M10.036 118.775A106 106 0 1 1 222 115.889"
                      stroke="#E9EAEA"
                      strokeLinecap="round"
                      strokeWidth="20"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <path
                      d="M222 116a106.003 106.003 0 0 0-54.934-92.888"
                      stroke="#1DC08A"
                      strokeLinecap="round"
                      strokeWidth="16"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <path
                      d="M168.999 24.201A105.997 105.997 0 0 0 25.045 61.565a106 106 0 0 0-15.022 52.215"
                      stroke="#E0CA08"
                      strokeLinecap="round"
                      strokeWidth="16"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <path
                      d="M63 24.201a106 106 0 0 0-52.977 94.019"
                      stroke="#FF6A69"
                      strokeLinecap="round"
                      strokeWidth="16"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                    <path
                      d="M225 115a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      fill="#fff"
                      style={{ boxSizing: "border-box" }}
                    />
                  </svg>
                </div>{" "}

                {/* Indicator-guage_Legend */}
                <Box
                  className="box-border m-0"
                >
                  {/* Green */}
                  <Box
                    className="box-border gap-2 flex items-center"
                  >
                    <div
                      className="box-border rounded-full h-2 w-2 mr-2 bg-green-500"
                    />{" "}
                    <p
                      className="box-border mb-0 mt-0 font-inter font-semibold uppercase text-gray-800 text-base lg:text-xl leading-6"
                    >
                      Green:
                    </p>{" "}
                    <p
                      className="box-border mb-0 mt-0 text-gray-800 font-inter text-base lg:text-xl leading-6 font-medium"
                    >
                      Price is Good
                    </p>
                  </Box>

                  {/* Yellow */}
                  <Box
                    className="box-border gap-[8px] flex items-center mt-[8px]"
                  >
                    <div
                      className="box-border rounded-full h-[8px] w-[8px] mr-[8px] bg-yellow-400"
                    />{" "}
                    <p
                      className="box-border mb-0 mt-0 font-inter font-semibold uppercase text-gray-800 text-sm leading-6"
                    >
                      Yellow:
                    </p>{" "}
                    <p
                      className="box-border mb-0 mt-0 text-gray-800 font-inter text-sm leading-6 font-medium"
                    >
                      50% freezing
                    </p>
                  </Box>

                  {/* Red */}
                  <Box
                    className="box-border gap-[8px] flex items-center mt-[8px]"
                  >
                    <div
                      className="box-border rounded-full h-[8px] w-[8px] mr-[8px] bg-red-500"
                    />{" "}
                    <p
                      className="box-border mb-0 mt-0 font-inter font-semibold uppercase text-gray-800 text-sm leading-6"
                    >
                      Red:
                    </p>{" "}
                    <p
                      className="box-border mb-0 mt-0 text-gray-800 font-inter text-sm leading-6 font-medium"
                    >
                      100% freezing
                    </p>
                  </Box>

                </Box>
              </Box>
      </div>

      {/* Second Grid box */}
      <div class="grid grid-cols-2 gap-4 mb-4">

        {/* 1 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        >

          {/* Heading */}
          <h2>Market Price</h2>

          <div
            className="flex flex-row justify-between"
          >

            <div className='flex flex-row gap-4'>
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

            <p
              className="box-border mb-0 mt-0 text-gray-500 font-inter text-base lg:text-xl font-medium leading-6 break-words whitespace-nowrap"
            >
              USDT
            </p>

          </div>

        </div>


        {/* 2 */}
         
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        >

          {/* Heading */}
          <h2>Community Price</h2>

          <div
            className="flex flex-row justify-between"
          >

            <div className='flex flex-row gap-4'>
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

            <p
              className="box-border mb-0 mt-0 text-gray-500 font-inter text-base lg:text-xl font-medium leading-6 break-words whitespace-nowrap"
            >
              USDT
            </p>

          </div>
          
        </div>

      </div>

      {/* ######## */}
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
      >

      </div>


      {/* Third Grid box */}
      <div class="grid grid-cols-2 gap-4">

        {/* 1 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        >

        </div>

        {/* 2 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        >

        </div>

        {/* 3 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        >

        </div>

        {/* 4 */}
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        >

        </div>

      </div>

    </div>
  )
}

export default Main_Three