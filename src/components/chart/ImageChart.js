import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ImageRiskAssessmentChart = () => {
    const data = {
        labels: ['Critical', 'High', 'Medium', 'Low'],
        datasets: [
            {
                label: 'Vulnerabilities',
                data: [9, 150, 1310, 1],
                backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB', '#4BC0C0'],
            },
        ],
    };

    return <Bar data={data} />;
};

export default ImageRiskAssessmentChart;
