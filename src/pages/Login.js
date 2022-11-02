import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { Form, Formik, Field, withFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import api from "../helpers/api";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required!").email("Must be email"),
  password: Yup.string()
    .required("Your password is required!")
    .min(8, "Minimum 8 characters are required"),
});

function Login(props) {
  let navigate = useNavigate();

  const handleFormSubmit = (values) => {
    console.log(values);

    api
      .post("/users/login", values)
      .then((response) => {
        const auth_token = response.data.auth_token;

        localStorage.setItem("auth_token", auth_token);
        localStorage.setItem("isAuthenticated", true);

        navigate("/authenticated-user");
      })
      .catch((error) => {
        alert("error, please sign up");
        navigate("/register");
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
              password: "",
            }}
            onSubmit={handleFormSubmit}
            validationSchema={LoginSchema}
          >
            {(props) => (
              <Form>
                <label className="label">Email</label>
                <Field
                  className=" form-control"
                  type="text"
                  name="email"
                  value={props.values.email}
                  onChange={props.handleChange}
                />

                {props.touched.email && props.errors.email && (
                  <p className="text-danger">{props.errors.email}</p>
                )}

                <label className="label">Password</label>
                <Field
                  className=" form-control"
                  type="password"
                  name="password"
                  value={props.values.password}
                  onChange={props.handleChange}
                />

                {props.touched.password && props.errors.password && (
                  <p className="text-danger">{props.errors.password}</p>
                )}

                <div className="mt-4 mb-2">
                  <button
                    disabled={!(props.dirty && props.isValid)}
                    type="submit"
                    className="btn btn-primary text-center w-100"
                  >
                    Log in
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
    </>
  );
}

Login.propTypes = {
  dirty: PropTypes.bool,
  errors: PropTypes.object,
  handleChange: PropTypes.func,
  isValid: PropTypes.bool,
  resetForm: PropTypes.func,
  touched: PropTypes.object,
  values: PropTypes.object,
  handleFormSubmit: PropTypes.func,
};

export default Login;
