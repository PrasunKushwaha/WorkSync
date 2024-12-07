import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login"; // Google OAuth package
import GitHubLogin from "react-github-login"; // GitHub OAuth package

// Import AuthContext
import { AuthContext } from "./context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuthToken } = useContext(AuthContext);

  const previousPage = location.state?.from || "/dash";

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
      role: Yup.string().oneOf(["employer", "candidate"], "Select a valid role").required("Role is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://worksyncdbackend.onrender.com/api/users/register",
          { name: values.name, email: values.email, password: values.password, role: values.role },
          { headers: { "Content-Type": "application/json" } }
        );

        console.log("User registered successfully:", response.data);
        toast.success("User registered successfully!");

        const token = response.data.token;
        setAuthToken(token);

        setTimeout(() => {
          navigate(previousPage);
        }, 2000);
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

  const handleGoogleResponse = async (response) => {
    const { tokenId } = response;
    try {
      const res = await axios.post(
        "https://worksyncdbackend.onrender.com/api/users/google-login",
        { token: tokenId },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Google Login Successful:", res.data);
      toast.success("Google Login successful!");
      const token = res.data.token;
      setAuthToken(token);
      navigate(previousPage);
    } catch (error) {
      toast.error("Google login failed!");
    }
  };

  const handleGitHubResponse = async (response) => {
    const { code } = response;
    try {
      const res = await axios.get(
        `https://worksyncdbackend.onrender.com/api/users/github-login?code=${code}`
      );

      console.log("GitHub Login Successful:", res.data);
      toast.success("GitHub Login successful!");
      const token = res.data.token;
      setAuthToken(token);
      navigate(previousPage);
    } catch (error) {
      toast.error("GitHub login failed!");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
      <div className="flex items-center justify-center min-h-screen mt-10 bg-gray-100 dark:bg-gray-900 dark:text-white">
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

            {/* Email Field */}
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

            {/* Password Field */}
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

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600">Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className={`w-full px-4 py-2 mt-1 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 ${
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

            {/* Role Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600">Role *</label>
              <select
                name="role"
                className={`w-full px-4 py-2 mt-1 text-gray-600 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 ${
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

            {/* Sign-up Button */}
            <button
              type="submit"
              className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
              SIGN UP
            </button>

            {/* Google and GitHub OAuth Buttons */}
            <div className="mt-4 space-y-2">
              <GoogleLogin
                clientId="YOUR_GOOGLE_CLIENT_ID"
                buttonText="Login with Google"
                onSuccess={handleGoogleResponse}
                onFailure={(error) => toast.error("Google login failed")}
                cookiePolicy="single_host_origin"
                className="w-full py-2 text-white bg-red-600 rounded-lg"
              />
              <GitHubLogin
                clientId="YOUR_GITHUB_CLIENT_ID"
                onSuccess={handleGitHubResponse}
                onFailure={(error) => toast.error("GitHub login failed")}
                className="w-full py-2 text-white bg-black rounded-lg"
              />
            </div>

            {/* Already have an account link */}
            <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
              <Link to="/login">
                <button className="hover:underline">Already have an Account?</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
