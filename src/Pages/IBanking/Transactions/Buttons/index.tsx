import "./index.css";
import { IButtonProps } from "../utils/interfaces";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../../Utils/auth/service";

const authService = new AuthService();

function Buttons({ handleFilter, filter }: IButtonProps) {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/home");
  };

  const handleLogout = () => {
    authService.logout();
    navigateToHome();
  };

  return (
    <div className="buttons mb-3 ">
      <div className="nav nav-pills grid gap-3">
        <button
          type="button"
          className="btn button-back"
          onClick={() => navigateToHome()}
        >
          <i className="bi bi-house-door-fill mx-2"></i>
          Home
        </button>

        <button
          type="button"
          className={`btn button-custom ${
            filter === "DEBIT" ? "active" : "inactive"
          }`}
          onClick={() => handleFilter("DEBIT")}
        >
          Débito
        </button>

        <button
          type="button"
          className={`btn button-custom ${
            filter === "CREDIT" ? "active" : "inactive"
          }`}
          onClick={() => handleFilter("CREDIT")}
        >
          Crédito
        </button>
      </div>
      <div>
        <span>
          Você esta logado como: <strong>{localStorage.getItem("name")}</strong>
        </span>
        <button
          type="button"
          className={`btn button-custom mx-2`}
          onClick={() => handleLogout()}
        >
          <i className="bi bi-box-arrow-left mx-2"></i>
          Desconectar
        </button>
      </div>
    </div>
  );
}

export default Buttons;
