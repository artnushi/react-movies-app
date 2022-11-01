import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import axios from "axios";
import api from "../helpers/api";

function AuthenticatedUser() {

    const [user, setUser] = useState({
        first_name: '',
        last_name: ''
    });

    useEffect( () => {
        console.log('component mounted')
        api('https://flowrspot-api.herokuapp.com/api/v1/users/me').then( (response) => {
            setUser(response.data.user)
        })
    }, [])

    console.log('user', user)

    if (!user) {
        return (
            <>
                <Layout showSearch={false}>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </Layout>
            </>
        )
    }

    return (
        <Layout showSearch={false}>

            <h1>Authenticated user page</h1>

            <h3>First Name: {user.first_name}</h3> <br/>
            <h3>Last Name: {user.last_name}</h3>
        </Layout>
    );
}

export default AuthenticatedUser;