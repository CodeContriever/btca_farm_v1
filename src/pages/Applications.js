import React from "react";

import Sidebar from "../components/Sidebar";
import Nav3 from "../components/Nav3";
import Footer2 from "../components/Footer2";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";

import { Box, Card, CardBody, CardFooter, CardHeader, Image } from "@chakra-ui/react";




const Applications = () => {

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

              {/* Sidebar */}
              <Sidebar />
            </div>

            <div className="col-span-3 lg:col-span-2 w-[100%]">

              <Box>
                <Container
                  className="box-border flex flex-col flex-grow"
                >
                  {" "}
                  <div className="box-border" >
                    <div
                      className="box-border gap-12 grid grid-cols-[1fr,max-content] mb-6"
                    >
                      {/* Heading */}
                      <Wrapper className="box-border">
                        <h1
                          className="box-border mb-0 mt-0 text-gray-800 text-base lg:text-2xl font-medium font-inter leading-6"
                        >
                          Applications
                        </h1>{" "}
                        <p
                          className="box-border mb-0 text-gray-600 text-base leading-5 break-words mt-2 font-inter"
                        >
                          BTCA Technologies
                        </p>
                      </Wrapper>{" "}
                    </div>{" "}
                  </div>

                  <Wrapper
                    className="box-border mt-6 rounded-md bg-white shadow-xl"
                  >
                    <Box
                      className="box-border p-[24px]"
                    >
                      <p
                        className="box-border mb-0 mt-0 text-gray-600 text-base leading-5 break-words font-inter"
                      >
                        {
                          "Download your BTCA Wallet and BTCA Farm to make transactions and minting PLCUX!"
                        }
                      </p>{" "}

                      {/* App cards */}
                      <Box
                        className="box-border mt-10 flex flex-col lg:grid grid-cols-2 gap-x-8 "
                      >
                        {/* Card 1 */}
                        <Card
                          className="px-0.5 lg:px-4 shadow-none"
                        >
                          <CardHeader
                            className="box-border gap-4 grid grid-cols-[auto,1fr]"
                          >
                            <Image src='/logo.png' alt='BTCA_FARM LOGO' className="border-0 box-content max-w-full align-middle h-14 w-14" />
                            <Box>
                              <h6
                                className="box-border mb-0 mt-0 text-[#2b2d33] text-lg font-bold leading-6 break-words flex items-center uppercase font-inter"
                              >
                                {"BTCA Wallet"}
                                <span
                                  className="box-border outline-none border border-[#55575c] rounded-[2px] px-2 py-2 text-[#2b2d33] text-xs font-medium leading-4 ml-2"
                                >
                                  4+
                                </span>
                              </h6>{" "}
                              <p
                                className="box-border mb-0 font-inter text-[#0078d2] text-base leading-5 break-words mt-2"
                              >
                                PLATINEXLLC
                              </p>
                            </Box>

                          </CardHeader>

                          <CardBody
                            className="box-border border-t border-[#e9eaea] gap-8 pt-6 pb-2 flex overflow-y-auto mt-6">

                            {/* mockup 1 */}
                            <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                              <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                              <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                              <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                              <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                              <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                              </div>
                            </div>

                            {/* mockup 2 */}
                            <div class="relative mx-auto border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                              <div class="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                              <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                              <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                              <div class="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                              <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                              </div>
                            </div>

                            {/* mockup 3 */}
                            <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                              <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                              <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                              <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                              <div class="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                              <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                              </div>
                            </div>

                          </CardBody>

                          <CardFooter
                            className="box-border border-t border-[#e9eaea] grid mt-2 pt-6 gap-6 grid-cols-2"
                          >
                            {/* app store buttons */}


                          </CardFooter>

                          <div className="hidden lg:flex py-4">

                            <a href="/google" className="text-blue font-inter text-base font-inter">
                              <span >Download Android APK</span>
                            </a>

                          </div>

                        </Card>

                        {/* Card 2 */}
                        <Card
                          className="px-4"
                        >
                          <CardHeader
                            className="box-border gap-4 grid grid-cols-[auto,1fr]"
                          >
                            <Image src='/logo.png' alt='BTCA_FARM LOGO' className="border-0 box-content max-w-full align-middle h-14 w-14" />
                            <Box>
                              <h6
                                className="box-border mb-0 mt-0 text-[#2b2d33] text-lg font-inter font-bold leading-6 break-words flex items-center uppercase"
                              >
                                {"BTCA FARM"}
                                <span
                                  className="box-border outline-none border border-[#55575c] rounded-[2px] px-2 py-2 text-[#2b2d33] text-xs font-medium font-inter leading-4 ml-2"
                                >
                                  4+
                                </span>
                              </h6>{" "}
                              <p
                                className="box-border mb-0 font-inter text-[#0078d2] text-base leading-5 break-words mt-2"
                              >
                                PLATINEXLLC
                              </p>
                            </Box>

                          </CardHeader>

                          <CardBody
                            className="box-border border-t border-[#e9eaea] gap-8 pt-6 pb-2 flex overflow-y-auto mt-6">

                            {/* mockup 1 */}
                            <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                              <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                              <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                              <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                              <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                              <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                              </div>
                            </div>

                            {/* mockup 2 */}
                            <div class="relative mx-auto border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                              <div class="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                              <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                              <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                              <div class="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                              <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                              </div>
                            </div>

                            {/* mockup 3 */}
                            <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                              <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                              <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                              <div class="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                              <div class="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                              <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
                                <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
                              </div>
                            </div>

                          </CardBody>

                          <CardFooter
                            className="box-border border-t border-[#e9eaea] grid mt-2 pt-6 gap-6 grid-cols-2"
                          >
                            {/* app store buttons */}


                          </CardFooter>

                          <div className="hidden lg:flex py-4">
                            <a href="/google" className="text-blue font-inter text-base">
                              <span >Download Android APK</span>
                            </a>
                          </div>

                        </Card>

                      </Box>
                    </Box>
                  </Wrapper>
                </Container>
              </Box>
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

          <Footer2 />

        </div>

      </footer >



    </div>

  )
}

export default Applications