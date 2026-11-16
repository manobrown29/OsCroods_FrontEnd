import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "../pages/index"
import Cadastro from "../pages/cadastro"

export default function Router() {
    return (
        <BrowserRouter>     
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}