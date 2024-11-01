import { Navigate } from "react-router-dom";
import AuthService from "../../components/Login/service";

import { ReactNode } from "react";

const authService = new AuthService();

const AuthGuard = (props: { children: ReactNode }) => {
  return authService.isAuthenticated()
    ? props.children
    : Navigate({ to: "/auth" });
};

export default AuthGuard;
