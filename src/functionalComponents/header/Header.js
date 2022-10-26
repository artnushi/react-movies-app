import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Header = (props) => {
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1>Movies App</h1>
        </div>

        <div>
          <div className="mb-3">
            <label htmlFor="search-movies" className="form-label">Search movies</label>
            <input type="text" className="form-control" name="search_movies" onChange={handleChange} value={searchValue} aria-describedby="search-movies" />
          </div>
        </div>

        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/SignUp">Sign up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login">Login</Link>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Header
