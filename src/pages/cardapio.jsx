import { NavLink } from "react-router-dom"
import sair from "../assets/sair.png"
import logoFundoBranco from "../assets/logoFundoBranco.png"
import "../styles/cardapio.scss"

export default function cardapio() {
  return (
    <div className="pai">
        <div className="logoTipo">
            <img src={logoFundoBranco} alt="" />
            <div className="nomeLogo">
                <h1>Cantina</h1>
                <p>CRUUD's</p>
            </div>
        </div>
        <nav>
            <NavLink to="/visaoGeral" className="opcao">
                <p>Visão geral</p>
            </NavLink>

            <NavLink to="/cardapio" className="opcao">
                <p>Cardápio</p>
            </NavLink>
        </nav>
        <div className="sair">
            <NavLink to="/" className="sair">
                <img src={sair} alt="" />
                <h1>Sair</h1>
            </NavLink>
        </div>
    </div>
  )
}
