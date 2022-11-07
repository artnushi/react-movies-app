import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { SearchContext } from "../../pages/Home";
import PropTypes from "prop-types";
import axios from "axios";
import Flower from "./Flower";

function FlowersList(props) {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    axios
      .get("https://flowrspot-api.herokuapp.com/api/v1/flowers")
      .then((res) => {
        if (res.status === 200)
          setFlowers(res.data.flowers)
      })
  }, [])
  const renderMovies = () => {
    const searchValue = useContext(SearchContext).searchValue;

    const filteredFlowers = flowers.filter((flower) => {
      if (
        flower.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        flower.latin_name.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return true;
      }

      if (searchValue === "") {
        return flower;
      }

      return false;
    })

    return filteredFlowers.map((flower) => {
      return (
        <Flower key={flower.id} flower={flower} image={flower.profile_picture} />
      );
    });
  };

  return (
    <>
      <div className="row">{renderMovies()}</div>
    </>
  );
}

FlowersList.propTypes = {
  handleChange: PropTypes.func,
};

const Card = styled.div`
  img {
    width: 100%;
    max-width: 100%;
  }
`;

export default FlowersList;
