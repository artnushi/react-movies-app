import React from 'react'
import {Link} from "react-router-dom";

function HeaderPage (props) {
  return (
      <>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <Link to="/" className="nav-link fs-1">
              Home
            </Link>
          </div>

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

export default HeaderPage
