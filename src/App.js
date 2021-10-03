import Graphic, { GraphicDoughnut, GraphicLine } from './molecules/Graphic'

function App() {
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

  return <GraphicLine graphic_data={data} width="500px" />
}

export default App