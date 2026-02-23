// import React from "react";
// import { Bar } from "react-chartjs-2";
// import zoomPlugin from "chartjs-plugin-zoom";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";
// import { useQuery } from "react-query";
// import { fetchLeaveStats } from "./api";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   zoomPlugin
// );

// export function LeaveStatusChart() {

//   // const { data, isLoading, isError } =
//   //   useQuery("leaveStats", fetchLeaveStats);

//   // if (isLoading) return <div>Loading...</div>;
//   // if (isError) return <div>Error loading data</div>;

//   // 🔹 Count leave by status
//   const statusCount = data.reduce((acc, item) => {
//     acc[item.status] = (acc[item.status] || 0) + 1;
//     return acc;
//   }, {});

//   const chartData = {
//     labels: Object.keys(statusCount),
//     datasets: [
//       {
//         label: "Leave Requests",
//         data: Object.values(statusCount),
//         backgroundColor: [
//           "rgba(250,192,19,0.8)",   // Pending (yellow)
//           "rgba(75,192,192,0.8)",  // Approved (green)
//           "rgba(255,99,132,0.8)"   // Rejected (red)
//         ],
//         borderRadius: 6
//       }
//     ]
//   };

//   const options = {
//     indexAxis: "y",
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false
//       },
//       title: {
//         display: true,
//         text: "Leave Requests by Status"
//       },
//       zoom: {
//         zoom: {
//           wheel: {
//             enabled: true
//           },
//           pinch: {
//             enabled: true
//           },
//           mode: "y"
//         }
//       }
//     },
//     scales: {
//       x: {
//         beginAtZero: true
//       }
//     }
//   };

//   return (
//     <div className="scroll-chart">
//       <Bar data={chartData} options={options} height={240} />
//     </div>
//   );
// }
