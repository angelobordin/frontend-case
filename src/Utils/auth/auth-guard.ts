import { Navigate } from "react-router-dom";
import AuthService from "../../components/IBanking/Login/service";

import { ReactNode } from "react";

const authService = new AuthService();

const AuthGuard = (props: { children: ReactNode }) => {
  authService.isAuthenticated()
    ? console.log("props.children")
    : console.log("Navigate({ to");
  return authService.isAuthenticated() ? props.children : Navigate({ to: "/" });
};

export default AuthGuard;
