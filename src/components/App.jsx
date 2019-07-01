import React from 'react';
import Search from './Search';

/*
Level 0: make a list of movies
*/

/*
Level 1: 
Add a search bar so that a user may see if a movie is in the list.
- X add form for search and button (new search component)
- input should detect state change
- button should detect click
After a user submits the search, display all matches (or partial matches) to that title.
- take the search state and use it to filter thru movie list. movie list state will change based on the search
Bonus: Handle the case of "no movie by that name found" gracefully.
- conditional rendering. if moviestate is empty, display span of sorry no movies found
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
      
        <h1>Movie List :D!</h1>
  
        <Search /> 
  
        <div>
          {this.props.movies.map(movie => {
            return <div>{movie.title}</div>
          })}
        </div>
  
      </div>
    )
  }
}
  
export default App;
