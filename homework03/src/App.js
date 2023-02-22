
import './App.css';
import Movie from './Movie';
import MoviesList from './MoviesList';
import { useState } from 'react';

function App() {
  const movies = [
    {name: 'American Psycho', year: 1990, img: 'americanpsycho.jpg'},
    {name: 'The Batman', year: 2022, img: 'batman.jpg'},
    {name: 'The Matrix', year: 1999, img: 'matrix.jpg'},
    {name: 'Shrek', year: 2003, img: 'shrek.jpg'},
  ]

  const [movie, setMovie] = useState(movies[0])
  
  return (
    <div>
      <h1>Movies</h1>
      <div className='d-flex'>
        <MoviesList moviesList={movies} show={setMovie} />
        <Movie movie={movie} />
      </div>
    </div>
  )
}

export default App;
