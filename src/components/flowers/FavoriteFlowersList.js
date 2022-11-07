import React from "react";
import {connect} from "react-redux";


function FavoriteFlowersList(props) {
  return (
    <>
      <div className="row">
        favorite flowers here
      </div>
    </>
  );
}

FavoriteFlowersList.propTypes = {

};

export default connect(state => state)(FavoriteFlowersList);

