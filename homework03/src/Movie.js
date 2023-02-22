function Movie({movie}) {
    console.log(movie)
    if (movie === '') {
        return
    }
    return (
        <>
        <div className="d-flex">
        <img className="movie-img" src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title}/>
        <div className="movie">
            <h2>{movie.title}</h2>
            <div className="movie-info">
            <p>{movie.vote_average}</p>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default Movie