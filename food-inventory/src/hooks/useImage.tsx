import { AxiosError } from "axios";
import { axiosInstance } from "../api/instance";

const imageService = {
  async trainImage(): Promise<any> {
    try {
      const resp = await axiosInstance.get("http://localhost:3000/api/train");
      return resp.data;
    } catch (error) {
      const apiError = error as AxiosError;
      if (apiError.response) {
        console.log(apiError.response.data);
      }
    }
  },

  async evaluateImage(): Promise<any> {
    try {
      const resp = await axiosInstance.post(
        "http://localhost:3000/api/evaluate"
      );
      return resp.data;
    } catch (error) {
      const apiError = error as AxiosError;
      if (apiError.response) {
        console.log(apiError.response.data);
      }
    }
  },
};

export default imageService;
