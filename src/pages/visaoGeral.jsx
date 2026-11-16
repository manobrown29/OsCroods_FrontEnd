import { Link } from "react-router-dom"
import sair from "../assets/sair.png"
import logo from "../assets/logo.png"

import "../styles/visaoGeral.scss"

export default function Router() {
    return (
        <div className="container">
            <div className="logoTipo">
                <img src={logo} alt="" />
                <h1>Hot Croods</h1>
            </div>
            <nav>
                <Link to="#" className="opcao">
                    <p>Visão geral</p>
                </Link>
                <Link to="#" className="opcao">
                    <p>Cardápio</p>
                </Link>
            </nav>
            <div className="sair">
                <Link to="#" className="sair">
                    <img src={sair} alt="" />
                    <h1>Sair</h1>
                </Link>
            </div>
        </div> 
    )
}

