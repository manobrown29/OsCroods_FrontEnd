import React from 'react'
import "../styles/notFound.scss"
import hamburguer from "../assets/hamburguerPodre.png"
import { Link } from 'react-router-dom'

export default function notFound() {
    return (

        <section className="notFound-container">
            <img src={hamburguer} />
            <h1 className='notfound-title'>404 - Página não encontrada</h1>
            <p className='notfound-text'>
                A página que você está procurando não existe.
            </p>
            <Link to="/" className="notfound-link">
                Voltar para Home
            </Link>
        </section>
    )
}
