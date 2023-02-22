function MoviesList({movies, show}) {
    return (
        <div className="movies-list">
        {movies.map((movie, i) => {
            return (
                <div key={i}>
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                    <button onClick={() => show(movie)}>View</button>
                </div>
            )
        })}
        </div>
    )
}

export default MoviesList