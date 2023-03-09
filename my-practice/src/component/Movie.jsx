import React from "react";

const Movie = (props) => {
  return (
    <div className="movie">
      <img
        src={props.img}
        width={"200px"}
        alt=""
      />
      <p>{props.title}</p>
      <p>year: {props.year}</p>
    </div>
  );
};

export default Movie;
