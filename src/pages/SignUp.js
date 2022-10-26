import React, {useState} from "react";
import Validation from "../components/Validation";
import "../App.css";
import HeaderPage from "../components/header/HeaderPage";
import {DatePickerInput} from "../components/DatePicker";
import axios from "axios";

export default function SignUp() {

    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        date_of_birth: "",
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

        axios.post('https://flowrspot-api.herokuapp.com/api/v1/users/register', values)
            .then(function (response) {
                console.log('success', response);
            })
            .catch(function (error) {
                // console.log('error', error.response.data.error);
            });

        console.log('values', values)
        // setErrors(Validation(values));
    };

    return (
        <>
            <div className="container">
                <HeaderPage/>

                <div>
                    <h2 className="title m-5">Create Account</h2>
                </div>

                <form className="m-5" onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <label className="label">First Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="first_name"
                                value={values.first_name}
                                onChange={handleChange}
                                required
                            />
                            {errors.first_name && <p className="error">{errors.first_name}</p>}
                        </div>

                        <div className="col-12 col-md-6">
                            <label className="label">Last Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="last_name"
                                value={values.last_name}
                                onChange={handleChange}
                                required
                            />
                            {errors.last_name && <p className="error">{errors.last_name}</p>}
                        </div>
                    </div>

                    <div className={'row'}>
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

                        <div className="col-12 col-md-6">
                            <DatePickerInput name={'date_of_birth'} setValues={setValues} values={values} value={values.date_of_birth} />
                            {/*<input type="date" name={'date_of_birth'} value={values.date_of_birth} />*/}
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-12 col-md-12 my-5">
                            <button
                                type="submit"
                                className="btn btn-primary text-center w-100"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>


                </form>
            </div>
        </>
    );
}
