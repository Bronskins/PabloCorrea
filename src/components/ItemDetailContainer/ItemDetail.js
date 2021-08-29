import React from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({sinopsis, empresa, plataformas, lanzamiento, category, id, nombre, precio, img, desc}) => {

        return (
            <div className=" w-100 showcase-container container-md d-flex flex-md-column align-items-center" >
                <h2 className="text-center">{nombre}</h2>
                <div className="container-md d-flex align-items-center justify-content-center">
                <img className="showcase" src={img} alt={nombre}/>
                <div className=" div-text">
                    <h2>{desc}</h2>
                    <p>{sinopsis}</p>
                    <ul>
                        <li><span>Fecha de lanzamiento:</span> {lanzamiento}</li>
                        <li><span>Empresa:</span> {empresa}</li>
                        <li><span>Categoria:</span> {category}</li>
                        <li><span>Plataformas:</span> {plataformas}</li>
                    </ul>

                    <h1 className="price w-50 text-center m-auto mt-4 mb-5">${precio} ARS</h1>
                    <div className="d-flex justify-content-sm-evenly align-items-center w-100">
                        <Link to={`/`} className="agregar btn btn-warning w-50 text-uppercase fw-bold">AGREGAR AL CARRITO</Link>
                        <Link to={`/`} className="agregar btn btn-primary w-25 text-uppercase fw-bold">Volver</Link>
                    </div>
                </div>
                </div>
                
                <btn className="btn"></btn>
                


            </div>
        )
}