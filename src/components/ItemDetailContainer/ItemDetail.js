import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Counter } from '../Counter/Counter'
import { CartContext } from '../Context/CartContext'

export const ItemDetail = ({sinopsis, stock, empresa, plataformas, lanzamiento, category, id, nombre, precio, img, desc}) => {

    // WebHook para setear estado inicial de cantidad.
    const [cantidad, setCantidad] = useState(1)

    // WebHook para utilizar el Contexto creado en Context/Uncontext.js 
    const {agregarAlCarrito} = useContext(CartContext)

    const handleAdd = () => {
        agregarAlCarrito({
            category, id, nombre, desc, img, precio, cantidad
        })
    }

        return (
            <div className=" w-100 showcase-container container-md d-flex flex-md-column align-items-center" >
                <h2 className="text-center">{nombre}</h2>
                <div className="container-md d-flex align-items-center justify-content-center">
                <img className="showcase" src={img} alt={nombre}/>
                <div className=" div-text">
                    <h2 className="mt-5 mb-5">{desc}</h2>
                    <p>{sinopsis}</p>
                    <ul className="mt-5 mb-5">
                        <li><span>Fecha de lanzamiento:</span> {lanzamiento}</li>
                        <li><span>Empresa:</span> {empresa}</li>
                        <li><span>Categoria:</span> {category}</li>
                        <li><span>Plataformas:</span> {plataformas}</li>
                    </ul>

                    <h1 className="price w-50 text-center m-auto mt-5 mb-5">${precio} ARS</h1>
                    <div className="d-flex justify-content-sm-evenly align-items-center w-100">
                        <Counter agregar={handleAdd} setCantidad={setCantidad} cantidad={cantidad} max={stock}/>
                        <Link to={`/`} className="agregar btn btn-primary w-25 text-uppercase fw-bold">Volver</Link>
                    </div>
  
                </div>
                </div>


            </div>
        )
}