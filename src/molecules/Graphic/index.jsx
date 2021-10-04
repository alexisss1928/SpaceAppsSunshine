import { Bar, Line, Doughnut } from 'react-chartjs-2';
import './index.css';

function GraphicBar({ graphic_data, labels, values_units }) {
  return (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            label: values_units,
            data: graphic_data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }}
      height="70%"
      width="70%"
    />
  );
}

export default GraphicBar;
