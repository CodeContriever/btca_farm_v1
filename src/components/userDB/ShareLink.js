import React, { useState } from 'react';
import { Button, Switch, FormControl } from '@chakra-ui/react';

const ShareLink = () => {
  const [linkGenerated, setLinkGenerated] = useState(false);

  const handleClick = () => {
    // Logic to generate the link
    setLinkGenerated(true);
  };

  return (
    <div className="">
      {/* Info field */}
      <div className="border border-gray-300 rounded-md p-3 bg-gray-100 flex">
        <div className="flex flex-wrap">
          <Button
            onClick={handleClick}
            variant="link"
            colorScheme="gray"
            disabled={linkGenerated}
          >
            Show Referral link
          </Button>

          {linkGenerated && (
            <p className="mb-0 mt-0 font-inter text-base leading-6 text-gray-700 break-all">
              Generated Link: <a href="/btca">example.com</a>
            </p>
          )}
        </div>

        {/* Switcher */}
        <div className="flex items-center flex-shrink-0 ml-auto mr-0">
          <FormControl display="flex" alignItems="center">
            <Switch id="email-alerts" />
          </FormControl>
        </div>
      </div>

      {/* Terms and conditions */}
      <div className="underline text-gray-500 text-xs font-normal leading-6 mt-2">
        <a href="/terms" target="_blank" className="no-underline">
          Terms and conditions of sale and distribution
        </a>
      </div>
    </div>
  );
};

export default ShareLink;
