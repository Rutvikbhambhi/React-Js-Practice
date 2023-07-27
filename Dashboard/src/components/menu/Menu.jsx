import React from "react";

import { Link } from "react-router-dom";
import { menu } from "../../data";
import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItems) => (
            <Link to="/" className="listItem" key={listItems.id}>
              <img src={listItems.icon} alt="" />
              <span className="listItemTitle">{listItems.title}</span>
            </Link>
          ))}
          {/* <Link to="/" className="listItem">
            <img src="/profile.svg" alt="" />
            <span className="listItemTitle">Profile</span>
          </Link> */}
        </div>
      ))}
    </div>
  );
};

export default Menu;
