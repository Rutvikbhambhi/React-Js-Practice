// import React, { useState } from 'react';
// import axios from 'axios';
// import "./App.css";

// const KEY = "ff431b01e24bf42cc8b9d90009e86b7f";
// // const KEY = "faed4d9eb29d483a866000c901ccb680";
// // const city = "London";

// const App = () => {

//   const [city, setCity] = useState("");
//   const [data, setData] = useState();

//   const fetchData = async () => {
//   //   try {
//   //     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
//   //     // const response = await axios.get(`https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=${KEY}`)
//   //     setData(response.data);
//   //   }
//   //   catch (error) {
//   //     alert('Please Enter The City Name Correctly');
//   //   }

// const element = document.getElementsByClassName("input");
//   if(element[0].value===""){
//     return 0;
//   }
//   let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${KEY}`;

//   let response = await fetch(url);
//   let data = await response.json();
//   const lat = document.getElementsByClassName("lat")
//   const lon = document.getElementsByClassName("lon")
//   const temprature = document.getElementsByClassName("temp");
  
//   }

//   return (
//     <div className='App'>
//       <div className='title'>
//         <h1>Weather App</h1>
//       </div>
//       <div className='input-container'>
//         <input
//           type="text"
//           className='input'
//           value={city}
//           onChange={e => setCity(e.target.value)}
//           placeholder='Enter The City Name'
//         />
//         <button className='btn' onClick={fetchData}>Fetch</button>
//       </div>
//       {data && (
//         <div className='container'>
//           <h1>{data.name}, {data.sys.country}</h1>
//           <div className='weather-info'>
//               <div className='temp'>Temp : {Math.round(data.main.temp)}°C</div>
//               <div className='cordinated'>
//                   <div className='lat'>Lat - {data.coord.lat}</div>
//                   <div className='lon'>Lon - {data.coord.lon}</div>
//               </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default App


import React from 'react'
import WeatherApp from './Components/WeatherApp/WeatherApp'

const App = () => {
  return (
    <div className='App'>
      <WeatherApp />
    </div>
  )
}

export default App

