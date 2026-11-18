import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/login.scss"
import logo from "../assets/logo.png"

const API_URL = "http://10.92.198.14:8080"

export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")
    const [errosCampos, setErrosCampos] = useState({})
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        setErro("")
        setErrosCampos({})

        try {
            const resposta = await fetch(`${API_URL}/usuario/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            })

            const dados = await resposta.json()

            if (resposta.ok) {
                localStorage.setItem("usuario", JSON.stringify(dados))
                navigate("/visaoGeral")  
            } else if (resposta.status === 401) {
                setErro(dados.erro)
            } else if (resposta.status === 400) {
                setErrosCampos(dados)
            }
        } catch {
            setErro("Não foi possível conectar ao servidor")
        }
    }

    return (
        <div className="container">
            <div className="login-section">
                <img src={logo} alt="" />
                <h1>Bem vindo de volta!</h1>
                <p>Insira suas credenciais para acessar sua conta:</p>

                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errosCampos.email && <span className="erro">{errosCampos.email}</span>}
                    </div>

                    <div className="input-group">
                        <div className="esqueceuSenha">
                            <label htmlFor="password">Senha:</label>
                            <Link to="/esquecerSenha" className="a">
                                Esqueci minha senha
                            </Link>
                        </div>
                        <input
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        {errosCampos.senha && <span className="erro">{errosCampos.senha}</span>}
                    </div>

                    {erro && <p className="erro">{erro}</p>}

                    <button type="submit" className="login">
                        Login
                    </button>

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

