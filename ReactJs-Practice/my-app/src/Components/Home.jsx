import React from 'react'
import { useEffect, useState } from 'react';

const Home = () => {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords${state}&idStarts=1001`)

  //     const res = await get.json();

  //     setData(res)
  //     console.log(res);
  //   }
  //   getData();

  //   document.title = `(${state}) Online`;
  //   // window.alert('useEffect Called');
  // }, [state]);

  return (
    <div>
      <button onClick={() => setState(state + 2)}>Click Me {state}</button>
      {
        data.map((element, index) => {
          return (
            <div className='key' key={index}>
              <h3>{element.firstName}</h3>
              <h3>{element.lastName}</h3>
              <h3>{element.email}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home