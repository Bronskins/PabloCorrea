import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({img, nombre, desc, avatar, category, precio, id, sinopsis, empresa, lanzamiento, plataformas}) => {

    return (
        <div className="col-lg-4 d-flex align-items-center">
        <div className="card my-3 bg-dark border border-primary">
            <div className="card-effect">
                <img className="card-img-top border border-primary" src={img} alt={nombre}/>
                <div className="effect">
                    <img src={avatar}></img>
                    <h3>{nombre}</h3>
                    <ul className="effect-ul">
                        <li>{sinopsis}</li>
                        <li><span>Empresa:</span> {empresa}</li>
                        <li><span>Fecha de lanzamiento:</span> {lanzamiento}</li>
                        <li><span>Plataformas:</span> {plataformas}</li>
                        <li><span>Categoria:</span> {category}</li>
                    </ul>
                </div>
            </div>
      
            <div className="card-body">
            <h3 className="card-title text-light text-center my-3">{nombre}</h3>
                <p className="card-text text-light text-center my-3">{desc}</p>
                <h2 className="card-text text-warning text-center my-3">${precio} ARS</h2>
                
            </div>
            <Link to={`/detail/${id}`} className="btn btn-primary mb-4 text-uppercase fw-bold ">Ver más</Link>

        </div>
        </div>
    )
}