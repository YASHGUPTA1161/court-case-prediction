import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const InsightsChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Civil', 'Criminal', 'Family', 'Corporate'],
        datasets: [
          {
            label: 'Case Outcomes by Type',
            data: [65, 78, 82, 74],
            backgroundColor: [
              'rgba(79, 70, 229, 0.2)',
              'rgba(79, 70, 229, 0.4)',
              'rgba(79, 70, 229, 0.6)',
              'rgba(79, 70, 229, 0.8)',
            ],
            borderColor: [
              'rgba(79, 70, 229, 1)',
              'rgba(79, 70, 229, 1)',
              'rgba(79, 70, 229, 1)',
              'rgba(79, 70, 229, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Prediction Accuracy by Case Type (%)',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Analysis</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default InsightsChart;