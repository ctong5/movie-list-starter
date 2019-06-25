import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import movies from './data/exampleMovieListData'

console.log(movies);

ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));
