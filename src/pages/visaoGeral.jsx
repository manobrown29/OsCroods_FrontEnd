import { NavLink } from "react-router-dom"
import sair from "../assets/sair.png"
import logoFundoBranco from "../assets/logoFundoBranco.png"

import "../styles/visaoGeral.scss"

export default function Router() {

    return (
        <div className="layout-container">

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
            <div className="corpo">
                <h1>Visão geral</h1>

                {/* CONTAINER PRINCIPAL DO DASHBOARD */}
                <div className="dashboard-layout">
                    
                    {/* LADO ESQUERDO (70% do espaço) */}
                    <div className="coluna-esquerda">
                        
                        {/* 3 Cards Superiores */}
                        <div className="dashboard-cards-esquerdo">
                            <div className="card">
                                <p>Vendas de Hoje</p>
                                <h2>R$ 2.154,36</h2>
                            </div>
                            <div className="card">
                                <p>Pedidos</p>
                                <h2>142</h2>
                            </div>
                            <div className="card">
                                <p>Ticket Médio</p>
                                <h2>R$ 14,80</h2>
                            </div>
                        </div>

                        {/* Tabela de Pedidos */}
                        <div className="pedidos-andamento">
                            <h3>Pedidos em andamento</h3>
                        </div>

                    </div>

                    {/* LADO DIREITO (30% do espaço) */}
                    <div className="coluna-direita">
                        
                        {/* Card "Na Fila" (agora alinhado com a direita) */}
                        <div className="card destaque">
                            <p>Na fila</p>
                            <h2>4</h2>
                        </div>

                        {/* Alertas Laterais */}
                        <div className="vendas-hora">Vendas por hora</div>
                        <div className="alertas-estoque">Alertas de estoque</div>
                        
                    </div>

                </div>
            </div>
        </div> 
    )
}