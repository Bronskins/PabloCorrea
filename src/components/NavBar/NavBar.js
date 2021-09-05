import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {

    return (
        
        <header className="encabezado">

            <div className="d-flex align-items-center">
                <h1>GamingStore</h1>
                <img alt="Logo" className="logo" src="https://www.gamerslogo.com/wp-content/uploads/2018/03/gamer-logo-about.png"></img>
            </div>


            <nav className="navbar d-flex align-items-center justify-content-xl-between">
                <Link to={"/"}>Inicio</Link>
                <Link to={"/nosotros"}>Nosotros</Link>
                <CartWidget/>
            </nav>

        </header>

    )

}