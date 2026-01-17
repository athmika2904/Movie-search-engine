const API="97865ee27e1670f168153a8b6bc459ee";
const URL="https://api.themoviedb.org/3";
export const getPopular=async ()=>{
    const response=await fetch(`${URL}/movie/popular?api_key=${API}`);
    const data=await response.json()
    return data.results
};
export const searchMovie=async (query)=>{
    const response=await fetch(`${URL}/search/movie?api_key=${API}&query=${encodeURIComponent(query)}`);
    const data=await response.json()
    return data.results
};