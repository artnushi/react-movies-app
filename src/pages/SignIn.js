import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignIn() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Please enter valid email").required("Required").min(2, "To short!").max(100, "To Long!"),
            password: Yup.string().required("Requaired").min(6, "Password need to be longer than 6 characters")
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className="card gap-3 m-5">
            <div>
                <h2 className=" m-5 container d-flex justify-content-center">Login</h2>
            </div>
            <form onSubmit={formik.handleSubmit} className="m-5">
                <div className="row container d-flex justify-content-center">
                    <div className="col-12 col-md-6 ">
                        <label className="label">Email</label>
                        <input
                            className=" form-control"
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <p className="text-danger">{formik.errors.email}</p>
                        ) : null}
                    </div>
                    <div className="container d-flex justify-content-center">
                        <div className="col-12 col-md-6">
                            <label className="label">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <p className="text-danger">{formik.errors.password}</p>
                            ) : null}
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
                </div>
            </form>
        </div>
    );
}
