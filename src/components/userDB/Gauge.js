import React from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const Gauge = () => {
  const data = {
    labels: ['Red', 'Yellow', 'Green'],
    datasets: [
      {
        label: 'indicator',
        data: [18, 12, 6],
        backgroundColor: ['red', 'yellow', 'green'],
        needleValue: 30,
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
        cutout: '80%',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        yAlign: 'bottom',
        displayColors: false,
        callbacks: {
          label: function (tooltipItem, data, value) {
            const tracker = tooltipItem.dataset.needleValue;
            return `Tracker Score: ${tracker}%`;
          },
        },
      },
    },
  };

  const gaugeNeedle = {
    id: 'gaugeNeedle',
    afterDatasetDraw(chart, ) {
      const { ctx,  data, chartArea: { width, height } } = chart;
      ctx.save();
      const needleValue = data.datasets[0].needleValue;
      const dataTotal = data.datasets[0].data.reduce((a, b) => a + b, 0);
      const angle = Math.PI + (1 / dataTotal * needleValue * 2 * Math.PI);
      const cx = width / 2;
      const cy = chart._metasets[0].data[0].y;

      // needle
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -2);
      ctx.lineTo(height - (ctx.canvas.offsetTop - 10), 0);
      ctx.lineTo(0, 2);
      ctx.moveTo(0, 2);
      ctx.fillStyle = '#444';
      ctx.fill();

      // needle dot
      ctx.translate(-cx, -cy);
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, 10);
      ctx.fill();
      ctx.restore();

      ctx.font = '50px Helvetica';
      ctx.fillStyle = '#444';
      ctx.fillText(needleValue + '%', cx, cy + 50);
      ctx.textAlign = 'center';
      ctx.restore();
    },
  };

  const plugins = [gaugeNeedle];

  return (
    <div>
      <div className='w-[100%] p-8 space-x-8'>
        <Doughnut data={data} options={options} plugins={plugins}></Doughnut>
      </div>
    </div>
  );
};

export default Gauge;
