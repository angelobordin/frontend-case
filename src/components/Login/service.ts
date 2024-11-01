import { ROUTE_LOGIN } from "../../Utils/routes/routes";
import AxiosClient from "../../Utils/axios/axios-client";

interface FormData {
  cpf: string;
  password: string;
}

export default class AuthService {
  private axiosInstance = AxiosClient.getInstance();

  async auth(formData: FormData) {
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
}
