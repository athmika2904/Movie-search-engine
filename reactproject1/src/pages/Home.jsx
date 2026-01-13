import Moviecard from "../components/Moviecard";
import { useState } from "react";
function Home(){
    const[search,setSearch]=useState("");
    const movies=[{id:1,title:"John Wick",releasedate:"2020"},{id:2,title:"Bohn Wick",releasedate:"2020"}];
    const handleSearch=()=>{

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