import React, {useState} from "react"
import MovieCard from "./MovieCard"

export default function SearchMovies(props) {

    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=59aa965912b6ee991935702f73e01756&language=en-US&query=${query}&page=1&include_adult=false`;
    
        try{
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        }catch(err){
            console.log(err)
        }
    }

    const makeCards = () => {
        return movies.map(movie => {
            return (
                <MovieCard movie={movie} key={movie.id}/>
            )
        })
    }

    return(
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input 
            className="input"
            type="text" 
            name="query" 
            placeholder="search here"
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
            />
            <button className="button" type="submit">Search</button>
        </form>
        <div className="card-list">
         {makeCards()}
        </div>
        </>
    )
}