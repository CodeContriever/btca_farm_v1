import React from 'react'
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { Container } from '@chakra-ui/react';
const Footer2 = () => {
  return (
    <div className="container mx-auto px-4 py-20 bg-[#D7E1E9]">

      <Container>

        <div className="flex items-center justify-center">

          <div className='flex flex-col items-center justify-center gap-12'>

            {/* logo */}
            <div className='flex flex-col items-center justify-center gap-6'>
              <div className=''>
                <Link to={'/home'}>
                  <img src="/farmLogo.png" class="w-32 h-32 md:w-48 md:h-48" alt="BTCA Logo" />
                </Link>
              </div>


              <h3 className='text-2xl lg:text-5xl text-gray-800 font-extrabold'>BTC Africa Farm</h3>


            </div>

            {/* Socials */}
            <div className='text-gray-800 flex flex-row gap-8'>
              <FiFacebook className='h-6 w-6' />
              < FiTwitter className='h-6 w-6' />
              < FiInstagram className='h-6 w-6' />
            </div>



          </div>

        </div>

      </Container>

      {/* Footer Items */}
      <div className='flex flex-col lg:flex-row justify-between items-center gap-4 text-gray-800 font-semibold lg:px-64 mt-8'>
        <Link>Help</Link>
        <Link>FAQ</Link>
        <Link>General Terms and Conditions</Link>
        <Link>Risk Notice</Link>
        <Link>Data and Privacy policy</Link>
      </div>

    </div>
  )
}

export default Footer2