/* eslint-disable react/prop-types */
import { createContext } from "react";

export let tokenContext = createContext();

export default function AuthProvider({ children }) {
    let token = localStorage.getItem("customer_dash_token");
    return (
        <tokenContext.Provider value={token}>
            {children}
        </tokenContext.Provider>
    )
}