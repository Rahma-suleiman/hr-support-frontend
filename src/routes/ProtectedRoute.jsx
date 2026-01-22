// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({children, allowedRoles}) => {

//     const token = localStorage.getItem("token");   // JWT token
//     const role = localStorage.getItem("role");     // User role

//     if (!token) {
//         // If not logged in, redirect to login
//         return <Navigate to="/login" replace />
//     }
//     if (allowedRoles && !allowedRoles.includes(role)) {
//         // If logged in but role not allowed, redirect to unathorized page
//         return <Navigate to="/unathorized" replace />
//     }

//     // If logged in and role is allowed, render the component
//     return children
   
// }

// export default ProtectedRoute;
