import React, { useState } from "react";
import Validation from "../components/Validation";
import "../App.css";

export default function SignUp() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
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
    setErrors(Validation(values));
  };
  return (
    <>
      <div className="container">
        <div className="card gap-3 m-5">
          <div>
            <h2 className="title m-5">Create Account</h2>
          </div>
          <form className="form-wrapper col-4 m-5">
            <div className=" form-check">
              <label className="label">Full Name</label>
              <input
                className=" form-control"
                type="text"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                required
              />
              {errors.fullname && <p className="error">{errors.fullname}</p>}
            </div>
            <div className="form-check">
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
            <div className="form-check">
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
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary text-center"
                onClick={handleFormSubmit}
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
