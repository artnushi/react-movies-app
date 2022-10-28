import React, {useState} from "react";
import "../App.css";
import axios from "axios";
import Layout from "../components/Layout";
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
    let navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };



    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios
            .post("https://flowrspot-api.herokuapp.com/api/v1/users/login", values)
            .then(function (response) {
                console.log("success", response);


                navigate('/authenticated-user')

            })
            .catch(function (error) {

                alert('error, please sign up')
                navigate('/register')
            });

        console.log("values", values);
        // setErrors(Validation(values));
    };
    return (
        <>

            <Layout showSearch={false}>
                <div className="card gap-3 m-5">
                    <div>
                        <h2 className="title m-5">Login</h2>
                    </div>
                    <form className="m-5" onSubmit={handleFormSubmit}>
                        <div className={"row"}>
                            <div className="col-12 col-md-6">
                                <label className="label">Email</label>
                                <input
                                    className=" form-control"
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>

                            <div className="col-12 col-md-6">
                                <label className="label">Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <p className="error">{errors.password}</p>}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-12 my-5">
                                <button
                                    type="submit"
                                    className="btn btn-primary text-center w-100"
                                >
                                    Log in
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    );
}
