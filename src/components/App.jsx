import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import User from './User';
import Panel from './Panel';
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

/*
// Add two buttons to allow the users to toggle between a list of 'watched' movies and movies 'to watch'.
// filter through allMovies and pick out movies based on true/false
  // two buttons: watched will filter to watched movies, unwatched will filter to unwatched
  // buttons need to register clicks
  // buttons need filter all movies by string false or true
  // to switch back to all movies shown, 
*/

/*
 Level 4:
 Add a panel of movie information that appears when the title is clicked (consider starting with hardcoded information)
  // create panel of info
  // movie title becomes a link/clickable element. 
    // onClick will toggle the panel component rendering or not 

 Refactor the watch toggle to be part of the movie information panel
 Get movie information from the The Movie Database API 
*/

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allMovies: this.props.movies,
      search: "",
      addedMovie: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleWatchToggle = this.handleWatchToggle.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
    this.handleUnwatched = this.handleUnwatched.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleShowAll(e) {
    e.preventDefault();
    this.setState({
      allMovies: this.props.movies,
    })
  }

  handleSearchSubmit(e) {
    e.preventDefault();

    let search = this.state.search;
    let allMovies = [...this.state.allMovies];
    console.log("allMovies BEFORE Search: ", allMovies);

    allMovies = allMovies.filter( movie => {
      return (movie.title.toLowerCase()).includes(search.toLowerCase());
    })
    console.log("allMovies AFTER Search: ", allMovies);

    this.setState({
      allMovies: allMovies,
    })
  }

  handleAddSubmit(e) {
    e.preventDefault();
    
    // get state of addedMovie to create new movie
    let addedMovieTitle = this.state.addedMovie;
    let addedMovie = { 
      title: addedMovieTitle,
      watched: false
    };

    // add that new movie to allMovies (NOT the props);
    let allMovies = this.state.allMovies;
    allMovies.push(addedMovie);

    // get Movies component to updated allMovies and clear the add movie input bar
    this.setState({
      addedMovie: ""
    })
  }

  handleWatchToggle(e, movie, index) {
    e.preventDefault()
    console.log("passed in movie, index: ", movie, index);

    // change state of the exact movie that was passed in. 
    // state changes, the movies should rerender. 
    // the value of the button needs to change....so conditional rendering in MovieItem
    let allMovies = this.props.movies;

    // update movie to toggle watched/not watched
    let toggledMovie = { title: movie.title, watched: !movie.watched }

    // insert toggledMovie into the allMovies array
    allMovies.splice(index, 1, toggledMovie);
    // console.log("new toggled movie", toggledMovie)
    // console.log("toggled", allMovies);

    this.setState ({
      allMovies: allMovies
    })
  }

  handleWatched(e) {
    let allMovies = this.props.movies;

    // filter so only movie.watched === true shows
    allMovies = allMovies.filter(movie => {
      return movie.watched;
    })
    console.log("list all watched movies: ", allMovies);

    this.setState({
      allMovies: allMovies,
    })
  }

  handleUnwatched(e) {
    let allMovies = this.props.movies;
    
    // filter so only movie.watched === false shows
    allMovies = allMovies.filter(movie => {
      return !movie.watched;
    })
    console.log("list all unwatched movies: ", allMovies);

    this.setState({
      allMovies: allMovies,
    })
  }

  render() {

    return (
      <div>

        <h1>Movie List</h1>

        <div>
          <button onClick={(e) => this.handleWatched(e)}>WATCHED MOVIES</button>
          <button onClick={(e) => this.handleUnwatched(e)}>NOT WATCHED MOVIES</button>
        </div>
        
        <button onClick={this.handleShowAll}>Show All Movies</button>

        <User handleChange={this.handleChange} handleAddSubmit={this.handleAddSubmit} addedMovieState={this.state.addedMovie}/>

        <Search handleChange={this.handleChange} handleSearchSubmit={this.handleSearchSubmit}/>

        {/* NOTE: short circuit and choose filteredMovies if it exists */}
        <MovieList 
        movies={ this.state.allMovies }
        handleWatchToggle={this.handleWatchToggle}
        watchState={this.state.allMovies}
        />
          
        {/*
          pass this new prop into Movies component conditionally. 
          if filteredMovies is false, Movie component passes in allMovies
          if filteredMovies is true, Movie component passes in filteredMovies. 
          if filteredMovies is true and length is 0, show error message
        */}

        {/* 
          NOTE: if filteredmovies exists(search executed) and filteredmovies.length is 0, 
          this means 0 search results matched ==> display no movies found
        */}
        {this.state.allMovies && this.state.allMovies.length === 0 && <p>Didn't find yo movies</p>}

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

