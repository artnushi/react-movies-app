import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")

    const onFormSubmit = (ev) => {
        ev.preventDefault();
        if (password1 == password2) {
            console.log(email, password1, password2)
            
        }else{
            console.log('Passwords are not same!')
        }
        
    }

    return (
        <div className="container d-flex justify-content-center ">
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
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password1} onChange={(ev) => setPassword1(ev.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Confirm password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" value={password2} onChange={(ev) => setPassword2(ev.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p>You already have an account? <Link to='/Login'>Log In</Link></p>
            </div>

        </div>


    )
}
export default SignUp