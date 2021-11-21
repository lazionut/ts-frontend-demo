import axios from "axios";
const { API_URL } = process.env;

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api" ,
    headers: {}
  });