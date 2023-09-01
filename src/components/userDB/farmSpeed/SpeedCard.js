import React from 'react'

const SpeedCard = ({ children }) => {
  return (
    <div className="border-2 rounded-lg border-gray-300 dark:border-gray-600 mb-20">
      {children}
    </div>
  )
}

export default SpeedCard