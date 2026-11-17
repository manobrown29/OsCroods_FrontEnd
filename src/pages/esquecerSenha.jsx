import { Link } from "react-router-dom"
import "../styles/esquecerSenha.scss"
import logo from "../assets/logo.png"


export default function Router() {
    return (
        <div className="container">
            <div className="login-section">
                <img src={logo} alt="" />
                <h1>Esqueceu Senha</h1>
                <p>Esqueceu a senha? Digite seu e-mail abaixo.</p>
                <form id="loginForm" th:object="${user}" method="post" th:action="@{/login}">
                    <div className="input-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="username" placeholder="Digite seu email"/>
                    </div>
                    <div class="input-group">
                        <div className="esqueceuSenha">
                            <label for="password">Nova Senha:</label>
                        </div>
                        <input type="password" id="password" name="password" placeholder="Digite sua nova senha"/>
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