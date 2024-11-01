import axios, { AxiosInstance } from "axios";
import { API } from "../routes/routes";

class AxiosClient {
  private static instance: AxiosInstance;

  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!AxiosClient.instance) {
      AxiosClient.instance = axios.create({
        baseURL: API,
        headers: {
          "Content-Type": "application/json",
        },
      });

      AxiosClient.instance.interceptors.response.use(
        (response) => response,
        (error) => {
          if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");

            // não posso utilizar hooks fora de umm component React
            // this.navigate("/");
            window.location.href = "/";
          }

          return Promise.reject(error);
        }
      );
    }

    return AxiosClient.instance;
  }
}

export default AxiosClient;
