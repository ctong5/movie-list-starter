import React from 'react';
import MovieList from './MovieList';
import Search from './Search';

/*
// give App state now
*/

// create Search component to display search input and button
  // pass in onchange. check that we are detecting changes in the
  // pass in clickhandler
// get value of the search bar
  // onChange will pick up on the changes
// filter out allMovies or show a filtered state based on value of search bar
  // clickhandler will initiate the filtering
  // create a filtered list of movies for filtered state
// set state to the new filtered value

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allMovies: this.props.movies,
      search: "",
      filteredMovies: "",
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchChange(e) {
    this.setState({
      search: e.target.value,
    });
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    
    // this handler initiates the filtering
    // get a search term & all the movies to filter from 
    let search = this.state.search;
    let allMovies = [...this.props.movies];
    console.log("copy allMovies: ", allMovies);
    console.log(allMovies[0].title.toLowerCase())

    // use .filter and includes to get a new array of filtered movies
    let filteredMovies = allMovies.filter( movie => {
      return (movie.title.toLowerCase()).includes(search.toLowerCase());
    })
    console.log("filteredMovies: ", filteredMovies);

    // set filtered state to the filtered list of movies
    this.setState({
      filteredMovies: filteredMovies
    })

    // pass this new prop into Movies component conditionally. 
    // if filteredMovies is false, Movie component passes in allMovies
    // if filteredMovies is true, Movie component passes in filteredMovies. 
    // if filteredMovies is false
  }

  render() {
    const isFiltered = this.state.filteredMovies;

    return (
      <div>

        <h1>Movie List</h1>

        <Search onChange={this.handleSearchChange} onSubmit={this.handleSearchSubmit}/>

        {/* NOTE: short circuit and choose filteredMovies if it exists */}
        <MovieList movies={ this.state.filteredMovies || this.state.allMovies}/>
          
        {/* NOTE: if filteredmovies exists(search executed) and filteredmovies.length is 0, 
          this means 0 search results matched ==> display no movies found*/}
        {isFiltered && isFiltered.length === 0 && <p>Didn't find yo movies</p>}

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

