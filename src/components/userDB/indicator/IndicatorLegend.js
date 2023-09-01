import React from 'react'

const IndicatorLegend = ({ color, label }) => {
  return (
    <div className="box-border gap-2 flex items-center mt-2">
      <div className={`box-border rounded-full h-2 w-2 mr-2 bg-${color}`} />
      <p className="box-border mb-0 mt-0 font-inter font-semibold uppercase text-gray-800 text-base leading-6">
        {label}:
      </p>
      <p className="box-border mb-0 mt-0 text-gray-800 font-inter text-base leading-6 font-medium">
        {label === 'green' ? 'Price is Good' : `${label} freezing`}
      </p>
    </div>
  )
}

export default IndicatorLegend