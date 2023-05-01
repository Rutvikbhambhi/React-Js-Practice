import React from 'react';
import Movie from './Movie';
import movies from '../movie.json';

import "./about.css"
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
      <Link to="/" style={{ color: "red", textDecoration: "none" }}>
        <h1>Home</h1>
      </Link>
      <Link to="/contact" style={{ color: "red", textDecoration: "none" }}>
        <h1>Contact</h1>
      </Link>
      <div className='main'>
        <div className='movie-img'>
          {
            movies.map((element, index) => {
              return (
                <Movie
                  key={index}
                  title={element.Title}
                  year={element.Year}
                  img={element.Poster}
                />
              )
            })
          }



        </div>
      </div>
    </div>
  )
}

export default About