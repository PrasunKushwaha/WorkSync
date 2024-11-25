import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom"; // Import hooks

// Import AuthContext
import { AuthContext } from "./context/AuthContext";

const Signup = () => {
  const navigate = useNavigate(); // Enable useNavigate hook
  const location = useLocation(); // Enable useLocation hook
  const { setAuthToken } = useContext(AuthContext); // Access the context to set the auth token

  // Get the previous page (if any) to redirect after successful signup
  const previousPage = location.state?.from || "/dash"; // Default to '/' if no previous page

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "", // Initial value for role
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
      role: Yup.string()
        .oneOf(["employer", "candidate"], "Select a valid role")
        .required("Role is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/register",
          { name: values.name, email: values.email, password: values.password, role: values.role },
          { headers: { "Content-Type": "application/json" } }
        );

        console.log("User registered successfully:", response.data);
        toast.success("User registered successfully!");

        const token = response.data.token;
        setAuthToken(token); // Update the authToken in context

        // Redirect to the previous page (or default to the homepage)
        setTimeout(() => {
          navigate(previousPage); // Redirect to previous page after a successful registration
        }, 2000); // Optional delay before redirecting
      } catch (error) {
        const errorMsg = error.response?.data?.error || "Registration failed!";
        if (errorMsg === "User already exists") {
          toast.error("User already exists. Please try logging in.");
        } else {
          toast.error(errorMsg);
        }
      }
    },
  });

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">SIGN UP</h2>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Form Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-600">Name *</label>
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
  <label className="block text-sm font-medium text-gray-600">Email *</label>
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
  <label className="block text-sm font-medium text-gray-600">Password *</label>
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
  <label className="block text-sm font-medium text-gray-600">Confirm Password *</label>
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

<div>
  <label className="block text-sm font-medium text-gray-600">Role *</label>
  <select
    name="role"
    className={`w-full px-4 py-2 mt-1 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
      formik.touched.role && formik.errors.role
        ? "border-red-500 ring-red-500"
        : "focus:ring-blue-500"
    }`}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.role}
  >
    <option value="" label="Select a role" />
    <option value="employer" label="Employer" />
    <option value="candidate" label="Candidate" />
  </select>
  {formik.touched.role && formik.errors.role ? (
    <p className="mt-1 text-xs text-red-500">{formik.errors.role}</p>
  ) : null}
</div>


            <button
              type="submit"
              className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
