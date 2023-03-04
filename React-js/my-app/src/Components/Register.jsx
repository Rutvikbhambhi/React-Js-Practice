import React, { Component } from "react";
import styled from "styled-components";

export default function Register(props) {
  // let btnStyle;
  // btnStyle = {
  //   backgroundColor: "green",
  //   color: "white",
  // };
  // let btnText,passBoxType = "Hide Password";
  let btnText,passBoxType;
  let btnClasses = ["btn", "m-1"]
  if (props.showPass === true) {
    // btnStyle.backgroundColor = "red";
    btnText = "Hide Password";
    passBoxType = "text";
    btnClasses.push("btn-danger");
} else {
    btnText = "Show Password"
    passBoxType = "password";
    btnClasses.push("btn-success");
  }
  // console.log(btnClasses);

  // Style Component 
  const StyledButton = styled.button`
    display: ${(props) => (props.flag ? "inline-block" : "block")};
    padding: 10px 5px;
    background-color: ${(props) => props.bgcolor};
    border: none;
    color: white;
    width: ${(props) => (props.flag === "1" ? "45%" : "100%")};
    margin: 5px;
    border-radius: 5px;
  `;
  // const StyledDiv = styled.div`
  //   background-color: red;
  //   width: 400px;
  //   height: 300px;
  // `;

  const StyleRegisterContainer = styled.section`
    width: 500px;
    &:hover {
      box-shadow: 0px 0px 5px grey;
    }
    @media (min-width: 0px) and (max-width: 600px){
      width: 300px;
    }
  `;

  return (
    <StyleRegisterContainer className="container card p-5 mt-2 register-container">
      <h1 className="text-center">Registation From</h1>
      <form onSubmit={props.submit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type={passBoxType}
            name="password"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Register
        </button>
        {/* <button type="button" className="btn" onClick={props.click} style={btnStyle}> */}
        <button type="button" className={btnClasses.join(" ")} onClick={props.click}>
          {btnText}
        </button>
        <StyledButton type="button" flag="1" bgcolor="orange">Login</StyledButton>
        <StyledButton type="button" flag="1" bgcolor="red">Login with Google</StyledButton>
        <StyledButton flag="0" bgcolor="blue">Login with Facebook</StyledButton>
        {/* <StyledButton type="button">T and C</StyledButton> */}
        {/* <StyledDiv></StyledDiv> */}
      </form>s
    </StyleRegisterContainer>
  );
}
