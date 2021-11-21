import { axiosInstance } from "./instance";

axiosInstance.interceptors.request.use( res => res.data,
    err => {
      if (err.response.status === 404) {
        throw new Error(`${err.config.url} not found`);
      }
      throw err;
    });

axiosInstance.interceptors.response.use(res => {
    console.log(res);
    // Important: response interceptors **must** return the response.
    return res;
  });

