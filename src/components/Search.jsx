import React from 'react';

const Search = (props) => (
  <div>
    <form 
      onSubmit= { (e) => {
        props.handleSearchFormSubmit(e);
        console.log(props.handleSearchFormSubmit);
      }}
    
      onChange={ (e) => props.handleSearchFormChange(e) } >

      <input type="search" name="search" />
      <input type="submit" value="Search Movies" />
    </form>
  </div>
)

export default Search;
