import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

const KEY = "ff431b01e24bf42cc8b9d90009e86b7f";
// const KEY = "faed4d9eb29d483a866000c901ccb680";
// const city = "London";

const App = () => {

  const [city, setCity] = useState("");
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
      // const response = await axios.get(`https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=${KEY}`)
      setData(response.data);
    }
    catch (error) {
      alert('Please Enter The City Name Correctly');
    }
  }

  return (
    <div className='App'>
      <div className='title'>
        <h1>Weather App</h1>
      </div>
      <div className='input-container'>
        <input
          type="text"
          className='input'
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder='Enter The City Name'
        />
        <button className='btn' onClick={fetchData}>Fetch</button>
      </div>
      {data && (
        <div className='container'>
          <h1>{data.name}, {data.sys.country}</h1>
          <div className='weather-info'>
              <div className='temp'>Temp : {Math.round(data.main.temp)}°C</div>
              <div className='cordinated'>
                  <div>Lat - {data.coord.lat}</div>
                  <div>Lon - {data.coord.lon}</div>
              </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
