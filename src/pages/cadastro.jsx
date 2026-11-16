import { Link } from "react-router-dom"
import "../styles/cadastro.scss"

export default function Router() {
    return (
        <div class="container">
        <div class="login-section">
        <h1>Crie sua conta</h1>
        <p>Preencha os campos abaixo para criar sua conta:</p>
        <form id="registerForm" method="post">

            <div class="input-group">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome"/>
            </div>
            <div class="input-group">
                <label for="nome">Username:</label>
                <input type="text" id="Username" name="Username" placeholder="Digite seu Username" />
            </div>

            <div class="input-group">
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder="Digite seu e-mail" />
            </div>
            <div class="input-group">
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" placeholder="Senha" />
            </div>
            <Link to="/" className="login">
                Cadastra-se
            </Link>
            <p>Já tem uma conta? 
                <Link to="/" className="Cadastrese">Clique aqui!</Link>
            </p>
        </form>
    </div>
        <div class="image-section"></div>
    </div>
    )
}

