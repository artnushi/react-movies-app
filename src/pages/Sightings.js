import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
const Card = styled.div`
  img {
    width: 100%;
    max-width: 100%;
  }
`;

const Sightings = (props) => {
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
                            Latin Name: {(props.latin_name)}

                        </p>
                    </div>
                </Card>
            </div>
        </>

    )
}

Sightings.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    latin_name: PropTypes.string
}
export default Sightings