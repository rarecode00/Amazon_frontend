import axios, { AxiosResponse } from "axios";

const baseURL = "https://amazon-clone-d3vd.onrender.com/";
// const baseURL = "http://localhost:8080"

const instance = axios.create({ baseURL: baseURL, });

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // Retrieve the token
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
export type unknownResponsePromise = Promise<AxiosResponse<unknown, unknown>>;
