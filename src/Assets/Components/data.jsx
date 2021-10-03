import React, { useState, useRef } from 'react';
import axios from 'axios';
import './data.css';

const Power = () => {
  const [data, setData] = useState({
    start: '',
    end: '',
    latitude: '',
    longitude: '',
    resolution: 'hourly',
  });
  const refSearchInput = useRef(null);

  console.log(data);

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
  };

  const handleCity = async (e) => {
    e.preventDefault();

    const searchString = refSearchInput.current.value
      .replaceAll(',', ' ')
      .replaceAll(/ +/g, '+');

    try {
      const { data } = await axios.get(
        'https://nominatim.openstreetmap.org/?addressdetails=1&q=' +
          searchString +
          '+fe&format=json&limit=1'
      );
      setData({
        ...data,
        latitude: data[0].lat,
        longitude: data[0].lon,
      });
    } catch (error) {
      console.log(error);
    }

    /* fetch(
      'https://nominatim.openstreetmap.org/?addressdetails=1&q=' +
        searchString +
        '+fe&format=json&limit=1'
    )
      .then((result) => result.json())
      .then((data) => {
        setData({
          ...data,
          latitude: data[0].lat,
          longitude: data[0].lon,
        });
      }); */
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
        const { dataSunshine } = await axios.get(
          `https://add8-181-26-3-11.ngrok.io/api/nasa/?start=${data.start.replaceAll(
            '-',
            ''
          )}&end=${data.end.replaceAll('-', '')}&latitude=${
            data.latitude
          }&longitude=${data.longitude}&resolution=${data.resolution}`
        );
        console.log(dataSunshine);
      } catch (error) {
        console.log('err', error);
      }
    };
    postData();
  }
  return (
    <div>
      <form>
        <h2>Sign in to your account</h2>
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
            value={data.city}
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
          />
          <button onClick={handleCity}>Get coordenates</button>
        </div>
        <div>
          <button onClick={handlePos}>Get current position</button>
        </div>
        <div>
          <button onClick={handleSubmit}>Get data</button>
        </div>
      </form>
    </div>
  );
};

export default Power;
