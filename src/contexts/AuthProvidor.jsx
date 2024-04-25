/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export let tokenContext = createContext();

export default function AuthProvider({ children }) {
    let token = useState(null);
    return (
        <tokenContext.Provider value={token}>
            {children}
        </tokenContext.Provider>
    )
}