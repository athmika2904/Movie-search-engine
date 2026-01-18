import { useMovieContext } from "../contexts/MovieContext";
function Moviecard({movie}){
    const {addtoFav,removefav,isfav}=useMovieContext()
    const favourite=isfav(movie.id);
    function fav(e){
        e.preventDefault()
        if(favourite) removefav(movie.id)
            else addtoFav(movie)
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
                    <button className={'favourite-btn $(favourite?"active:""}'} onClick={fav}>🤍</button>
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