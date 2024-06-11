import axios from "axios";

export const instance = axios.create({
    baseURL: localStorage.getItem("customer_dash_url"),
});