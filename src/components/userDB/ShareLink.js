import React from 'react'
import { useState } from 'react';

import { Button } from '@chakra-ui/react';
import { Switch, } from '@chakra-ui/react';
import { FormControl, } from '@chakra-ui/react';

const ShareLink = () => {
  const [linkGenerated, setLinkGenerated] = useState(false);
  const handleClick = () => {
    // Logic to generate the link
    setLinkGenerated(true);
  };

  return (
    <div
          className=""
        >
          {/* Info field */}
          <div
            className="box-border border border-gray-300 rounded-md p-3 bg-gray-100 flex"
          >

            <div
              className=" flex flex-wrap"
            >
              {' '}

              <Button
                onClick={handleClick}
                variant='link'
                colorScheme="#2b2d33"
                disabled={linkGenerated}
              >
                Show Referral link
              </Button>

              {linkGenerated && (
                <p
                  className="box-border mb-0 mt-0 font-inter text-base leading-6 text-gray-700 break-all"
                >
                  Generated Link: <a href="/btca">example.com</a>
                </p>
              )
              }
            </div>

            {/* Switcher */}
            <div
              className="box-border flex items-center flex-shrink-0 ml-auto mr-0"
            >
              <FormControl display="flex" alignItems="center">
                <Switch id="email-alerts" />
              </FormControl>{' '}
            </div>

          </div>

          {/* terms and conditions */}
          <div
            className="box-border underline text-gray-500 font-inter text-xs font-normal leading-6 mt-2"
          >
            <a
              href="/terms"
              target="_blank"
              className='box-border no-underline text-current'
            >
              Terms and conditions of sale and distribution
            </a>
          </div>

        </div>
  )
}

export default ShareLink