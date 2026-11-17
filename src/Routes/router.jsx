import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "../pages/index"
import Cadastro from "../pages/cadastro"
import Visaogeral from "../pages/visaoGeral"
import EsquecerSenha from "../pages/esquecerSenha"

export default function Router() {
    return (
        <BrowserRouter>     
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/esquecerSenha" element={<EsquecerSenha />} />
                <Route path="/visaoGeral" element={<Visaogeral />} />
            </Routes>
        </BrowserRouter>
    )
}