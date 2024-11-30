import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import JobDetails from "./JobDetails";
import JobPosting from "./JobPosting";
import CandidateReview from "./CandidateReview";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "./ProfilePage";
import Sidebar from "./Sidebar";
import ForgotPassword from "./ForgotPassword";
import Quiz from "./Quiz";
import JobInterview from "./JobInterview";
import Coach from "./Coach";
import About from "./About";
import ContactUs from "./ContactUs";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/dash"
          element={
            <ProtectedRoute>
              <Sidebar />
            </ProtectedRoute>
          }
        />

         <Route
          path="/pi"
          element={
            <ProtectedRoute>
              <JobInterview/>
            </ProtectedRoute>
          }
        />

            <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />

          <Route
          path="/coach"
          element={
            <ProtectedRoute>
              <Coach/>
            </ProtectedRoute>
          }
        />

        {/* Protected routes */}
        <Route
          path="/jobdetails"
          element={
            <ProtectedRoute>
              <JobDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobposting"
          element={
            <ProtectedRoute>
              <JobPosting />
            </ProtectedRoute>
          }
        />
        <Route
          path="/candidatereview"
          element={
            <ProtectedRoute>
              <CandidateReview />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
