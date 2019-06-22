import React from 'react';

const Search = (props) => (
  <div>

    <form 
      onChange={(e) => props.handleSearchFormChange(e)}
      onSubmit={(e) => props.handleSearchFormSubmit(e)}>
    
      <input type="search" name="search" />

      <input type="submit" value="Search Movies"/>
    </form> 
  
  </div>

)

export default Search;
