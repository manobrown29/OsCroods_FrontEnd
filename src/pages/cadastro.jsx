import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../styles/cadastro.scss"
import logo from "../assets/logo.png"

const API_URL = "http://10.92.198.14:8080"

export default function Cadastro() {
    const [form, setForm] = useState({ nome: "", cpf: "", email: "", senha: "" })
    const [erro, setErro] = useState("")
    const [errosCampos, setErrosCampos] = useState({})
    const navigate = useNavigate()

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setErro("")
        setErrosCampos({})

        try {
            const resposta = await fetch(`${API_URL}/usuario`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            const dados = await resposta.json()

            if (resposta.ok) {
                alert("Cadastro realizado! Faça seu login.")
                navigate("/")
            } else if (resposta.status === 400) {
                setErrosCampos(dados)
            } else {
                setErro(dados.erro || "Não foi possível realizar o cadastro")
            }
        } catch {
            setErro("Não foi possível conectar ao servidor")
        }
    }

    return (
        <div className="container">
            <div className="login-section">
                <img src={logo} alt="" />
                <h1>Crie sua conta</h1>
                <p>Preencha os campos abaixo para criar sua conta:</p>

                <form id="registerForm" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome"
                            value={form.nome} onChange={handleChange} />
                        {errosCampos.nome && <span className="erro">{errosCampos.nome}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF"
                            value={form.cpf} onChange={handleChange} />
                        {errosCampos.cpf && <span className="erro">{errosCampos.cpf}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail"
                            value={form.email} onChange={handleChange} />
                            {errosCampos.email && <span className="erro">{errosCampos.email}</span>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" placeholder="Senha"
                            value={form.senha} onChange={handleChange} />
                            {errosCampos.senha && <span className="erro">{errosCampos.senha}</span>}
                    </div>

                    {erro && <p className="erro">{erro}</p>}

                    <button type="submit" className="login">
                        Cadastrar-se
                    </button>

                    <p>Já tem uma conta?
                        <Link to="/" className="Cadastrese">Clique aqui!</Link>
                    </p>
                </form>
            </div>
            <div className="image-section"></div>
        </div>
    )
}

 