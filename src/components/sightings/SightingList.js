import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import SightingItem from "./Sighting";
import { SearchContext } from "../../pages/Home";


function SightingList(props) {
  const searchValue = useContext(SearchContext).searchValue;
  const [sightingItem, setSightingItem] = useState([])

  useEffect(() => {
    axios
      .get("https://flowrspot-api.herokuapp.com/api/v1/sightings")
      .then((res) => {
        if (res.status == 200)
          setSightingItem(res.data.sightings)
      })
  }, [])
  const renderSightings = () => {
    const filteredSightings = sightingItem.filter((item) => {
      if (
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return true;
      }

      if (searchValue === "") {
        return item;
      }

      return false;
    })

    return filteredSightings.map((item) => {
      return (
        <SightingItem name={item.name} key={item.id} image={item.picture} likes_count={item.likes_count} latitude={item.latitude} longitude={item.longitude} />
      );
    });
  };

  return (
    <>
      <div className="row gap-md-3">{renderSightings()}</div>
    </>
  );
}

SightingList.propTypes = {
  handleChange: PropTypes.func,
};

const Card = styled.div`
  img {
    width: 100%;
    max-width: 100%;
  }
`;

export default SightingList;
