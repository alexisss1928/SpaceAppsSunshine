import Form from './molecules/Form';
import Graphic, { GraphicDoughnut, GraphicLine } from './molecules/Graphic'
import { useState } from 'react'

function App() {
  const [ onForm, setOnForm ] = useState(true)

  const data = {
    labels: ['January',
    'February',
    'March',
    'April',
    'May',
    'June'],
    datasets: [{
      label: 'My First dataset',
      data: [0, 10, 5, 2, 20, 30, 45],
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)'
    }]
  }

  return onForm ?
    <Form setOnForm={setOnForm} /> :
    <GraphicLine graphic_data={data} width="500px" />
}

export default App