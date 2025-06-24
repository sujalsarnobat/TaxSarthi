import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a context for the user-related state
const UserContext = createContext();

// Create a provider component that will wrap your application
const UserProvider = ({ children }) => {
  // State variables for the user info
  const [user, setUser] = useState();

  // React router's navigate function for redirection
  const navigate = useNavigate();

  // useEffect to check if the user is logged in
  useEffect(() => {
    // Retrieve user info from local storage
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    // Set user state with the retrieved user info
    setUser(userInfo);

    // If no user info is found, redirect to the login page
    if (!userInfo) navigate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  // Provide the context values to the components
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access the user-related context values
export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;
