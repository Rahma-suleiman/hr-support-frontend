import React from 'react'

export const Charts = () => {
  return (
    <div>Charts</div>
  )
}


// import React, { useRef } from "react";
// import { Bar } from "react-chartjs-2";
// import '../chart.css';
// import zoomPlugin from 'chartjs-plugin-zoom';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
// } from "chart.js";
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     zoomPlugin
// );
// export function Graph1() {
//     const chartRef = useRef(null);
 
    
//     const data = {
//         labels: ['Waliofanya Vizuri', 'Wanaohitaji Msaad'],
//         datasets: [
//             {
//                 type: 'bar',
//                 label: 'Bar Dataset',
//                 data: [10, 20, 30, 40,10,5,3,15,35],
//                 backgroundColor: [
//                     'rgba(242, 121, 53, 1)',
//                     'rgba(119, 63, 147, 1)',
//                     'rgba(110, 110, 110, 1)',
//                     'rgba(67, 110, 175, 1)',
//                     'rgba(239, 187, 67, 1)',
//                     'rgba(93, 147, 191, 1)',
//                     'rgba(237, 139, 70, 1)',
//                     'rgba(139, 185, 73, 1)',
//                     'rgba(120, 64, 147, 1)',
//                 ]
//             },
//             {
//                 type: 'bar',
//                 label: 'Bar2 Dataset',
//                 data: [2,12,13,15,36,23,54,21,31],
//                 backgroundColor: [
//                     'rgba(110, 110, 110, 1)',
//                     'rgba(119, 63, 147, 1)',
//                     'rgba(242, 121, 53, 1)',
//                     'rgba(239, 187, 67, 1)',
//                     'rgba(67, 110, 175, 1)',
//                     'rgba(237, 139, 70, 1)',
//                     'rgba(93, 147, 191, 1)',
//                     'rgba(120, 64, 147, 1)',
//                     'rgba(139, 185, 73, 1)',
//                 ]
//             },
//         ],
//     };    
    
//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'bottom',
//             },
//             title: {
//                 display: true,
//                 text: 'Mixed Bar Chart Example',
//             },
//             zoom: {
//                 pan: {
//                     enabled: true,
//                     mode: 'x',
//                 },
//                 zoom: {
//                     wheel: {
//                         enabled: true,
//                     },
//                     mode: 'x',
//                 },
//             },
//         },
//     };
//     return (
//         <div className="scroll-chart">
//             <Bar ref={chartRef} data={data} options={options} height={260} />
//         </div>
//     );
// }