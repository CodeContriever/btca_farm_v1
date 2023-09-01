import React, { useState } from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Dashbar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = () => {
    setActiveButton((prevActive) =>
      prevActive === 'chevronUpIcon' ? 'chevronDownIcon' : 'chevronUpIcon'
    );
  };

  const renderIcon = () => {
    const icon = activeButton === 'chevronUpIcon' ? (
      <ChevronUpIcon w={6} h={6} className="text-gray-700" />
    ) : (
      <ChevronDownIcon w={6} h={6} className="text-gray-700" />
    );
    return icon;
  };

  return (
    <div className="">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <div>
          <h2 className="text-gray-800 text-base lg:text-xl font-medium">
            BTCA Farming Dashboard
          </h2>
        </div>
        <Spacer />
        <div className="relative cursor-pointer w-64 border border-gray-300 px-4 py-3 transition duration-300 bg-gray-100 flex items-center pr-4 focus:outline-purple">
          <button
            className="flex flex-row gap-20 text-base font-medium cursor-pointer relative text-center"
            onClick={handleButtonClick}
          >
            Farming BTCA
            {renderIcon()}
          </button>
          {activeButton === 'chevronUpIcon' && (
            <Box className="max-h-[300px]">
              <ul className="bg-white rounded-md list-none p-1 shadow-sm overflow-x-hidden absolute top-full z-10 border border-gray-300 left-0 right-0 max-h-none">
                <li className="block">
                  {/* Farming BTCA */}
                </li>
                <li className="block mt-4">
                  {/* Farming PLCUX */}
                </li>
                <li className="block mt-1">
                  {/* PLCUX */}
                </li>
                {/* Other list items */}
              </ul>
            </Box>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default Dashbar;
