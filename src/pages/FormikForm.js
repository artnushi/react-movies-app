import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="m-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <label className="label">First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p className="text-danger">{formik.errors.firstName}</p>
          ) : null}
        </div>

        <div className="col-12 col-md-6">
          <label className="label">Last Name</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p className="text-danger">{formik.errors.lastName}</p>
          ) : null}
        </div>
      </div>

      <div className={"row"}>
        <div className="col-12 col-md-6">
          <label className="label">Email</label>
          <input
            className=" form-control"
            type="text"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-danger">{formik.errors.email}</p>
          ) : null}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12 my-5">
          <button type="submit" className="btn btn-primary text-center w-100">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
