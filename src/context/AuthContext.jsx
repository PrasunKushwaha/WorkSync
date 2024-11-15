import React, { createContext, useState, useEffect } from "react";

// Create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken") || null);

  // Update authToken when it's set in localStorage
  useEffect(() => {
    if (authToken) {
      localStorage.setItem("authToken", authToken);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [authToken]);

  // Derive the logged-in state from the authToken
  const isLoggedIn = Boolean(authToken);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
