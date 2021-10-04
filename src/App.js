import Form from './molecules/Form';
import Graphic from './molecules/Graphic';
import { useState } from 'react';
import './App.css';

function App() {
  const [onForm, setOnForm] = useState(true);
  const [graphicData, setGraphicData] = useState(null);
  const [graphicTime, setGraphicTime] = useState({start: '', end: ''});

  let graphic_label = 'loading'
  let graphic_data
  let graphic_labels

  if(graphicData){
    const data_key = Object.keys(graphicData['array'][0]['data'][0])

    graphic_label = graphicData['array'][0]['data'][0][data_key]['title']
    graphic_data = graphicData['array'][0]['data'][0][data_key]['values']

    graphic_labels = [graphicTime.start.replaceAll('-', '/')]

    for(let i = 0; graphic_data.length - 2 > i; i++) {
      graphic_labels.push(' ')
    }

    graphic_labels.push(graphicTime.end.replaceAll('-', '/'))
  }

  return onForm ? (
    <Form setOnForm={setOnForm} setGraphicData={setGraphicData} setGraphicTime={setGraphicTime} />
  ) : (
    <Graphic
      graphic_data={graphic_data}
      labels={graphic_labels}
      values_units={graphic_label}
    />
  );
}

export default App;
