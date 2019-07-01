import React from 'react';
import Search from './Search';
import MovieList from './MovieList';
/*
Level 0: make a list of movies
*/

/*
Level 1: 
Add a search bar so that a user may see if a movie is in the list.
- X add form for search and button (new search component)
- X input should detect state change
- X button should detect click
After a user submits the search, display all matches (or partial matches) to that title.
- X take the search state and use it to filter thru movie list. movie list state will change based on the search
Bonus: Handle the case of "no movie by that name found" gracefully.
- conditional rendering. if moviestate is empty, display span of sorry no movies found
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: this.props.movies,
      search: ""
    }
    this.onChange = this.onChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleShowAll = this.handleShowAll.bind(this);
  }

  onChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    
    let searchTerm = this.state.search;

    let filteredMovies = this.props.movies.filter(movie => {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    })

    this.setState({
      allMovies: filteredMovies,
      search: ""
    })
  }

  handleShowAll() {
    // reset state to show all movies
    this.setState({
      allMovies: this.props.movies
    })
  }

  render () {

    return (
      <div>
      
        <h1>Movie List :D!</h1>
  
        <Search searchMovies={this.onChange} handleSearchSubmit={this.handleSearchSubmit} stateSearch={this.state.search}/> 
  
        <button onClick={() => this.handleShowAll()} >Show All Movies</button>

        <MovieList movies={this.state.allMovies}/>
  
      </div>
    )
  }
}
  
export default App;
