import React, { useEffect } from 'react';
import { useState } from 'react';
import Layout from "../components/Layout";
import SightingList from '../components/sightings/SightingList';
import { SearchContext } from './Home';
import {useDispatch, connect} from "react-redux";
import {fetchSightingsRequest} from "../store/app/sightings";

function SightingsPage() {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };


    const dispatch = useDispatch();

    useEffect(() => {
        // console.log('component mounted')
        dispatch( fetchSightingsRequest() );
    }, [])

    return (
        <SearchContext.Provider
            value={{
                searchValue: searchValue,
                handleChange: (event) => handleChange(event),
            }}
        >
            <Layout showSearch={true}>
                <div className="container mt-5">
                    <SightingList />
                </div>
            </Layout>
        </SearchContext.Provider>
    );
}

export default connect(state => state)(SightingsPage);