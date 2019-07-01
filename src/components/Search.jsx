import React from 'react';

const Search = (props) => {

  return (
    <form onClick={e => props.handleSearchSubmit(e)}> 
      <input type="search" placeholder="Search for a movie..." onChange={e => props.searchMovies(e)} value={props.stateSearch}/>
      <input type="submit" value="Search"/>
    </form>
  )
}

export default Search;