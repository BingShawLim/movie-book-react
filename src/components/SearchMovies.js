import React from "react"

export default function SearchMovies() {
    return(
        <form>
            <label htmlFor="query">Movie Name</label>
            <input type="text" name="query" placeholder="search here"/>
            <button className="button" type="submit">Search</button>
        </form>
    )
}

