// import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>

        <div className="infoText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea
          nostrum eos consequatur dolorem aut corrupti quisquam hic quae
          quaerat? Porro veniam, autem et debitis eveniet animi. Repudiandae
          magnam temporibus velit laborum quas non in deserunt ullam vero
          placeat dolore dicta officia accusamus fugiat, modi natus eum suscipit
          mollitia ipsam.
        </div>

        <div className="socialIcons">
          <span className="icon">
            <FaFacebook />
          </span>

          <span className="icon">
            <FaInstagram />
          </span>

          <span className="icon">
            <FaTwitter />
          </span>

          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
