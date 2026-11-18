import { NavLink } from "react-router-dom"
import "../styles/Nav.scss"

export default function Nav() {
  return (
    <nav>
      <NavLink to="/visaoGeral" className="opcao">
        <p>Visão geral</p>
      </NavLink>
      <NavLink to="/cardapio" className="opcao">
        <p>Cardápio</p>
      </NavLink>
    </nav>
  )
}