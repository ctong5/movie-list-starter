import React from "react";
import MovieItem from "./MovieItem";

var MovieList = (props) => (

  <div>
    {props.movies.map((movie) => 
      <MovieItem movie={movie}/>
    )}
  </div>

)

export default MovieList;