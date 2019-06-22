import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import User from './User';

/*
* make  App stateful
*/

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      movieList: props.movies
    };
    this.handleSearchFormChange = this.handleSearchFormChange.bind(this);
    this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
  }

  // HANDLE SEARCH BAR INPUT, SET STATE WITH PASSED IN E.T.VALUE FROM SEARCH INPUT
  handleSearchFormChange(e) {
    this.setState({
      search: e.target.value
    })
    // console.log(this.state.search);
  }

  // HANDLE SEARCH SUBMIT, RENDER FILTERED MOVIE LISTS BASED ON SEARCH BAR
  handleSearchFormSubmit(e) {
    // console.log(this.props.movie)...same as below
    // console.log(this.state.search); 
    e.preventDefault();
    // get search term and movie list for comparison
    let search = this.state.search;
    let movieList = this.state.movieList;
    console.log("movieList: ", movieList);
    console.log("search: ", search);

    // filter movielistdata to include only the search state
    let filteredMovieList = movieList.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });
    console.log("filtered", filteredMovieList);

    this.setState({
      filteredMovies: filteredMovieList,
    })
    
    // if no movies match the search term, set state to "no movies found"
    // otherwise, set search state to blank and display new array of filtered movie list
    if (filteredMovieList.length === 0) {
      this.setState({
        movieList: "Sorry dude, your search was not found",
        search: ""
      })
    } else {
    this.setState({
      movieList: filteredMovieList,
      search: ""
    });
    }
  }

  // HANDLE REFRESH AND RENDER ALL MOVIES AFTER UNSUCCESSFUL SEARCH
  // after clicking on MovieList title, this will be invoked
  // handler will set state of 
    // movie list to original movielist (props.movielistdata)
    // search to blank

  // HANDLE USER ADDED MOVIE - GET E.T.VALUE FROM USER INPUT
  // no need to set state here as we're just grabbing value and adding to the movielistdata

  // HANDLE USER ADDED MOVIE SUBMIT - ADD MOVIE TO MOVIELISTDATA

  render() {

    // let movies;
    // if (this.state.filteredMovieList) {
    //   movies = this.state.filteredMovieList;
    // } else {
    //   movies = this.state.movies;
    // }

    return (
      <div>
      {/* {console.log(this.props)} */}
        <h1><span>Movie List!!!</span></h1>
    
        <Search handleSearchFormChange={this.handleSearchFormChange} 
                handleSearchFormSubmit={this.handleSearchFormSubmit}/>

        <User />

        <MovieList movies={this.props.movies} />
  
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