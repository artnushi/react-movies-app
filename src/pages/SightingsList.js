import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import Sightings from "./Sightings"

function SightingsList(props) {
    const [sightings, setSightings] = useState([])

    useEffect(() => {
        axios
            .get("https://flowrspot-api.herokuapp.com/api/v1/sightings")
            .then((res) => {
                if (res.status == 200)
                    setSightings(res.data.sightings)
            })

    }, [])
    const renderSightings = () => {
        return sightings.map((sighting) => {
            return (
                <>
                    <Sightings name={sighting.name} key={sighting.id} image={sighting.picture} latin_name={sighting.description} />

                </>
            );


        });
    };

    return (
        <>
            <div className="row gap-md-3">{renderSightings()}</div>
        </>
    );

}

SightingsList.propTypes = {
    handleChange: PropTypes.func,
};

const Card = styled.div`
  img {
    width: 100%;
    max-width: 100%;
  }
`;

export default SightingsList;
