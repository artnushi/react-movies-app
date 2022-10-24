import React, {useState} from 'react'
import './App.css'
import Header from './functionalComponents/header/Header'
import FilmCard from './functionalComponents/films/FilmCard'
// import FilmCard from './components/films/FilmCard'
import FilmCardFunctional from "./components/films/FilmCardFunctional";
import {movies} from "./helpers/data";
import styled from "styled-components";
import PropTypes from "prop-types";
import FilmsList from "./functionalComponents/films/FilmsList";

function App () {
  const [readMorebuttonText, setReadMorebuttonText] = useState('Read more');
  const [toggleReadMore, setToggleReadMore] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleToggleReadMore = () => {
    if (!toggleReadMore) {
      setToggleReadMore(true)
      setReadMorebuttonText('Read less');
    } else {
      setToggleReadMore(false)
      setReadMorebuttonText('Read more');
    }
  }

  const readMoreOrLess = (description) => {
    if (!toggleReadMore && description.length > 80) {
      return description.substr(0, 80) + '...'
    } else {
      return description
    }
  }

  const renderMovies = () => {
    return movies.filter((movie) => {
      if (movie.title.toLowerCase().includes(searchValue.toLowerCase()) || movie.description.toLowerCase().includes(searchValue.toLowerCase())) {
        return true
      }

      if (searchValue === '') {
        return movie
      }

      return false
    }).map((item) => {
      return (
          <Card key={item._id} className="card col-md-3 mb-4 me-4">
            <img src={`./${item.img}`} className="card-img-top mb-4" alt="..."/>

            <h3>
              {item.title}
            </h3>
            <div className="card-body">
              <p className="card-text">
                {readMoreOrLess(item.description)}
                <button className={'btn btn-link pt-0 pb-0'}
                        onClick={handleToggleReadMore}>{readMorebuttonText}</button>
              </p>
            </div>
          </Card>
      )
    })
  }

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return <>
    <div className="container mt-5">
      <Header
          handleChange={(event) => handleChange(event)}
          searchValue={searchValue}
      />
      <FilmCardFunctional
          renderMovies={renderMovies()}
          handleChange={(event) => handleChange(event)}
          searchValue={searchValue}
      />
      {/*<FilmCard />*/}
    </div>
  </>
}

const Card = styled.div`
    img {
        width: 100%;
        max-width: 100%;
    }  
`

export default App
