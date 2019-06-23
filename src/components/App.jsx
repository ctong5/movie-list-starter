import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import User from './User';

/*
make  App stateful
*/

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      movieList: props.movies,
      newMovie: '',
      filteredMovieList: '',
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
    this.handleNewMovieFormSubmit = this.handleNewMovieFormSubmit.bind(this);
  }

  // HANDLE SEARCH BAR INPUT, SET STATE WITH PASSED IN E.T. VALUE FROM SEARCH INPUT
  handleFormChange(e) {
    // this.setState({
    //   search: e.target.value
    // })
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // HANDLE SEARCH SUBMIT, RENDER FILTERED MOVIE LISTS BASED ON SEARCH BAR
  handleSearchFormSubmit(e) {
    e.preventDefault();
    // console.log(this.props.movies);
    // console.log(this.state.search); 

    let search = this.state.search;
    let movieList = this.state.movieList;
    // console.log("movieList: ", movieList);
    // console.log("search: ", search);

    // filter movielistdata to include only the search state
    let filteredMovieList = movieList.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });
    // console.log("filtered", filteredMovieList);

    this.setState({
      filteredMovieList: filteredMovieList,
    })
  }

  // HANDLE USER ADDED MOVIE SUBMIT - GET E.T.VALUE FROM USER INPUT. SET STATE SO NEW MOVIE IS ADDED
    // add form or input to page
    // be able to see that we're capturing new movie value
      // as we type, store the value in state
      // when we click add, get access to state
    // prove I can add a movie
      // add the move to the movieList data
      // render the new movieList
    handleNewMovieFormSubmit(e) {
      e.preventDefault();
    
      let newMovie = this.state.newMovie;
      // console.log(newMovie === this.state.newMovie);

      let movieList = [...this.state.movieList];

      movieList.push({title: newMovie});

      this.setState({
        movieList: movieList,
        newMovie: ''
      })
    }

  render() {

    // LONG WAYS FOR MOVIELIST
    // let movies;
    // if (this.state.filteredMovieList) {
    //   movies = this.state.filteredMovieList;
    // } else {
    //   movies = this.state.movies;
    // }

    // if filteredmovies is NOT null (we are actively filtering) and length is 0. we ARE filtering and have NOT found anything
    /*
    let isFiltering;

    */

    return (
      <div>
        <h1><span>Movie List!!!</span></h1>
    
        <Search handleFormChange={this.handleFormChange} 
                handleSearchFormSubmit={this.handleSearchFormSubmit}/>

        <form 
          onSubmit={this.handleNewMovieFormSubmit}>
          <input type="search" name="newMovie" value={this.state.newMovie} onChange={this.handleFormChange} placeholder="add a movie..."/> 
          <input type="submit" name="" value="Add A Movie"/>
        </form>

        {/*<MovieList movies={this.props.movies} />*/}

        <MovieList movies={this.state.filteredMovieList || this.state.movieList} />
        { 
          this.state.filteredMovieList && this.state.filteredMovieList.length === 0 &&
          // console.log("I should be showing NO results found now"); // check my logic in line above
          <span>No movies found!</span>
        }
        {/* isFiltered === true && <span>No Movies Found</span> */}
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