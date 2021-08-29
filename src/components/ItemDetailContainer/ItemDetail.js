import React from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({category, id, nombre, precio, img, desc}) => {

        return (
            <div className="showcase-container container-md d-flex flex-md-column align-items-center" >
                <h2 className="text-center">{nombre}</h2>
                <img className="showcase" src={img} alt={nombre}/>
                <btn className="btn"></btn>
                
                <div className="d-flex flex-md-row w-100 justify-content-center">
                <Link to={`/`} className="agregar btn btn-warning mb-3 m-5 mt-3 w-25 text-uppercase fw-bold">AGREGAR AL CARRITO</Link>
                <Link to={`/`} className="agregar btn btn-primary mb-3 m-5 mt-3 w-25 text-uppercase fw-bold">Volver</Link>
                </div>

            </div>
        )
}