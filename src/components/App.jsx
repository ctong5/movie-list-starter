import React from 'react';
import MovieList from './MovieList';
import Search from './Search';

/*
// make the App stateful
*/

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(e) {
    console.log(e)
    let searchTerm = e.target.value;
    // update state with passed in value of search term
    this.setState({
      searchTerm: searchTerm,
    })
  }

  render() {
    return (
      <div>
      {console.log(this.props)}
        <h1>Movie List!!!</h1>
      
        <div>
        <Search handleFormChange={this.handleFormChange}/>
        </div>
        
        <div>
          <MovieList movies={this.props.movies} />
        </div>
  
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

// var App = (props) =>  {

//   console.log(props);
//   return (
//         <div>
//           <h1>Movie List!!!</h1>
    
//           <form>
//             <input type="text">
//             </input>
    
//             <input type="submit">
//             </input>
//           </form>
    
//             <div>
//               <MovieList movies={props.movies} />
//             </div>
    
//         </div>
//   )
// }


// export default App;

/*
// import exampleMovieLisData and have access to it
// pass in prop in App. if you want to console.log props, watch ES6 () vs. {}
*/
// var App = (dogs) => (
//   <div>
//     <h1>Movie List!</h1>
  
//     <ul>
//       <li>{dogs.movies[0].title}</li>    
//       <li>{dogs.movies[1].title}</li>    
//       <li>{dogs.movies[2].title}</li>    
//       <li>{dogs.movies[3].title}</li>    
//       <li>{dogs.movies[4].title}</li>    
//     </ul>
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

// var App = () => (
//   <div>
  
//     <h1>Movie List</h1>

//     <div>Movie List Container
//       <ul>  
//         <li>{movies[0].title}</li>
//         <li>{movies[1].title}</li>
//         <li>{movies[2].title}</li>
//         <li>{movies[3].title}</li>
//         <li>{movies[4].title}</li>
//       </ul>
//     </div>

//   </div>
// )

// export default App;