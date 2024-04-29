/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom"

export default function ProtectRoutes({ children }) {
    const auth = localStorage.getItem("userTokenC");
    const location = useLocation();

    if (auth) {
        return children
    }
    else {
        return <Navigate to={"/login"} state={{ from: location }} replace />
    }

}

