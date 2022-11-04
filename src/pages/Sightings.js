import React, {useEffect} from 'react';
import Layout from "../components/Layout";

function Sightings() {


    useEffect( () => {
        console.log('component mounted')
    }, [])

    return (
        <Layout>

            Sightings
        </Layout>
    );
}

export default Sightings;