function MoviesList({moviesList, show}) {
    return (
        <div className="movies-list">
        {moviesList.map((movie, i) => {
            return (
                <div key={i}>
                    <p>{movie.name}</p>
                    <button onClick={() => show(movie)}>View</button>
                </div>
            )
        })}
        </div>
    )
}

export default MoviesList