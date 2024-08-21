import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const RiskChart = () => {
    const data = {
        labels: ['Failed', 'Warning', 'Not Available', 'Passed'],
        datasets: [
            {
                data: [1689, 681, 36, 7253],
                backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB', '#4BC0C0'],
            },
        ],
    };

    return <Doughnut data={data} />;
};

export default RiskChart;
