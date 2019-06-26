import React from "react";
import MovieItem from "./MovieItem";

var MovieList = (props) => (

  <div>
    {props.movies.map((movie) => 
      <MovieItem movie={movie} handleWatchToggle={props.handleWatchToggle}/>
    )}
  </div>

)

export default MovieList;