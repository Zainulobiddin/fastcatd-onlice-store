import axios from "axios";
import { API } from "./config";

export const axiosReguest = axios.create({
    baseURL: API,
    // headers: {'Authorization' : `Bearer ${localStorage.getItem('token')}`}
})

axiosReguest.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (error) =>  {
        return Promise.reject(error)
    }
)

export const axiosStandart = axios.create({
    baseURL: API
})