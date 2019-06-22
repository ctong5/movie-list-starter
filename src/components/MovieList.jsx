import React from "react";
import MovieItem from "./MovieItem";

var MovieList = (props) => (

  <div>
    {props.movies.map((movie, key) => 
      <MovieItem movie={movie} key={key}/>
    )}
  </div>

)

export default MovieList;