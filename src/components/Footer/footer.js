import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {

    return (
        
        <footer className="encabezado">

            <div className="d-flex align-items-center">
                <h1>GamingStore</h1>
                <img className="logo" src="https://www.gamerslogo.com/wp-content/uploads/2018/03/gamer-logo-about.png"></img>
            </div>


            <nav>
                <img className="social" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-3-512.png"></img>
                <img className="social" src="https://lh3.googleusercontent.com/proxy/GvG2VFoS3ZaU4rlsMbyL5QlJmEueDxTfP-ePj_V7M_AnuTKnOAnDHGrjbN1G086gS7pmEBcuW8_oZQMl40R0gny7B2JPTd4noRLNAx1yow"></img>
                <img className="social" src="https://pngimage.net/wp-content/uploads/2018/06/twitter-logo-round-png-6.png"></img>
                <img className="social" src="https://static-00.iconduck.com/assets.00/telegram-icon-512x512-v8yc509v.png"></img>
            </nav>


        </footer>

    )

}