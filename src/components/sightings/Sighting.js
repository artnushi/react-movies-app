import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  img {
    width: 100%;
    max-width: 100%;
  }
`;

const Sighting = (props) => {
    return (
        <>
            <div key={props.id} className={" col-md-3 mb-4"}>
                <Card className="card">
                    <img
                        src={props.image}
                        className="card-img-top mb-4"
                        alt="..."
                    />

                    <h3>{props.name}</h3>
                    <div className="card-body">
                        <p className="card-text">
                            Likes: {(props.likes_count)}
                        </p>
                        <p className="card-text">
                            Latitude: {(props.latitude)}
                        </p>
                        <p className="card-text">
                            Longitude: {(props.longitude)}
                        </p>
                    </div>
                </Card>
            </div>
        </>

    )
}

Sighting.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    likes_count: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number
}
export default Sighting