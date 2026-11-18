import { Link, NavLink } from "react-router-dom"
import Nav from "./Nav"
import "../styles/sideBar.scss"
import sair from "../assets/sair.png"
import logoFundoBranco from "../assets/logoFundoBranco.png"

export default function sideBarra() {
    return (
        <div className="pai">
            <div className="logoTipo">
                <img src={logoFundoBranco} alt="" />
                <div className="nomeLogo">
                    <h1>Cantina</h1>
                    <p>CRUUD's</p>
                </div>
            </div>
            <Nav/>
            <div className="sair">
                <NavLink to="/" className="sair">
                    <img src={sair} alt="" />
                    <h1>Sair</h1>
                </NavLink>
            </div>
        </div>
    )
}
