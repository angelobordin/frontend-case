import { ROUTE_LOGIN } from "../routes/routes";
import AxiosClient from "../axios/axios-client";
import { jwtDecode } from "jwt-decode";

interface LoginFormData {
  cpf: string;
  password: string;
}

export default class AuthService {
  private axiosInstance = AxiosClient.getInstance();

  async auth(formData: LoginFormData) {
    const { data } = await this.axiosInstance.post(ROUTE_LOGIN, formData);

    if (data) {
      const decodedToken = jwtDecode<{
        name: string;
        token: string;
      }>(data.token);

      localStorage.setItem("name", decodedToken.name);
      localStorage.setItem("token", data.token);

      return true;
    }

    return;
  }

  isAuthenticated() {
    return localStorage.getItem("token") != undefined ? true : false;
  }

  logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    return;
  }
}
