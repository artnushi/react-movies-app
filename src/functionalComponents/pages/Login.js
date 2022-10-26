import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onFormSubmit = (ev) => {
        ev.preventDefault();
        console.log(email,password)
        
    }

    return (
        <div className="container  d-flex justify-content-center pt-5">
            <div className="app-wrapper">
                <div>
                    <h2 className="titile">Create Acount</h2>
                </div>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
                        <small id="emailHelp" className="form-text text-muted">Enter your email address</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(ev) => setPassword(ev.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p>You don't have an account? <Link to='/SignUp'>Create one</Link></p>
            </div>

        </div>


    )
}
export default LogIn