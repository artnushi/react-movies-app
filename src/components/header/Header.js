import React from 'react'

function Header (props) {
  return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h1>Movies App</h1>
                </div>

                <div>
                    <div className="mb-3">
                        <label htmlFor="search-movies" className="form-label">Search movies</label>
                        <input type="text" className="form-control" id="search-movies" aria-describedby="search-movies" />
                    </div>
                </div>

                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>

        </>
  )
}

export default Header
