import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import logoFullImage from "../../assets/logo-full.svg";
import arrowRightImage from "../../assets/arrow-right.svg";
import {
  validateCpf,
  validatePassword,
} from "../../Utils/validators/validators";
import AuthService from "../../Utils/auth/service";

import "./index.css";

const authService = new AuthService();

function Login() {
  const [loading, setLoading] = useState(false);
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangeCPF = (e: ChangeEvent<HTMLInputElement>) => {
    setCpf(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    return validateCpf(cpf) && validatePassword(password);
  };

  const handleAuth = async (event: ChangeEvent<EventTarget>) => {
    event.preventDefault();
    setLoading(true);
    const res = await authService.auth({ cpf, password });
    if (res) navigate("/ibanking");
    setLoading(false);
  };

  return (
    <main id="login">
      <img src={logoFullImage} alt="Cora" title="Cora" />
      <h1>Fazer Login</h1>
      <input id="cpf" placeholder="Insira seu CPF" onChange={handleChangeCPF} />
      <input
        id="password"
        placeholder="Digite sua senha"
        onChange={handleChangePassword}
      />
      <button onClick={handleAuth} disabled={loading || !validateForm()}>
        Continuar
        <img src={arrowRightImage} />
      </button>
    </main>
  );
}

export { Login };
