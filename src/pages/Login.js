import React, { useState } from "react";
import Validation from "../components/Validation";
import "../App.css";
import HeaderPage from "../components/header/HeaderPage";

export default function SignUp() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    console.log("values", values);
  };
  return (
    <>
      <div className="container">
        <HeaderPage />

        <div>
          <h2 className="title row container d-flex justify-content-center">Welcome back</h2>
        </div>
      </div>
      <form className="m-5" onSubmit={handleFormSubmit}>
        <div className="row container d-flex justify-content-center">
          <div className="col-12 col-md-6">
            <label className="label">Email</label>
            <input
              className="form-control"
              placeholder="Email"
              type="text"
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
              required
            />
            {errors.first_name && (
              <p className="error">{errors.first_name}</p>
            )}
          </div>
        </div>
        <div className="row container d-flex justify-content-center ">

          <div className="col-12 col-md-6 ">
            <label className="label">Password</label>
            <input
              className="form-control"
              placeholder="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
        </div>

        <div className="row container ">
          <div className="col-12 col-md-12 my-5 d-flex justify-content-center ">
            <button
              type="submit"
              className="btn btn-primary text-center w-50"
            >
              Login to your Account
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
