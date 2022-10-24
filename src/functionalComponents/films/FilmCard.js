import React, { useState } from "react"
import FilmsList from "./FilmsList"


const FilmCard = () => {

  const [searchValue, setSearchValue] = useState("")

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <div className="mb-3">
        <label htmlFor="search-movies" className="form-label">Search movies</label>
        <input type="text" className="form-control" name="search_movies" onChange={handleChange} value={searchValue} aria-describedby="search-movies" />
      </div>
      <div className="row">
        <FilmsList
          searchValue={searchValue}
        />
      </div>
    </>
  )
}

export default FilmCard