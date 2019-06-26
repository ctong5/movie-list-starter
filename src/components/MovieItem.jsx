import React from 'react';



/* 
add a watch button that will say watched or not watched
movies might need additional property of watched true/false
X make a button
X get the button to register clicks
toggle movie.watched property..this.change the property
  change !this.state.allMovies[i].watched
toggle text or button with that new movie property.watched
*/


var MovieItem = (props) => (

  <div>
    <span>{props.movie.title}</span>
    <button onClick={props.handleWatchToggle} >NOT WATCHED</button>
  </div>

)

export default MovieItem;