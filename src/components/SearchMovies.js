import React from "react"
import { json } from "express";

export default function SearchMovies() {

    const searchMovies = async (e) => {
        e.preventDefault()

        const query = "HEAT"
        const url = `https://api.themoviedb.org/3/search/movie?api_key=59aa965912b6ee991935702f73e01756&language=en-US&query=${query}&page=1&include_adult=false`;
    
        try{
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
        }catch(err){
            console.log(err)
        }

        }

    return(
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input 
            className="input"
            type="text" 
            name="query" 
            placeholder="search here"
            />
            <button className="button" type="submit">Search</button>
        </form>
    )
}

