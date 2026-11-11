import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "../pages/login"
import Cadastro from "../pages/cadastro"

export default function Router() {
    return (
        <BrowserRouter>     
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}