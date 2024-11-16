import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    let [auth, setAuth] = useState(
        JSON.parse(localStorage.getItem("userToken") || ""),
    );
    return auth ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;