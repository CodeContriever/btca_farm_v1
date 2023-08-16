import React from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale, //y
  Tooltip,
  Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale, //y
  Tooltip,
  Legend
)
const FarmSpeed = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'green',
        data: [4, 5, 6, 7, 9, 8, 7,],
        backgroundColor: 'rgba(0, 128, 128, 0.8)',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'lightblue',
        hoverBorderColor: 'darkblue',
      },

      {
        label: 'grey',
        data: [7, 4, 3, 4, 5, 6, 8],
        backgroundColor: 'grey',
        borderColor: 'black',
        borderWidth: 1,
        hoverBackgroundColor: 'yellow',
        hoverBorderColor: 'darkblue',
      },
    ]
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },

    },
  }
  return (
    <div className='w-[100%]'>
      <div className='p-8 text-base font-semibold '>
        <h1>Farm Speed</h1>
      </div>

      <div
        className='p-8 space-x-8'
      >
        <Bar
          data={data}
          options={options}
          className='w-full'

        >

        </Bar>
      </div>

    </div>
  )
}

export default FarmSpeed