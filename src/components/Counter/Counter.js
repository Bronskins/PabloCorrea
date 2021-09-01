import React from 'react'

export const Counter = ({max, cantidad, setCantidad, agregar}) => {

    const handleSumar = () => {
        if (cantidad < max){
            setCantidad(cantidad + 1)
        }
    }

    const handleRestar = () => {
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-sm-evenly">
                <div className="d-flex align-items-center ">
                <button className="btn btn-primary mx-3 my-1" onClick={handleRestar} >-</button>
                <p className="cantidad">{cantidad}</p>
                <button className="btn btn-primary mx-3 my-1" onClick={handleSumar}>+</button>
                </div>

                <button onClick={agregar} className="agregar btn btn-warning w-100 text-uppercase fw-bold">AGREGAR AL CARRITO</button>
            </div>
        </>
    )
}