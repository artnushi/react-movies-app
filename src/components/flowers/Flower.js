import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import api from "../../helpers/api";

const Card = styled.div`
  img {
    width: 100%;
    max-width: 100%;
  }
`;

const Flower = (props) => {
    const addFavorite = (id) => {
        api.post(`/flowers/${id}/favorites`).then( (response) => {
            console.log('added to favorite!', response)
        }, () => {
            console.log('not added to favorite!')
        })
    }

    const {id, name, latin_name, favorite} = props.flower;
    const image = props.image;

    return (
        <>
            <div className={"col-md-3 mb-4"}>
                <Card className="card">
                    <img
                        src={image}
                        className="card-img-top mb-4"
                        alt="..."
                    />

                    <h3>{name}</h3>
                    <div className="card-body">
                        <p className="card-text">
                            Latin Name: {(latin_name)}

                        </p>
                    </div>

                    {!favorite &&
                        <button type={'button'} className={'btn btn-primary'} onClick={ () => addFavorite(id)} disabled={favorite}>Add favorite</button>
                    }

                </Card>
            </div>
        </>

    )
}

Flower.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    latin_name: PropTypes.string
}
export default Flower