import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import {useDispatch, connect} from "react-redux";
import {fetchFavoriteFlowersRequest} from "../store/app/flowers";
import Flower from "../components/flowers/Flower";

function FavoriteFlowersPage(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( fetchFavoriteFlowersRequest() );
    }, [])

    const renderFavoriteFlowers = () => {
        let favorite_flowers = props.flowers.data;

        return favorite_flowers.map((item) => {
            console.log('item on favorite_flowers', item.flower)
            return (
                <Flower key={item.id} flower={item.flower} image={item.flower.profile_picture} />
            );
        });
    };



    return (
        <Layout>
            <div className="container mt-5">
                <div className="row">
                    {renderFavoriteFlowers()}
                </div>
            </div>
        </Layout>
    );
}

FavoriteFlowersPage.propTypes = {

};

export default connect(state => state)(FavoriteFlowersPage);