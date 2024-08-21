import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const CloudChart = () => {
    const data = {
        labels: ['Connected', 'Not Connected'],
        datasets: [
            {
                data: [2, 2],
                backgroundColor: ['#36A2EB', '#FF6384'],
            },
        ],
    };

    return <Pie data={data} />;
};

export default CloudChart;