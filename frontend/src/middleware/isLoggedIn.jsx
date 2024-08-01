// import React from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";

// // This function checks if the user is authenticated
// const isLoggedIn = async () => {
//   // Implement your authentication logic here

//   // For example, check if there's a valid auth token in localStorage

//   const email = localStorage.getItem("email");
//   console.log(email);
//   const apidata = await axios.post(
//     "http://localhost:8000/check-loggedIn-user",
//     email
//   );
//   if (apidata.data.status === "ok") return true; // Return true if authenticated, false otherwise
// };

// const ProtectedRoute = ({ element, ...rest }) => {
//   const isAuthenticated = isLoggedIn();

//   // If authenticated, render the element; otherwise, redirect to login page
//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

// export default ProtectedRoute;
