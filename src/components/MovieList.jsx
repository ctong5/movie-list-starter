import React from "react";
import MovieItem from "./MovieItem";

var MovieList = (props) => (

  <div>
    {props.movies.map((movie, index) => 
      <MovieItem 
      movie={movie} 
      // movie = props.movies.movie
      // index = props.movies.index
      index={index} 
      handleWatchToggle={props.handleWatchToggle}
      
      
      />
    )}
  </div>

)

export default MovieList;