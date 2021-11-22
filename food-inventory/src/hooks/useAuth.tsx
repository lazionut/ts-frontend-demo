import { AxiosError } from "axios";
import { axiosInstance } from "../api/instance";

const loginService = {
  async login(username: string, password: string): Promise<any> {
    try {
      const resp = await axiosInstance.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      localStorage.setItem("token", resp.request);
      console.log(resp.request);
      return resp.data;
    } catch (error) {
      const apiError = error as AxiosError;
      if (apiError.response) {
        console.log(apiError.response.data);
      }
    }
  },
  logout() {
    localStorage.removeItem("token");
  },
};

export default loginService;
