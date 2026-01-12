function Moviecard({movie}){
    function fav(){

    }
    return(
        <div className="moviecard">
            <div className="poster">
                <img src={movie.url} alt={movie.title} />
                <div className="overlay">
                    <button className="favouritebtn" onClick={fav}>🤍</button>
                </div>
            </div>
            <div className="info">
                <h3>{movie.title}</h3>
                <p>{movie.releasedate}</p>
            </div>
        </div>
    )
}
export default Moviecard;