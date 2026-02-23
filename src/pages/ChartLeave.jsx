import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

export const ChartLeave = () => {
    const [leaveData, setLeaveData] = useState([])

    const getLeaveRequests = async () => {
        const res = await axios.get("http://localhost:8087/api/v2/hrsupport/leave")
        setLeaveData(res.data)
        console.log(leaveData)
    }
    useEffect(() => {
        getLeaveRequests()
    }, [])

    // const data = {
    //     labels: leaveData.map((item) => item)
    // }
    //   const { data: schStatsData, isLoading, isError } = 
    // useQuery(['schStatsData',council,month,year], ()=>fetchSchoolStats(council,month,year),{enabled:!!council && !!month && !!year})

    // if(isLoading) return <div>Loading</div>
    // if(isError) return <div>Error Loading data</div>
    // const data = {
    //     labels: schStatsData?.map((item) => item.shule),
    //     datasets: [
    //         {
    //             label: "Kusoma",
    //             backgroundColor: "rgba(253,135,135,0.8)",
    //             data: schStatsData?.map((item) => item.reading),
    //             borderRadius: 5
    //         },
    //         {
    //             label: 'Kuhesabu',
    //             backgroundColor: "rgba(250,192,19,0.8)",
    //             data: schStatsData?.map((item) => item.math),
    //             borderRadius: 5
    //         }
    //     ]
    // };
    const options = {
        indexAxis: 'y',
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                },
            },
            y: {
                title: {
                    display: true,
                },
                beginAtZero: true,
            },
        },
    };
    return (
        <>
            <div>ChartLeave</div>
            <div className="scroll-chart">
                <Bar data={data} options={options}
                    height={260}
                />
            </div >
        </>

    )
}
