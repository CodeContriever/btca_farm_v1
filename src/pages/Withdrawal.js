import React from "react";
import { useState } from 'react';

import Wrapper from "../components/Wrapper";
import Sidebar from "../components/Sidebar";
import Nav3 from "../components/Nav3";
import Footer from "../components/Footer";

import { Button } from '@chakra-ui/react';

import { useSelector } from "react-redux";
import { selectRegistrationData } from '../store/registration';



const Withdrawal = () => {
  const registrationData = useSelector(selectRegistrationData);

  const {
    accessToken,
  } = registrationData.data;

  const [activeButton, setActiveButton] = useState("payout");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  const [transactionData, setTransactionData] = useState([])
  // const [error, setError] = useState('');

  const handleHistoryClick = async (buttonName) => {
    setActiveButton(buttonName);
    try {

      const response = await fetch(`https://btca.afribook.world/transaction/getUserTransactionHistory/ea02f715-37c0-4c27-95fb-3452e6cfb1f0`,
        {
          method: 'GET',

          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },

        });

      if (response.ok) {
        const data = await response.json();
        setTransactionData(data);
      } else {
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

            {/* Payouts */}
            <div className="col-span-3 lg:col-span-2 w-[100%]">

              <div className="mb-4">

                <h1
                  className="box-border mb-0 mt-0 text-gray-800 text-base lg:text-2xl font-medium font-inter leading-6"
                >
                  Withdrawal
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
                  onClick={() => handleHistoryClick('history')}
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
                            href="/activation"
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
                                  You do not have any Transactions
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

export default Withdrawal