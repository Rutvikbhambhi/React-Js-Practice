import React from "react";
import styled from "styled-components";
// import Services1 from "../assets/Services1"
// import Services2 from "../assets/Services2"
// import Services3 from "../assets/Services3"

export default function Services() {
  return (
    <Section id="services">
        <div className="title">
            <h1 className="yellow">What we do ?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus rem
                pariatur iste consequatur, esse mollitia eveniet vel porro veritatis
                nam?
            </p>
        </div>
        <div className="services">
            <div className="service1">
                {/* <img src={Services1} alt="" /> */}
                <p>Lorem ipsum dolor sit amet consectetur. <span>Lorem ipsum</span>{" "}  adipisicing elit. 
                Accusamus, quo.</p>
                <button>Read More</button>
            </div>
            <div className="service">
                {/* <img src={Services2} alt="" /> */}
                <p>Lorem ipsum dolor sit amet consectetur. <span>Lorem ipsum</span>{" "}  adipisicing elit. 
                Accusamus, quo.</p>
                <button>Read More</button>
            </div>
            <div className="service">
                {/* <img src={Services3} alt="" /> */}
                <p>Lorem ipsum dolor sit amet consectetur. <span>Lorem ipsum</span>{" "}  adipisicing elit. 
                Accusamus, quo.</p>
                <button>Read More</button>
            </div>
        </div>
    </Section>
  );
}

const Section = styled.section`
    `;
   