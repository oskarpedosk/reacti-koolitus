
import './App.css';
import Movie from './Movie';
import MoviesList from './MoviesList';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([])
 
  const getMovies = async () => {
      const url = 'https://api.themoviedb.org/3/discover/movie?api_key=24c64ea903d3b9426c0b72f5af3d2813&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
      const result = await fetch(url)
      const movies = await result.json()
      setMovies(movies.results)
  }
  let movieInfo = ''

  const [movie, setMovie] = useState(movieInfo)
  
  return (
    <div>
      <h1>Movies</h1>
      <button onClick={getMovies}>View Movies</button>
      <div className='d-flex'>
        <MoviesList movies={movies} show={setMovie} />
        <Movie movie={movie} />
      </div>
    </div>
  )
}

export default App;