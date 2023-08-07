// import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner';
import Trending from "./trending/Trending";
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';

import "./home.scss"

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      {/* <div style={{height: 1000}}></div> */}
    </div>
  )
}

export default Home