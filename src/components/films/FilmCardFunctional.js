<<<<<<< HEAD
import React, { useState } from "react";
import { movies } from "../../helpers/data";
import styled from "styled-components";
import Header from "../../functionalComponents/header/Header";

function FilmCardFunctional(props) {
  const [readMorebuttonText, setReadMorebuttonText] = useState("Read more");
  const [toggleReadMore, setToggleReadMore] = useState(false);
  const [searchValue, setSearchValue] = useState("");
=======
import React, {useContext, useEffect, useState} from 'react';
import {movies} from "../../helpers/data";
import styled from "styled-components";
import {SearchContext} from "../../App";
import PropTypes from "prop-types";
import Header from "../../functionalComponents/header/Header";

function FilmCardFunctional(props) {
    const [readMorebuttonText, setReadMorebuttonText] = useState('Read more');
    const [toggleReadMore, setToggleReadMore] = useState(false);
    // const [searchValue, setSearchValue] = useState('');
>>>>>>> 29215454b9af8833ef67c58e4fb6a25c0a06d18f

  const handleToggleReadMore = () => {
    if (!toggleReadMore) {
      setToggleReadMore(true);
      setReadMorebuttonText("Read less");
    } else {
      setToggleReadMore(false);
      setReadMorebuttonText("Read more");
    }
  };

  const readMoreOrLess = (description) => {
    if (!toggleReadMore && description.length > 80) {
      return description.substr(0, 80) + "...";
    } else {
      return description;
    }
  };

<<<<<<< HEAD
  const renderMovies = () => {
    return movies
      .filter((movie) => {
        if (
          movie.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.description.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return true;
        }

        if (searchValue === "") {
          return movie;
        }

        return false;
      })
      .map((item) => {
        return (
          <Card key={item._id} className="card col-md-3 mb-4 me-4">
            <img
              src={`./${item.img}`}
              className="card-img-top mb-4"
              alt="..."
            />

            <h3>{item.title}</h3>
            <div className="card-body">
              <p className="card-text">
                {readMoreOrLess(item.description)}
                <button
                  className={"btn btn-link pt-0 pb-0"}
                  onClick={handleToggleReadMore}
                >
                  {readMorebuttonText}
                </button>
              </p>
            </div>
          </Card>
        );
      });
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <Header handleChange={handleChange} searchValue={searchValue} />
      <div className="row">{renderMovies()}</div>
    </>
  );
=======
    const renderMovies = () => {
        const searchValue = useContext(SearchContext).searchValue;

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
                <div key={item._id} className={' col-md-3 mb-4'}>
                    <Card  className="card">
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
                </div>
            )
        })
    }

    return (
        <>
            <div className="row gap-md-3">
                {renderMovies()}
            </div>
        </>
    );
>>>>>>> 29215454b9af8833ef67c58e4fb6a25c0a06d18f
}

FilmCardFunctional.propTypes = {
    handleChange: PropTypes.func
};

const Card = styled.div`
  img {
    width: 100%;
    max-width: 100%;
  }
`;

export default FilmCardFunctional;
