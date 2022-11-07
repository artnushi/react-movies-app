import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import Flower from "../components/flowers/Flower";

function SightingsList() {
  const [sightings, setSightings] = useState([]);
  useEffect(() => {
    axios
      .get("https://flowrspot-api.herokuapp.com/api/v1/sightings")
      .then((res) => {
        if (res.status == 200) setSightings(res.data.sightings);
      });
  }, []);
  const renderMovies = () => {
    return sightings.map((sightings) => {
      return (
        <Flower
          name={sightings.name}
          key={sightings.id}
          image={sightings.picture}
          latin_name={sightings.name}
        />
      );
    });
  };

  return (
    <>
      <div className="row gap-md-3">{renderMovies()}</div>
    </>
  );
}

SightingsList.propTypes = {
  handleChange: PropTypes.func,
};

export default SightingsList;
