import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.jpg";
import heroDesign from "../assets/heroDesign-img.png";

export default function Hero() {
  return (
    <Section id="home">
      <div className="background">
        <img src={hero} alt="" />
      </div>
      <div className="content">
        <div className="sale">
          <img src={heroDesign} alt="" />
          <h1>
            BIG SALE <span>50% OFF</span>
          </h1>
        </div>
        <div className="info">
          <h2>RETAILER</h2>
          <em>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            voluptates.
          </em>
          <button>ORDER NOW</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;

  .background {
    width: 100%;
    height: 600px;
    overflow: hidden;
    
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      filter: brightness(50%);
      transition: transform 0.25s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .content {
    position: absolute;
    top: 0;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    .sale {
      position: relative;
      left: 10%;

      img {
        height: 70vh;
      }

      h1 {
        position: absolute;
        color: white;
        top: 27vh;
        left: 15vh;
        font-size: 3.2rem;
        font-weight: 700;

        span {
          display: block;
          font-size: 3.2rem;
        }
      }
    }

    .info {
      position: absolute;
      top: 40%;
      right: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;

      h2 {
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0ch.5rem;
      }
      em {
        color: white;
        width: 60%;
        text-align: end;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }

      button {
        padding: 1rem 2rem;
        font-size: 1.1rem;
        background-color: #fc4958;
        color: white;
        font-weight: 800;
        border: none;
        border-radius: 1vh;
        cursor: pointer;
        transition: 0ms.3s ease-in-out;

        &:hover {
          background-color: #f9c74f;
        }
      }
    }
  }
`;
