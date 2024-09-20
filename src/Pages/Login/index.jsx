import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Images/Logo.png";
import "./style.css";

export default function LoginPage() {
  const navigate = useNavigate();

  function goToSecondPage() {
    navigate("/");
  }

  return (
    <div className="container-login">
      <div className="container-left">
        <img className="logo-login" src={Logo} />
      </div>

      <div className="container-right">
        <div className="form-login">
          <h1>Acesso ao sistema</h1>
          <label>Usuário: </label>
          <input
            className="login-input"
            placeholder="Digite seu usuário"
            type="text"
          ></input>
          <label className="password">Senha: </label>
          <input
            className="login-input"
            placeholder="Digite sua senha"
            type="password"
          ></input>

          <button className="button-login-in" onClick={goToSecondPage}>
            Entrar
          </button>

          <a>Esqueceu a senha?</a>
          <a>Primeiro acesso</a>
        </div>
      </div>
    </div>
  );
}
