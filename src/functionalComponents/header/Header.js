import React, { useState } from 'react'
4;
import PropTypes from "prop-types";

const Header = ({handleChange, searchValue}) => {


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
            <a className="nav-link" href="#">Sign up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>

    </>
  )
}

Header.propTypes = {
  handleChange: PropTypes.string,
  searchValue: PropTypes.string,
};

export default Header
