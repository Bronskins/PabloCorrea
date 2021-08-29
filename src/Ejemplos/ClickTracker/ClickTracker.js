import React, { useEffect, useState } from 'react'

export const ClickTracker = ( {greeting}) => {

    // Esta propiedad permite setear un estado inicial del componente que puede luego cambiar ante cierto evento.
    const [contador, setContador] = useState({ // Contador = Valor inicial; SetContador = Funcion para cambiar el valor.
        clicks: 0,
        fecha: null
    })

    const handleClick = () => {
        setContador ({
            clicks: contador.clicks + 1,
            fecha: new Date().toLocaleString()
        })

    }

    // Esta propiedad me permite ejecutar acciones en una u otra etapa de vida del componente.

    useEffect( ()=> {
        console.log("Componente Montado")
    }, [contador])

    return (
        <div className="container" onClick={handleClick}>
            <h2> Click Tracker</h2>
            <hr/>

            <p>Clicks: {contador.clicks}</p>
            <p>Clickeado el: {contador.fecha?.toLocaleString()}</p>
        </div>
    )

}