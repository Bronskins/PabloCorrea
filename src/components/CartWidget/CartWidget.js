import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

    const { cantidadCarrito } = useContext(CartContext)

    return (
        <Link to="/cart">
        <div className="d-flex align-items-center cart-widget">
            <FaShoppingCart/>
            <span>{cantidadCarrito()}</span>
        </div>
        </Link>
    )

}