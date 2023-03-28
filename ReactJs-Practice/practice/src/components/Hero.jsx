import React from "react";
import styled from "styled-components";
import hero from '../assets/hero.jpg'
// import heroDesign from '../assets/HeroDesign'

export default function Hero() {
  return (
    <Section id="home">
      <div className="background"><img src={hero} alt="" /></div>
      <div className="content">
        <div className="sale">
          {/* <img src={heroDesing} alt="" /> */}
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
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section``;
