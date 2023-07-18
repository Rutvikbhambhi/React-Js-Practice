// import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner';
import Trending from "./trending/Trending";

import "./home.scss"

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <div style={{height: 1000}}></div>
    </div>
  )
}

export default Home