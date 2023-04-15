import React, { useState } from "react";

const Registration = () => {
  const [userRegiter, setUserRegiter] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegiter({ ...userRegiter, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userRegiter, id: new Date().getTime().toString() };
    console.log(records);

    setRecords([...records, newRecord]);
    console.log(records);

    setUserRegiter({ username: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="input">
          <div>
            <label htmlFor="username">User Name</label>
            <br />
            <input
              type="text"
              value={userRegiter.username}
              onChange={handleInput}
              autoComplete="off"
              name="username"
              placeholder="User Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              value={userRegiter.email}
              onChange={handleInput}
              autoComplete="off"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <br />
            <input
              type="phone"
              value={userRegiter.phone}
              onChange={handleInput}
              autoComplete="off"
              name="phone"
              placeholder="Phone"
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <br />
            <input
              type="password"
              value={userRegiter.password}
              onChange={handleInput}
              autoComplete="off"
              name="password"
              placeholder="Password"
            />
          </div>

        <button type="submit">Registration</button>
        
        </div>

      </form>

      <div>
        {records.map((curElem) => {
          return (
            <div className="showDataStyle">
              <p>{curElem.username}</p>
              <p>{curElem.email}</p>
              <p>{curElem.phone}</p>
              <p>{curElem.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Registration;
