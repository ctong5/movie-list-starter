import React from 'react';

// add a watch button that will say watched or not watched
// movies might need additional property of watched true/false

// have a button
// when button clicked
  // toggle movie.watched 
  // toggle text or button with new text


var MovieItem = (props) => (

  <div>
    <span>{props.movie.title}</span>
    <button>NOT WATCHED</button>
  </div>

)

export default MovieItem;