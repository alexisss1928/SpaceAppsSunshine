import React /* , { useState } */ from 'react';
import axios from 'axios';

const Power = () => {
  /* const [data, setData] = useState({
        "Communities": [1]
    }) */
  function handleSubmit(event) {
    event.preventDefault();

    const postData = async () => {
      try {
        const { data } = await axios.get(
          'https://power.larc.nasa.gov/api/temporal/monthly/point?community=SB&format=JSON&longitude=-66.8791900&latitude=10.4880100&start=2016&end=2017&parameters=ALLSKY_SFC_SW_DWN'
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    postData();
  }
  return (
    <div>
      <button onClick={handleSubmit}>Get data</button>
    </div>
  );
};

export default Power;
