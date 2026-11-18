import { Link } from "react-router-dom"
import SideBarra from "../components/sideBarra"
import "../styles/cardapio.scss"

export default function Cardapio() {
  return (
    <section className='cardapio-container'>
          <SideBarra/>
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
