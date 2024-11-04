import { ROUTE_LOGIN } from "../routes/routes";
import AxiosClient from "../axios/axios-client";

interface LoginFormData {
  cpf: string;
  password: string;
}

export default class AuthService {
  private axiosInstance = AxiosClient.getInstance();

  async auth(formData: LoginFormData) {
    const { data } = await this.axiosInstance.post(ROUTE_LOGIN, formData);

    if (data) {
      localStorage.setItem("token", data.token);

      return true;
    }

    return;
  }

  isAuthenticated() {
    return localStorage.getItem("token") != undefined ? true : false;
  }

  logout() {
    return localStorage.removeItem("token");
  }
}
