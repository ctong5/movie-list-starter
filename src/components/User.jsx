import React from 'react';

// add a user movie to the movie list being rendered
  // X refactor handlechangeof state to dynamically add based on e.target.name
  // X see that add search state is changing
  // X see/get value of added movie. --> add state
  // on click (check the click)
  // add the movie to whichever list I want. 
  // props passed into movie becomes all movies again, plus the added movie
  // after adding a movie, show ALL movies

const User = (props) => (
  <div>
    <form onSubmit={(e) => props.handleAddSubmit(e)}>
      <input type="text" name="addedMovie" value={props.addedMovieState} onChange={(e) => props.handleChange(e)}/>
      <input type="submit" value="Add a movie" />
    </form>
  </div>
);

export default User;