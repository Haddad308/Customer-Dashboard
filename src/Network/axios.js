import axios from "axios";

export const instance = axios.create({
    baseURL: "https://highnox.site/highnox",
});