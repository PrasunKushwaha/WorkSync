// Signup.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form data:", values);
      // Handle form submission here (e.g., send data to an API)
    },
  });

  return (<> 
 
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white">SIGN UP</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={`w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500 ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="mt-1 text-xs text-red-500">{formik.errors.name}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email *
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500 ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="mt-1 text-xs text-red-500">{formik.errors.email}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password *
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500 ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="mt-1 text-xs text-red-500">{formik.errors.password}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Confirm Password *
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "border-red-500 ring-red-500"
                  : "focus:ring-blue-500"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="mt-1 text-xs text-red-500">{formik.errors.confirmPassword}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            SIGN UP
          </button>

          <div className="flex items-center justify-center mt-4">
            <span className="text-gray-500 text-sm">SIGN UP WITH: </span>
            <button className="ml-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google"
                className="w-6 h-6"
              />
            </button>
          </div>

          <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
            <a href="#" className="hover:underline">
              Already have an account? Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
   
  </>);
};

export default Signup;
