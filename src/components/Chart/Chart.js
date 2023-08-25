import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import dataJson from "../../assets/data/user-consumption.json"
import { useNavigate } from 'react-router';

function Chart(){
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    );

    const [label, setLabel] = useState([]);

    // useEffect(()=>{
    //     const usages = dataJson.data.smartMeterTelemetry;
    //     usages.forEach((usage)=>{
    //         console.log(usage);
    //         setLabel()
    //     })
    // },[])

    
    const options = {
      plugins: {
        title: {
          display: false,
        //   text: 'Chart.js Bar Chart - Stacked',
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    };
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    
    const data = {
      labels,
      datasets: [
        {
          label: 'Renewable Energy',
          data: [345,23423,4545,123,5664,6234,444],
          backgroundColor: '#F050F8',
        },
        {
          label: 'Non-renewable Energy',
          data: [345,23423,4545,123,5664,6234,444],
          backgroundColor: '#600E6B',
        }
      ],
    };

    return <Bar options={options} data={data} />

}

export default Chart;
