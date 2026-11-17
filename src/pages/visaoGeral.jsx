import { Link } from "react-router-dom"
import sair from "../assets/sair.png"
import logoFundoBranco from "../assets/logoFundoBranco.png"

import "../styles/visaoGeral.scss"

export default function Router() {
    return (
        <div className="pai">
            <div className="logoTipo">
                <img src={logoFundoBranco} alt="" />
                <div className="nomeLogo">
                    <h1>Cantina</h1>
                    <p>CRUD´s</p>
                </div>
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

