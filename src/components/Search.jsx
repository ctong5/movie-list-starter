import React from 'react';

const Search = (props) => (
  <div>

    <form onSubmit={(e) => props.onSubmit(e)}>
      <input type="search" onChange={(e) => props.onChange(e)}/>
      <input type="submit" />
    
    </form>
  
  </div>

)

export default Search;