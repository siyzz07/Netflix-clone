import { API_KEY } from "./constants/constant"; 

export const action=`discover/movie?api_key=${API_KEY}&with_genres=28`
export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const topRated = `/movie/top_rated?api_key=${API_KEY}`
