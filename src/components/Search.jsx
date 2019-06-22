import React from 'react';

const Search = (props) => (
  <div>
    <form 
      onSubmit= { e => { 
        e.preventDefault();
        // console.log(e.nativeEvent);
        props.handleSearchFormSubmit(e);
      }}
    
      onChange={ (e) => props.handleSearchFormChange(e) } >

      <input type="search" name="search" />
      <input type="submit" value="Search Movies" />
    </form>
  </div>
)

export default Search;
