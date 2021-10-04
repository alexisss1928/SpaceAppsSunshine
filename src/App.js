import Form from './molecules/Form';
import Graphic from './molecules/Graphic';
import { useState } from 'react';
import './App.css';

function App() {
  const [onForm, setOnForm] = useState(true);
  const [graphicData, setGraphicData] = useState({});

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'My First dataset',
        data: [0, 10, 5, 2, 20, 30, 45],
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  return onForm ? (
    <Form setOnForm={setOnForm} setGraphicData={setGraphicData} />
  ) : (
    <Graphic
      graphic_data={data.datasets[0].data}
      labels={data.labels}
      values_units={data.datasets[0].label}
    />
  );
}

export default App;
