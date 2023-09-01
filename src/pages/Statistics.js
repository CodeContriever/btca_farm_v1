import React, { useState, useEffect } from "react";
import Nav2 from "../components/Nav2";
import Footer2 from "../components/Footer2";
import Wrapper from "../components/Wrapper";
import UserGrowthChart from "../components/UserGrowthChart";

const Statistics = () => {
  const [activeButton, setActiveButton] = useState("topUsers");


  // TOP INFLUENCERS
  const [showTopInfluencers, setShowTopInfluencers] = useState(true);
  const [showAllTopInfluencers, setShowAllTopInfluencers] = useState(false);

  const toggleTopInfluencers = () => {
    setShowTopInfluencers(!showTopInfluencers);
  };

  const toggleAllTopInfluencers = () => {
    setShowAllTopInfluencers(!showAllTopInfluencers);
  };

  const updateTopInfluencers = () => {
    setShowAllTopInfluencers(true);
  };


  // TOP COUNTRIES
  const [showTopCountries, setShowTopCountries] = useState(true);
  const [showAllTopCountries, setShowAllTopCountries] = useState(false);

  const toggleTopCountries = () => {
    setShowTopCountries(!showTopCountries);
    // setShowAllTopCountries(!showAllTopCountries)
  };

  const toggleAllTopCountries = () => {
    setShowAllTopCountries(!showAllTopCountries)
  };

  const updateTopCountries = () => {
    setShowAllTopCountries(true);
  };


  // USER GROWTH
  const [userGrowthData, setUserGrowthData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'User Growth',
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], // Replace with actual user growth data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  const [showUserGrowthChart, setShowUserGrowthChart] = useState(true);

  const toggleUserGrowthChart = () => {
    setShowUserGrowthChart(!showUserGrowthChart);
  };

  const [showAllBars, setShowAllBars] = useState(false);

  const updateUserGrowthData = () => {
    setUserGrowthData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      datasets: [
        {
          label: 'User Growth',
          data: [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100], // Updated user growth data
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
  };





  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleHistoryClick = async (buttonName) => {
    setActiveButton(buttonName);
    try {
      const response = await fetch(`https://btca.afribook.world/transaction/getWalletTransactionHistory/0xA258dDa230F78C51F202e893EE22e4845bFee5fF`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        // const data = await response.json();
        // setTransactionData(data);
      } else {
        const errorData = await response.json();
        console.error('Error getting your history:', errorData);
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error('Error fetching transaction history:', error);
    }
  };

  const toggleShowAllBars = () => {
    setShowAllBars(!showAllBars);
    // setUserGrowthData(!showAllBars)
  };

  useEffect(() => {
    // Fetch and set user growth data here if needed
  }, []);

  return (
    <div>

      <header className="box-border w-full py-8 flex justify-center items-center bg-white sticky top-0 left-0 right-0 z-[10001] border-b-2 border-gray-200 my-0 shadow-[inset 0 -1px #e9eaea]">

        <div className="bg-white container mx-auto px-4">

          <Nav2 />

        </div>

      </header>

      <main className="bg-[#F9FAFB]">

        <section className="bg-[#e6ebf0] dark:bg-gray-900 pt-4">
          <div className="container mx-auto px-6">
            <div className="box-border">
              <h1 className="box-border mb-0 mt-0 text-gray-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                Statistics
              </h1>
            </div>
            <div>

              <div className="border-2 border-gray-200 bg-gray-100 flex items-center justify-between rounded-2xl">
                <button
                  className={`box-border p-3 md:p-6 transition-colors whitespace-nowrap text-base md:text-lg font-medium leading-6 cursor-pointer relative text-center ${activeButton === 'topUsers' ? 'text-blue-600' : 'text-gray-600'}`}
                  onClick={() => handleButtonClick('topUsers')}
                >
                  Top users
                </button>
                <button
                  className={`box-border p-3 md:p-6 transition-colors whitespace-nowrap text-base md:text-lg font-medium leading-6 cursor-pointer relative text-center ${activeButton === 'activeUsers' ? 'text-blue-600' : 'text-gray-600'}`}
                  onClick={() => handleHistoryClick('activeUsers')}
                >
                  Active users
                </button>
              </div>


              <div>
                {activeButton === 'topUsers' && (

                  <div>

                    {/* USERGROWTH */}
                    <div className="mt-12 bg-[#F9FAFB] shadow-lg w-full">

                      <div className="w-full flex flex-row justify-between px-4">

                        <button
                          className="box-border p-3 md:p-6 transition-colors whitespace-nowrap text-base md:text-lg font-medium leading-6 cursor-pointer relative text-center"
                          onClick={toggleUserGrowthChart}
                        >
                          USER GROWTH
                        </button>

                        <button onClick={toggleShowAllBars}>
                          {showAllBars ? 'Show Less' : 'See All'}
                        </button>

                        <button className="hidden" onClick={updateUserGrowthData}>Update User Growth Data</button>

                      </div>


                      {showUserGrowthChart && (
                        <div className="bg-[#F9FAFB shadow-lg w-full">
                          <UserGrowthChart data={userGrowthData} showAllBars={showAllBars} />
                        </div>
                      )}

                    </div>


                    {/* TOP INFLUENCERS */}
                    <div className="mt-12 bg-[#F9FAFB] shadow-lg">

                      <div className="bg-white flex flex-row justify-between px-4">

                        <button
                          className="box-border p-3 md:p-6 transition-colors whitespace-nowrap text-base md:text-lg font-medium leading-6 cursor-pointer relative text-center"
                          onClick={toggleTopInfluencers}
                        >
                          TOP INFLUENCERS
                        </button>

                        <button onClick={toggleAllTopInfluencers}>
                          {showAllTopInfluencers ? 'Show Less' : 'See All'}
                        </button>

                        <button className="hidden" onClick={updateTopInfluencers}>Update</button>

                      </div>


                      {showTopInfluencers && (
                        <div className="bg-[#F9FAFB] shadow-lg px-4 py-8">

                          <div className="flex flex-col gap-6">

                            {/* First influencer */}
                            <div className="flex flex-row justify-between">

                              <div className="flex flex-row gap-4">
                                <img
                                  className="w-11 h-11 rounded-full"
                                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                  alt="Bonnie Green avatar"
                                />

                                <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">
                                  Jayden
                                </h4>
                              </div>

                              <div>
                                <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">
                                  1234567*890
                                </p>
                              </div>

                            </div>

                            {/* Second influencer */}
                            <div className="flex flex-row justify-between">

                              <div className="flex flex-row gap-4">
                                <img
                                  className="w-11 h-11 rounded-full"
                                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                  alt="Bonnie Green avatar"
                                />

                                <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">
                                  Jayden
                                </h4>
                              </div>

                              <div>
                                <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">
                                  1234567*890
                                </p>
                              </div>

                            </div>

                            {/* Third influencer */}
                            <div className="flex flex-row justify-between">

                              <div className="flex flex-row gap-4">
                                <img
                                  className="w-11 h-11 rounded-full"
                                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                  alt="Bonnie Green avatar"
                                />

                                <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">
                                  Jayden
                                </h4>
                              </div>

                              <div>
                                <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">
                                  1234567*890
                                </p>
                              </div>

                            </div>


                          </div>

                        </div>
                      )}

                    </div>


                    {/* TOP COUNTRIES */}
                    <div className="mt-12 bg-[#F9FAFB] shadow-lg">

                      <div className="bg-white flex flex-row justify-between px-4">

                        <button
                          className="box-border p-3 md:p-6 transition-colors whitespace-nowrap text-base md:text-lg font-medium leading-6 cursor-pointer relative text-center"
                          onClick={toggleTopCountries}
                        >
                          TOP COUNTRIES
                        </button>

                        <button onClick={toggleAllTopCountries}>
                          {showAllTopCountries ? 'Show Less' : 'See All'}
                        </button>

                        <button className="hidden" onClick={updateTopCountries}>Update</button>

                      </div>


                      {showTopCountries && (
                        <div className="bg-[#F9FAFB] shadow-lg px-4 py-8">

                          <div className="flex flex-col gap-6">

                            {/* First Country*/}
                            <div className="flex flex-row justify-between">

                              {/* <div className="flex flex-row gap-4"> */}
                              <div class="inline-flex items-center">

                                <svg
                                  aria-hidden="true"
                                  className="h-8 w-8 rounded-full mr-2 leading-tight text-lg sm:text-xl md:text-2xl font-semibold"
                                  xmlns="http://www.w3.org/2000/svg"
                                  id="flag-icon-css-us"
                                  viewBox="0 0 512 512"
                                >
                                  <g fill-rule="evenodd">
                                    <g stroke-width="1pt">
                                      <path
                                        fill="#bd3d44"
                                        d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                        transform="scale(3.9385)"
                                      />
                                      <path
                                        fill="#fff"
                                        d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                        transform="scale(3.9385)"
                                      />
                                    </g>
                                    <path
                                      fill="#192f5d"
                                      d="M0 0h98.8v70H0z"
                                      transform="scale(3.9385)"
                                    />
                                    <path
                                      fill="#fff"
                                      d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                      transform="scale(3.9385)"
                                    />
                                  </g>

                                </svg>

                                <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">
                                  English (US)
                                </h4>

                              </div>
                              {/* </div> */}

                              <div>
                                <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">
                                  1234567*890
                                </p>
                              </div>

                            </div>


                            {/* Second Country*/}
                            <div className="flex flex-row justify-between">

                              <div class="inline-flex items-center">

                                <svg
                                  aria-hidden="true"
                                  class="h-8 w-8 rounded-full mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  id="flag-icon-css-de"
                                  viewBox="0 0 512 512"
                                >
                                  <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                                  <path d="M0 0h512v170.7H0z" />
                                  <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                                </svg>
                                <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">
                                  Deutsch
                                </h4>

                              </div>

                              <div>
                                <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">
                                  1234567*890
                                </p>
                              </div>

                            </div>


                            {/* Third Country*/}
                            <div className="flex flex-row justify-between">

                              <div class="inline-flex items-center">

                                <svg
                                  aria-hidden="true"
                                  class="h-8 w-8 rounded-full mr-2"
                                  xmlns="http://www.w3.org/2000/svg"
                                  id="flag-icon-css-it"
                                  viewBox="0 0 512 512"
                                >
                                  <g fill-rule="evenodd" stroke-width="1pt">
                                    <path fill="#fff" d="M0 0h512v512H0z" />
                                    <path fill="#009246" d="M0 0h170.7v512H0z" />
                                    <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                                  </g>
                                </svg>

                                <h4 className="leading-tight text-lg sm:text-xl md:text-2xl font-semibold">
                                  Italiano
                                </h4>




                              </div>


                              <div>
                                <p className="text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7">
                                  1234567*890
                                </p>
                              </div>

                            </div>


                          </div>

                        </div>
                      )}

                    </div>


                  </div>



                )}


                {activeButton === 'activeUsers' && (
                  <Wrapper>
                    <div className="box-border rounded-md bg-white shadow-lg">
                      {/* Contents for active users */}
                    </div>
                  </Wrapper>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>



      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800 border-t-2 border-gray-200">
        <div className="bg-white container mx-auto px-6">
          <Footer2 />
        </div>
      </footer>
    </div>
  );
};

export default Statistics;
