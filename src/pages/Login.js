import React, { useState } from "react";
import Validation from "../components/Validation";
import "../App.css";
import HeaderPage from "../components/header/HeaderPage";
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
    console.log(e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .get("https://flowrspot-api.herokuapp.com/api/v1/users/register", values)
      .then(function (response) {
        console.log("success", response);
      })
      .catch(function (error) {
        // console.log('error', error.response.data.error);
      });

    console.log("values", values);
    // setErrors(Validation(values));
  };
  return (
    <>
      <div className="container">
        <HeaderPage />
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
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
