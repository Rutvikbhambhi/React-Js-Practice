import React from "react";
import styled from "styled-components";
import foodYummy from "../assets/food-Yammy.png";

export default function Navbar() {
  return (
    <Nav>
      <div className="brand">
        <img src={foodYummy} alt="" />
        <div className="toggle"></div>
      </div>
      <ul className="links">
        <li>
          <a href="#home" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#services">Our Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#newsletter">Newsletter</a>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 0 4vw;
  .brand {
    img {
      ${"" /* margin-top: 1rem; */}
      cursor: pointer;
      width: 50%;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    ${"" /* justify-content: center; */}
    gap: 2rem;
    ul li {
    }
    li a {
      color: #fc4958;
      font-weight: 600;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      transition: 0ms.3s ease-in-out;
      &:hover {
        color: #f9c74f;
      }
    }
    .active {
      color: #f9c74f;
    }
  }
`;
