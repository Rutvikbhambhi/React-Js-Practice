import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Userdetails = () => {
  const { userId } = useParams();
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("useEffect Called");
    window.alert("useEffect Called");
    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

      const res = await get.json();

      setData(res);
      // console.log(res);
    }

    getData();
  }, [state]);
  return (
    <>
     <h4>{data.id}</h4>   
     <h4>{data.imageUrl}</h4>   
     <h4>{data.firstName}</h4>   
     <h4>{data.lastName}</h4>   
     <h4>{data.email}</h4>   
     <h4>{data.contactNumber}</h4>   
     <h4>{data.age}</h4>   
     <h4>{data.dob}</h4>   
    </>
  );
};

export default Userdetails;
