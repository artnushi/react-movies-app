import React from 'react';
import Layout from "../components/Layout";

function AuthenticatedUser() {

    return (
        <Layout showSearch={false}>

            <h1>Authenticated user page</h1>

            <h3>First Name: Art</h3> <br/>
            <h3>Last Name: Nushi</h3>
        </Layout>
    );
}

export default AuthenticatedUser;