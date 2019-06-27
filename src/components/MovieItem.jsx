
/* 
add a watch button thaimport { log } from 'util';
t will say watched or not watched
movies might need additional property of watched true/false
X make a button
X get the button to register clicks
X pass back to App handler to toggle movie[index].watched property. Change the allMovies state
X once new state rendered, MovieItem will check state and render button value depending on true/false.
X conditional render the button text in JSX
*/

import React from 'react';

// var MovieItem = (props) => (

//   <div>
//     <span>{props.movie.title}</span>
//     <button onClick={props.handleWatchToggle}>NOT WATCHED</button>
//   </div>

// )

class MovieItem extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
    }
  }

  render() {

    let buttonLabel;
    if (this.props.movie.watched) {
      buttonLabel = "WATCHED";
    } else {
      buttonLabel = "NOT WATCHED";
    }

    return (
      <div>
        <span>{this.props.movie.title}</span>
        
        <button 
        onClick={e => this.props.handleWatchToggle(e, this.props.movie, this.props.index)}
        >{buttonLabel}</button>

      </div>
    )
  }
}

export default MovieItem;