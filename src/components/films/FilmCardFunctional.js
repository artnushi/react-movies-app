import React, { useContext, useEffect, useState } from "react";
import { movies } from "../../helpers/data";
import styled from "styled-components";
import { SearchContext } from "../../pages/Home";
import PropTypes from "prop-types";
import Header from "../../functionalComponents/header/Header";

function FilmCardFunctional(props) {
  const [readMorebuttonText, setReadMorebuttonText] = useState("Read more");
  const [toggleReadMore, setToggleReadMore] = useState(false);
  // const [searchValue, setSearchValue] = useState('');

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

  const renderMovies = () => {
    const searchValue = useContext(SearchContext).searchValue;

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
          <div key={item._id} className={" col-md-3 mb-4"}>
            <Card className="card">
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
          </div>
        );
      });
  };

  return (
    <>
      <div className="row gap-md-3">{renderMovies()}</div>
    </>
  );
}

FilmCardFunctional.propTypes = {
  handleChange: PropTypes.func,
};

const Card = styled.div`
  img {
    width: 100%;
    max-width: 100%;
  }
`;

export default FilmCardFunctional;
