import { AxiosError } from "axios";
import { axiosInstance } from "../api/instance";

const dateIntervalService = {
  async postDateInterval(startDate: number, endDate: number): Promise<any> {
    try {
      const resp = await axiosInstance.post(
        "https://us-central1-fsdscheduler.cloudfunctions.net/saveDateInterval",
        {
          startDate,
          endDate,
        }
      );
      console.log(resp.request);
      return resp.data;
    } catch (error) {
      const apiError = error as AxiosError;
      if (apiError.response) {
        console.log(apiError.response.data);
      }
    }
  },

  async getDateInterval(): Promise<any> {
    try {
      const resp = await axiosInstance.get(
        "https://us-central1-fsdscheduler.cloudfunctions.net/getDateInterval"
      );
      console.log(resp.request);
      return resp.data;
    } catch (error) {
      const apiError = error as AxiosError;
      if (apiError.response) {
        console.log(apiError.response.data);
      }
    }
  },
};

export default dateIntervalService;
