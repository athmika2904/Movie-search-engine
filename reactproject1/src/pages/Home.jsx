import Moviecard from "../components/Moviecard";
import { useState ,useEffect} from "react";
import { searchMovie,getPopular } from "../assets/services/api";
function Home(){
    const[search,setSearch]=useState("");
    const [movies,setMovies]=useState([]);
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        const loadpopularmovies=async()=>{
            try{
                const popularmovies=await getPopular();
                setMovies(popularmovies)
            }catch(err){
                console.log(err)
                setError("Failed to load movies...");
            }
            finally{
                setLoading(false);
            }
        }
        loadpopularmovies();
    },[]);
    useEffect(()=>{},)
    const handleSearch=(e)=>{
        e.preventDefault();
    }
    return(
        <div className="home">
            <form onSubmit={handleSearch} className="searchform">
                <input type="text" placeholder="Search for a movie" className="searchinput" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <button type="submit" className="submitbtn">Search</button>
            </form>
            <div className="moviegrid">
                {
                    movies.map((m)=>(
                        m.title.toLowerCase().startsWith(search)
                     &&
                        (<Moviecard movie={m} key={m.id}/>)
                    ))
                }
            </div>
        </div>
    )
}
export default Home;