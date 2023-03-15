import React from "react";
import { Link, NavLink } from "react-router-dom"
// import Footer from "./Footer";
// import "./header.css";

const Header =() => {

  const navLinkStyles = ({isActive}) => {

    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "white",
      fontSize: "25px"
    }
  }

  return (
    // <div style={{backgroundColor: "black"}} className="header">
    //   <h1 id="topic">Header</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
    //     incidunt.
    //   </p>
    //   <Footer />
    // </div>

    <div className="header">
      {/* <h1>Movie Review</h1> */}
      {/* <h1>UseState Hook</h1> */}
      <NavLink style={navLinkStyles} to={'/app'}>Home</NavLink>
      <NavLink style={navLinkStyles} to={'/about'}>About</NavLink>
      <NavLink style={navLinkStyles} to={'/contact'}>Contact</NavLink>
      {/* <Link to={'/about'}><h1 style={{color: 'white', cursor: 'pointer'}}>About</h1></Link>
      <Link to={'/contact'}><h1 style={{color: 'white', cursor: 'pointer'}}>Contact</h1></Link> */}
    </div>
  );
}

export default Header;
