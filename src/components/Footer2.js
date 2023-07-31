import React from 'react'
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { Container } from '@chakra-ui/react';
const Footer2 = () => {
  return (
    <div className="container mx-auto px-4 py-20 bg-white">

      <Container>

        <div className="flex items-center justify-center">

          <div className='flex flex-col items-center justify-center gap-8'>

            {/* logo */}
            <div className='flex flex-col items-center justify-center gap-4'>

              <Link to={'/home'}>
                <img src="/logo.png" class="h-20 w-20" alt="BTCA Logo" />
              </Link>

              <h3 className='text-2xl text-gray-800 font-semibold'>BTC Africa Farm</h3>

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
      <div className='flex flex-col lg:flex-row justify-between items-center gap-4 text-gray-800 font-semibold  lg:px-64 mt-8'>
        <h2>Help</h2>
        <h2>FAQ</h2>
        <h2>General Terms and Conditions</h2>
        <h2>Risk Notice</h2>
        <h2>Data and Privacy policy</h2>
      </div>

    </div>
  )
}

export default Footer2