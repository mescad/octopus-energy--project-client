import "./Chart.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Chart, Line } from 'react-chartjs-2';


function Charts(){
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Filler,
      Legend
    );
    
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    };
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    
    const data = {
      labels,
      datasets: [
        {
          fill: true,
          label: 'Dataset 2',
          data: [570, 600, 250, 800, 3242, 120, 500],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            fill: true,
            label: 'Dataset 2',
            data:  [560, 600, 250, 800, 5000, 500, 3000],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(70, 152, 128, 0.5)',
          }
      ],
    };

    return (<Line options={options} data={data} />)
}

export default Charts;
