import React from 'react';
import PropTypes from "prop-types";
import Header from "./header/Header";

function Layout({children, showSearch = false}) {

    return (
        <>
            <div className="container">
                <Header showSearch={showSearch} />
                {children}
            </div>
        </>
    );
}

Layout.propTypes = {
    showSearch: PropTypes.bool,
    children: PropTypes.node
}

export default Layout;