import { useMovieContext } from "../contexts/MovieContext";
function Favourites(){
    const {favourites}=useMovieContext();
    if(favourites){
        return(
             <div className="favgrid">
                <h2>Your Favourites</h2>
                <div className="moviegrid">
                {
                    favourites.map((m)=>(
                        
                        (<Moviecard movie={m} key={m.id}/>)
                    ))
                }
                </div>
            </div>
        );
    }
    return(  
        <div className="emptyfavs">
            <h3>No favourite movies added</h3>
            <p>Start adding movies to your favourites</p>
        </div>
    )
}
export default Favourites;