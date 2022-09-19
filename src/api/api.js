import axios from 'axios'
let URL = "https://api.themoviedb.org/3"
let API_key = "c501725137ac624a920da107fa82beb3"
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

export let getUpComingMovies = async (page = 1) => {
    try {
        let res = await axios.get(`${URL}/movie/upcoming?api_key=${API_key}&page=${page}`)
        let data = await res.data
        let { results } = data
        return results;
    }
    catch (err) { console.log(err) }

}
export let getMovieById = async (id) => {
   try{ let response = await axios.get(`${URL}/movie/${id}?api_key=${API_key}`)
   let data = await response.data
   return data}
   catch(err) { console.log(err) }
}
export let getMovieVideos = async (id) => {
   try{ let response = await axios.get(`${URL}/movie/${id}/videos?api_key=${API_key}`)
   let data = await response.data
   let results = data.results
   return results}
   catch (err) { console.log(err) }
}
export let getCasts = async (id) => {
    try{ let response = await axios.get(`${URL}/movie/${id}/credits?api_key=${API_key}`)
    let data = await response.data
    let casts= data.cast
    return casts}
    catch (err) { console.log(err) }
 }

 export let getSimilar = async (id) => {
    try{ let response = await axios.get(`${URL}/movie/${id}/similar?api_key=${API_key}`)
    let data = await response.data
    let results= data.results
    return results}
    catch (err) { console.log(err) }
 }

 export let getOnTheAirAeries = async (page = 1) => {
    try {
        let res = await axios.get(`${URL}/tv/on_the_air?api_key=${API_key}&page=${page}`)
        let data = await res.data
        let { results } = data
        return results;
    }
    catch (err) { console.log(err) }

}
export let getSeriesById = async (id) => {
    try{ let response = await axios.get(`${URL}/tv/${id}?api_key=${API_key}`)
    let data = await response.data
    return data}
    catch(err) { console.log(err) }
 }
 export let getSeriesVideos = async (id) => {
    try{ let response = await axios.get(`${URL}/tv/${id}/videos?api_key=${API_key}`)
    let data = await response.data
    let results = data.results
    return results}
    catch (err) { console.log(err) }
 }

 export let getSeriesCasts = async (id) => {
    try{ let response = await axios.get(`${URL}/tv/${id}/credits?api_key=${API_key}`)
    let data = await response.data
    let casts= data.cast
    return casts}
    catch (err) { console.log(err) }
 }
 export let getSeriesSimilar = async (id) => {
    try{ let response = await axios.get(`${URL}/tv/${id}/similar?api_key=${API_key}`)
    let data = await response.data
    let results= data.results
    return results}
    catch (err) { console.log(err) }
 }

 export let getTrendingMovies = async (page=1) => {
    try{ let response = await axios.get(`${URL}/movie/popular?api_key=${API_key}&page=${page}`)
    let data = await response.data
    let results= data.results
    return results}
    catch (err) { console.log(err) }
 }

 export let getTopRatedMovies = async (page=1) => {
    try{ let response = await axios.get(`${URL}/movie/top_rated?api_key=${API_key}&page=${page}`)
    let data = await response.data
    let results= data.results
    return results}
    catch (err) { console.log(err) }
 }

 export let getTrendingTv = async (page=1) => {
    try{ let response = await axios.get(`${URL}/tv/popular?api_key=${API_key}&page=${page}`)
    let data = await response.data
    let results= data.results
    return results}
    catch (err) { console.log(err) }
 }

 export let getTopRatedTv = async (page=1) => {
    try{ let response = await axios.get(`${URL}/tv/top_rated?api_key=${API_key}&page=${page}`)
    let data = await response.data
    let results= data.results
    return results}
    catch (err) { console.log(err) }
 }
