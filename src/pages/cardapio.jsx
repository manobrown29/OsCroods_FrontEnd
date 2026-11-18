import React from 'react'
import { Link } from "react-router-dom"
import "../styles/cardapio.scss"
import sair from "../assets/sair.png"
import logoFundoBranco from "../assets/logoFundoBranco.png"

export default function Cardapio() {
  return (
    <section className='cardapio-container'>
      <div className="pai">
        <div className="logoTipo">
          <img src={logoFundoBranco} alt="" />
          <div className="nomeLogo">
            <h1>Cantina</h1>
            <p>CRUUD's</p>
          </div>
        </div>
        <nav>
          <Link to="/visaoGeral" className="opcao">
            <p>Visão geral</p>
          </Link>
          <Link to="/cardapio" className="opcao">
            <p>Cardápio</p>
          </Link>
        </nav>
        <div className="sair">
          <Link to="/" className="sair">
            <img src={sair} alt="" />
            <h1>Sair</h1>
          </Link>
        </div>
      </div>

      <div className='cardapio-body'>
        <div className='cardapio-title'>
          <h1>Cardápio</h1>
          <p>32 produtos · 28 disponíveis</p>
        </div>

        <div className='cardapio-space'>
          <div className='cardapio-produtos'>

          </div>

          <div className='cardapio-editar'> 

          </div>
        </div>
      </div>
    </section>
  )
}
