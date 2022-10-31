import React from 'react'
import {SearchContext} from "../../pages/Home";
import {Link, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

function Header(props) {


    let navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem('auth_token')
        localStorage.setItem('isAuthenticated', false)
        navigate('/login')
    }

    const isAuthenticated = JSON.parse( localStorage.getItem('isAuthenticated') );

    console.log('isAuthenticated', isAuthenticated)
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-5">
                <Link to="/" className="nav-link fs-1">
                    Home
                </Link>


                {props.showSearch &&
                <SearchContext.Consumer>
                    {({searchValue, handleChange}) => {
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

                }


                <div>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">
                                Sign up
                            </Link>
                        </li>

                        {
                            isAuthenticated ?
                                <>
                                    <li className="nav-item">
                                        <button onClick={handleLogout}  className="btn btn-link text-decoration-none">
                                            Log out
                                        </button>
                                    </li>
                                </>
                                :

                                <>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">
                                            Log in
                                        </Link>
                                    </li>
                                </>
                        }

                        <li className="nav-item">
                            <Link to="/authenticated-user" className="nav-link">
                                Authenticated user
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

Header.propTypes = {
    showSearch: PropTypes.bool
}

export default Header
