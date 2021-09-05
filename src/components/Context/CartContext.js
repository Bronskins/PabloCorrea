import { createContext } from "react";
import { useState } from "react";

// Creamos un contexto utilizando createContext. 
export const CartContext = createContext();

// Custom Provider

export const CartProvider = ({children}) => {

      // Usamos un webhook de Estado y lo pasamos al Contexto para que todos los componentes puedan modificarlo.
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (prod) => {
    setCarrito([
      ...carrito,
      prod
    ])
  }

  const eliminarDelCarrito = (id) => {
    setCarrito( carrito.filter(prod => prod.id !== id) )
  }

  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

    return (

        <CartContext.Provider value={{carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, cantidadCarrito}}>
            {children}
        </CartContext.Provider>

    )

}