import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import Layout from "../components/Layout";
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short!')
        .max(100, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Write passwords with length > 6 ')
        .required('Required'),
});


export default function LoginFormik() {
    let navigate = useNavigate();

    const handleFormSubmit = (values) => {
        console.log(values)

        axios
            .post("https://flowrspot-api.herokuapp.com/api/v1/users/login", values)
            .then(function (response) {
                navigate('/authenticated-user')

            })
            .catch(function (error) {
                alert('error, please sign up')
                navigate('/register')
            });

        console.log("values", values);

    };
    return (
        <>
            <Layout showSearch={false}>
                <div className="card gap-3 m-5">
                    <div>
                        <h2 className="title m-5">Login</h2>
                    </div>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        onSubmit={handleFormSubmit}
                        validationSchema={LoginSchema}
                    >
                        {({ errors, touched }) => (
                            <Form>

                                <div className="row p-5">
                                    <div className="col-12 col-md-6">
                                        <label className="label">Email</label>
                                        <Field
                                            id="email"
                                            placeholder="Write email"
                                            name="email"
                                            className=" form-control"
                                            type="email"
                                        />
                                        {errors.email && touched.email ? (
                                            <div>{errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label className="label">Password</label>
                                        <Field
                                            id="email"
                                            name="password"
                                            className="form-control"
                                            type="password"
                                        />
                                        {errors.password && touched.password ? (
                                            <div>{errors.password}</div>
                                        ) : null}
                                    </div>
                                    <button type="submit" className="btn btn-primary text-center w-100">Log in</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Layout>
        </>
    );
}
