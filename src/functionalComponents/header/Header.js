import React, { useState } from 'react'
import { SearchContext } from "../pages/Home";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Header = (props) => {
  // const [searchValue, setSearchValue] = useState('')
  //
  // const handleChange = (event) => {
  //   setSearchValue(event.target.value)
  // }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1>Movies App</h1>
        </div>


        <SearchContext.Consumer>
          {
            ({ searchValue, handleChange }) => {
              return (
                <>
                  <div>
                    <div className="mb-3">
                      <label htmlFor="search-movies" className="form-label">Search movies</label>
                      <input type="text" className="form-control" name="search_movies" onChange={handleChange} value={searchValue} aria-describedby="search-movies" />
                    </div>
                  </div>
                </>
              )
            }
          }

        </SearchContext.Consumer>


        <ul className="nav">
          <li className="nav-item">
            <Link to="/signUp" className="nav-link">
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>

    </>
  )
}

Header.propTypes = {
  handleChange: PropTypes.func
};

export default Header
