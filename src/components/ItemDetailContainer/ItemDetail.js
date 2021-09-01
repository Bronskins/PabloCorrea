import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Counter } from '../Counter/Counter'
import { UnContext } from '../Context/UnContext'

export const ItemDetail = ({sinopsis, stock, empresa, plataformas, lanzamiento, category, id, nombre, precio, img, desc}) => {

    // WebHook para setear estado inicial de cantidad.
    const [cantidad, setCantidad] = useState(1)

    // WebHook para utilizar el Contexto creado en Context/Uncontext.js 
    const {carrito, setCarrito} = useContext(UnContext)

    // Funcion que simula agregar al carrito
    const agregarAlCarrito = () => {
        console.log({
            id,nombre,category,desc,precio,sinopsis
        })

        setCarrito([
            // No se puede hacer simplemente un push al array de carrito. 
            // Debo enviar el estado totalmente nuevo que incluye todos los elementos que ya tenia el array + uno nuevo:
            ...carrito, // Todos los elementos anteriores
            {
                id, nombre, category, desc, img, precio, cantidad, empresa, plataformas, lanzamiento // Nuevo Objeto
            }
        ])
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
                        <Counter agregar={agregarAlCarrito} setCantidad={setCantidad} cantidad={cantidad} max={stock}/>
                        <Link to={`/`} className="agregar btn btn-primary w-25 text-uppercase fw-bold">Volver</Link>
                    </div>
  
                </div>
                </div>


            </div>
        )
}