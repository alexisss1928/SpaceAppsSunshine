import React, { useState, useRef } from 'react';
import './index.css';
import { getGraphicData } from '../../Request'
 
function Form({ setOnForm, setGraphicData, setGraphicTime }) {
  const [data, setData] = useState({
    start: '',
    end: '',
    latitude: '',
    longitude: '',
    city: '',
    resolution: 'hourly',
  });

  
  console.log(data.start, data.end)

  const refSearchInput = useRef(null);

  const handlePos = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      //check if geolocation is available
      navigator.geolocation.getCurrentPosition(function (position) {
        setData({
          ...data,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert("We can't access to your location");
    }
  }

  const handleCity = async (e) => {
    e.preventDefault();

    const searchString = refSearchInput.current.value
      .replaceAll(',', ' ')
      .replaceAll(/ +/g, '+');

    fetch(
      'https://nominatim.openstreetmap.org/?addressdetails=1&q=' +
        searchString +
        '+fe&format=json&limit=1'
    )
      .then((result) => result.json())
      .then((datar) => {
        setData({
          ...data,
          latitude: datar[0].lat,
          longitude: datar[0].lon,
        });
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const postData = async () => {
      try {
        const graphic_data = await getGraphicData(data)

        setGraphicData(graphic_data);

        setOnForm(false);

        setGraphicTime({
          start: data.start,
          end: data.end
        })
      } catch (error) {
        console.log('err', error);
      }
    };

    postData();
  }

  return (
    <div>
      <h2 className="title">You are my sunshine</h2>
      <form>
        <div>
          <label htmlFor="start">Start Date</label>
          <br />
          <input
            min="1981-01-01"
            max="2020-12-01"
            type="date"
            name="start"
            id="start"
            value={data.start}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="end">End Date</label>
          <br />
          <input
            min="1981-01-01"
            max="2020-12-01"
            type="date"
            name="end"
            id="end"
            value={data.end}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="resolution">Resolution</label>
          <br />
          <select
            type="search"
            name="resolution"
            id="resolution"
            value={data.resolution}
            onChange={handleChange}
          >
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <br />
          <input
            type="search"
            name="city"
            id="city"
            ref={refSearchInput}
            value={data.city}
            onChange={handleChange}
          />
        </div>
        <div className="coordinates">
          <button onClick={handleCity}>Get coordenates</button>
          <button onClick={handlePos}>Get current position</button>
        </div>
        <div className="getData">
          <button onClick={handleSubmit}>Get data</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
