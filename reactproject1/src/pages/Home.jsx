import Moviecard from "../components/Moviecard";
function Home(){
    const movies=[{id:2,title:"John Wick",releasedate:"2020"}];
    return(
        <div className="home">
            <div className="moviegrid">
                {
                    movies.map((m)=>(
                        <Moviecard movie={m} key={m.id}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Home;