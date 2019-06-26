import React from 'react';

const Search = (props) => (
  <div>

    <form onSubmit={(e) => props.handleSearchSubmit(e)}>
    
      <input 
      type="search" 
      name="search" 
      onChange={(e) => props.handleChange(e)}/>
      <input type="submit" value="Search movies" />
    
    </form>
  
  </div>

)

export default Search;