import axios from "axios";
import { API } from "./config";

export const axiosReguest = axios.create({
    baseURL: API,
    headers: {'Authorization' : `Bearer ${localStorage.getItem('token')}`}
})


export const axiosStandart = axios.create({
    baseURL: API
})