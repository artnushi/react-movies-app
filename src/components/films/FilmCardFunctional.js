import React from 'react';
import PropTypes from "prop-types";

function FilmCardFunctional(props) {
    return (
        <>
            <div className="row">
                {props.renderMovies}
            </div>
        </>
    );
}

FilmCardFunctional.propTypes = {
    searchValue: PropTypes.string,
    handleChange: PropTypes.func,
    renderMovies: PropTypes.func
}

export default FilmCardFunctional;