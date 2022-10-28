import React from 'react';
import PropTypes from "prop-types";
import Header from "./header/Header";

function Layout(props) {
    return (
        <>
            <div className="container">
                <Header showSearch={props.showSearch} />
                {props.children}
            </div>
        </>
    );
}

Layout.propTypes = {
    showSearch: PropTypes.bool,
    children: PropTypes.node
}

export default Layout;