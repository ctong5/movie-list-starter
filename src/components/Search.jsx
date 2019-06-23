import React from 'react';

const Search = (props) => (
  <div>

    <form 
      onChange={(e) => props.handleFormChange(e)}
      onSubmit={(e) => props.handleSearchFormSubmit(e)}>
    
      <input type="search" name="search" placeholder="search for a movie..." />

      <input type="submit" value="Search Movies"/>
    </form> 
  
  </div>

)

export default Search;
