import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import LogoEntomokeyRounded from "../images/LogoEntomokeyRoundedGreen.svg";
import LogoEntomokeyCard from "../images/LogoEntomokeyCard.svg";
import "../styles/Login.css";

const Login = () => {
  const handleLoginSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    try {
      const response = await axios.post("http://localhost:4000/api/auth/google", {
        token,
      });

      if (response.data.isNewUser) {
        console.log("Nova conta criada para o usuário.");
      } else {
        console.log("Usuário já existente logado com sucesso.");
      }

      // Salve as informações do usuário no localStorage
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Redirecionar para a página principal
      window.location.href = "/";

    } catch (error) {
      console.error("Erro ao autenticar o usuário:", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId="849586959948-s1dfl9tu6ujnujrvjln8o5osalmhqpsr.apps.googleusercontent.com">
      <div className="container my-5">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 d-none d-md-block">
              <img
                src={LogoEntomokeyCard}
                alt="login form"
                className="img-fluid rounded-start w-100"
              />
            </div>

            <div className="col-md-6">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-row mt-2 justify-content-center">
                  <img src={LogoEntomokeyRounded} className="img-thumbnail" alt="Logo" />
                  <span className="h1 fw-bold mb-0 ms-3 text-center">ENTOMOKEY</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3 text-center text-wrap"
                  style={{ letterSpacing: "1px" }}
                >
                  FAÇA LOGIN OU CRIE
                  UMA CONTA USANDO GOOGLE
                </h5>

                <div className="d-flex justify-content-center w-100">
                  <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                    theme="filled_blue"
                    shape="pill"
                    size="medium"
                    width={10}
                    type="standard"
                    text="signin_with"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
