function Moviecard({movie}){
    function fav(){

    }
    return(
        <div className="moviecard">
            <div className="poster">
                <img src={
                        movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "/no-image.png"
                    }
                    alt={movie.title}
                    />

                <div className="overlay">
                    <button className="favouritebtn" onClick={fav}>🤍</button>
                </div>
            </div>
            <div className="info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}
export default Moviecard;