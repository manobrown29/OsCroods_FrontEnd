import { Link } from "react-router-dom"
import "../styles/login.scss"
import logo from "../assets/logo.png"


export default function Router() {
    return (
        <div className="container">
            <div className="login-section">
                <img src={logo} alt="" />
                <h1>Bem vindo de volta!</h1>
                <p>Insira suas credenciais para acessar sua conta:</p>
                <form id="loginForm" th:object="${user}" method="post" th:action="@{/login}">
                    <div className="input-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="username" placeholder="Digite seu email"/>
                    </div>
                    <div class="input-group">
                        <div className="esqueceuSenha">
                            <label for="password">Senha:</label>
                            <a href="">Esqueci minha senha</a>
                        </div>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha"/>
                    </div>
                    <Link to="#" className="login">
                        Login
                    </Link>
                    <p>Não tem uma conta? 
                        <Link to="/cadastro" className="Cadastrese">Cadastre-se</Link>
                    </p>

                </form>
            </div>
            <div class="image-section">
            </div>
        </div>
    )
}

