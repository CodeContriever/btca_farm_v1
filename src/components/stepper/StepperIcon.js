import React from 'react'

const StepperIcon = ({ svgCode, bgColor }) => {
  return (
    <span className={`w-8 h-8 bg-${bgColor} rounded-full ring-4 ring-white dark:ring-gray-900 dark:bg-${bgColor}`}>
      {svgCode}
    </span>
  );
}

export default StepperIcon