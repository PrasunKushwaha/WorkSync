import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext"; 
import { useContext } from "react";

const Login = () => {
  const location = useLocation(); // Get current location
  const navigate = useNavigate();
const { setAuthToken } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: 
    async (values) => {
      try {
        console.log("Attempting to log in with:", values);
    
        const response = await axios.post("https://worksyncdbackend.onrender.com/api/users/login", {
          email: values.email,
          password: values.password.trim(),  // Remove any extra spaces
          headers: { "Content-Type": "application/json" },
        });
        
        
        console.log("API response received:", response);

        if (response.status === 200 && response.data) {
          toast.success("Login successful!");
          const token = response.data.token; // Extract the token 
           setAuthToken(token)
          localStorage.setItem("authToken", token);  // Store the token
          const redirectPath = location.state?.from || "/dash";
          navigate(redirectPath); 
        } else {
          console.log("Unexpected response format:", response);
          toast.error("Unexpected response from server");
        }
        
                // Log response data or handle successful login (like setting tokens)
        console.log("Login successful:", response.data);
      } catch (error) {
        const errorMessage = error.response?.data?.message || "Login failed!";
        toast.error(errorMessage); // Display error message
        if (error.response) {
          console.log("Error response data:", error.response.data);
          const errorMessage = error.response.data.message || "Login failed! Check your credentials.";
          toast.error(errorMessage);
        } else if (error.request) {
          console.log("No response received:", error.request);
          toast.error("No response from server. Please check your network.");
        } else {
          console.log("Error setting up request:", error.message);
          toast.error("An unexpected error occurred. Please try again.");
        }
        console.error("Error during login:", errorMessage);
      }
    },
  });

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">LOGIN</h2>

          <form onSubmit={formik.handleSubmit} className="space-y-4">
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

            <button
              type="submit"
              className="w-full py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
              SIGN IN
            </button>

            <div className="flex items-center justify-center mt-4">
              <span className="text-sm text-gray-500">SIGN IN WITH: </span>
              <button className="ml-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                  alt="Google"
                  className="w-6 h-6"
                />
              </button>
            </div>

            <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
             <Link to="/signup">
             <button className="hover:underline">
                Create Account
              </button>
             </Link> 

            
              <span className="mx-2">|</span>

             <Link to="/forgot">
             <button className="hover:underline">
                Forgot Password
              </button>
             </Link>
              
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
