import React from 'react';

const FeatureSection = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-20">

      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-64 gap-y-24 ">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>

      </div>

    </div>
  );
};

const FeatureItem = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <h3 className="mb-2 text-xl sm:text-2xl md:text-3xl font-semibold text-purple-600 dark:text-white">
        {title}
      </h3>
      <div className="flex flex-col md:flex-row gap-4">
        <p className="order-2 md:order-1 text-gray-500 text-base sm:text-lg md:text-xl lg:text-md font-medium leading-7 dark:text-gray-400 max-w-sm">
          {description}
        </p>
        <div>
          <svg className="order-1 md:order-2 w-5 h-5 text-blue-600 md:w-6 md:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: 'Max minting',
    description: 'Monthly mining over the course of 12 months. The process is entirely on the BTCA blockchain.',
    icon: ''
  },
  {
    title: 'Operating term',
    description: 'Smart Contracts allow you to mine for a period of one year, providing uninterrupted mining during the entire operating term.',
    icon: ''
  },
  {
    title: 'Fast transactions',
    description: 'All mining transactions are available in the app. You can easily spend, transfer and freeze (mine) more coin again.',
    icon: ''
  },
  {
    title: 'Safety & security',
    description: 'The user is the sole owner of all access keys to his wallet and all the coins in it.',
    icon: ''
  }
];

export default FeatureSection;
