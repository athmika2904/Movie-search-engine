import Moviecard from "../components/Moviecard";
import { useState ,useEffect} from "react";
import { searchMovie,getPopular } from "../assets/services/api";
import "../Home.css";
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

    const handleSearch=async(e)=>{
        e.preventDefault();
        if(!search.trim()) return
        if(loading) return
        setLoading(true);
        try {
            const searchresult=await searchMovie(search);
            setMovies(searchresult)
            setError(null)
        } catch (error) {
            
        }finally{
            setLoading(false)
        }
    }
    return(
        <div className="home">
            <form onSubmit={handleSearch} className="searchform">
                <input type="text" placeholder="Search for a movie" className="searchinput" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <button type="submit" className="submitbtn">Search</button>
            </form>
            {error && <div className="errormsg">{error}</div>}
            {loading ? (<div className="loading">Loading..</div>):(
                <div className="moviegrid">
                {
                    movies.map((m)=>(
                        m.title.toLowerCase().startsWith(search)
                     &&
                        (<Moviecard movie={m} key={m.id}/>)
                    ))
                }
            </div>
            )}
            
        </div>
    )
}
export default Home;