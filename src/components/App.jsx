import React from 'react';
import MovieList from './MovieList';
import Search from './Search';

/*
// give App state now
*/

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>

        <h1>Movie List</h1>

        <div><MovieList movies={this.props.movies} /></div>
        
      </div>
    )
  }
}

export default App;

/*
// map through prop
// instead of props.movies
// use {movies} to destructure that props object
// now I've created a new variable called movies and I want to use movies moving forward
// for <MovieItem movie={movie}, this is JSX and NOT destructuring
*/

// const App = (props) => (

//     <div>
    
//       <h1>Movie List</h1>
  
//       <div><MovieList movies={props.movies} /></div>
  
//     </div>

// );

// export default App;


/*
// import exampleMovieLisData and have access to it
// pass in prop in App. if you want to console.log props, watch ES6 () vs. {}
*/

// const App = (props) => (

//   <div>

//     <h1>Movie List</h1>

//     <div>{props.movies[0].title}</div>
//     <div>{props.movies[1].title}</div>
//     <div>{props.movies[2].title}</div>
//     <div>{props.movies[3].title}</div>
//     <div>{props.movies[4].title}</div>

//   </div>
// )

// export default App;


/*
// Hard coded example data in same file
*/
// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

// const App = () => (
//   <div>
//     <h1>Movie List</h1>

//     <div>{movies[0].title}</div>
//     <div>{movies[1].title}</div>
//     <div>{movies[2].title}</div>
//     <div>{movies[3].title}</div>
//     <div>{movies[4].title}</div>
    
//   </div>
// )

// export default App;

