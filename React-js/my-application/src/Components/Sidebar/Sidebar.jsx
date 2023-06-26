import React from 'react';
import plusImg from '../../assest/plus-img.png';
import './sidebar.css'

function Sidebar() {
  const color = ["#fe9b72", "#fec971", "#00d4fe", "#e4ee91"]
  return (
    <div className='sidebar'>
      <img src={plusImg} alt="ADD" />
      <ul className='sidebar_list'>
        <li className='sidebar_list_item'></li>
      </ul>
    </div>
  )
}

export default Sidebar