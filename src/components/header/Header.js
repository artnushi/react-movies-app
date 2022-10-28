import React, { useState } from 'react'
import { SearchContext } from "../../pages/Home";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1>Flowers App</h1>
        </div>

        <SearchContext.Consumer>
          {({ searchValue, handleChange }) => {
            return (
              <>
                <div>
                  <div className="mb-3">
                    <label htmlFor="search-movies" className="form-label">
                      Search flower
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="search_movies"
                      onChange={handleChange}
                      value={searchValue}
                      aria-describedby="search-movies"
                    />
                  </div>
                </div>
              </>
            );
          }}
        </SearchContext.Consumer>

        <ul className="nav">
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Log in
            </Link>
          </li>
        </ul>
      </div>

    </>
  )
}
export default Header