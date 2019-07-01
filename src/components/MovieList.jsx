import React from 'react';

const MovieList = (props) => {

  return (
    <div>
      {props.movies.map(movie => {
        return <div>{movie.title}</div>
      })}
    </div>
  )

}

export default MovieList;