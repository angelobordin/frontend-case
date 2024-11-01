import axios, { AxiosInstance } from "axios";
import { API, ROUTE_LOGIN } from "../../Utils/routes/routes";

interface FormData {
  cpf: string;
  password: string;
}

export default class AuthService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async auth(formData: FormData) {
    const { data } = await this.axios.post(ROUTE_LOGIN, formData);

    if (data) {
      localStorage.setItem("token", data.token);

      return true;
    }

    return;
  }

  isAuthenticated() {
    return localStorage.getItem("token") != undefined ? true : false;
  }
}
