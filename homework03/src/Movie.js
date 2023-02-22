function Movie({movie}) {
    return (
        <>
        <div className="d-flex">
        <img className="movie-img" src={require('./images/'+movie.img)} alt={movie.name}/>
        <div className="movie-info">
            <h2>{movie.name}</h2>
            <p>{movie.year}</p>
        </div>
        </div>
        </>
    )
}

export default Movie