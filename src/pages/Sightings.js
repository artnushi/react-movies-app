import React, { useEffect } from 'react';
import { useState } from 'react';
import Layout from "../components/Layout";
import SightingList from '../components/sightings/SightingList';
import { SearchContext } from './Home';

function SightingsPage() {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };


    useEffect(() => {
        console.log('component mounted')
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

export default SightingsPage;