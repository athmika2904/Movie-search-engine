import { createContext,useState,useContext,useEffect } from "react";
const MovieContext=createContext()
export const useMovieContext=()=>useContext(MovieContext)
export const MovieProvider=({children})=>{
    const [favourites,setFavourites]=useState([])
    useEffect(()=>{
        const storedfavs=localStorage.getItem("favourites");
        if(storedfavs) setFavourites(JSON.parse(storedfavs));
    },[])
    useEffect(()=>{
        localStorage.setItem('favourites',JSON.stringify(favourites))
    },[favourites])
    const addtoFav=(movie)=>{
        setFavourites(m=>[...m,movie])
    }
    const removefav=(movieId)=>{
        setFavourites(m=>m.filter(movie=>movieId!==movie.id))
    }
    const isfav=(movieId)=>{
        return favourites.some(m=>m.id===movieId)
    }
    const value={
        favourites,addtoFav,removefav,isfav
    }
    return (<MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>);
}