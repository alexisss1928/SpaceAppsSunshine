import Form from './molecules/Form';
import Graphic from './molecules/Graphic';
import { useState } from 'react';
import './App.css';

function App() {
<<<<<<< HEAD
  const [onForm, setOnForm] = useState(true);
=======
  const [ onForm, setOnForm ] = useState(true)
  const [ graphicData, setGraphicData ] = useState({})

  console.log(graphicData)
>>>>>>> 7511a77a79a4a9fc7969abf6d1c9d3b15fefe8ae

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

<<<<<<< HEAD
  return onForm ? (
    <Form setOnForm={setOnForm} />
  ) : (
    <Graphic
      graphic_data={data.datasets[0].data}
      labels={data.labels}
      values_units={data.datasets[0].label}
    />
  );
=======
  return onForm ?
    <Form setOnForm={setOnForm} setGraphicData={setGraphicData} /> :
    <GraphicLine graphic_data={data} width="500px" />
>>>>>>> 7511a77a79a4a9fc7969abf6d1c9d3b15fefe8ae
}

export default App;
