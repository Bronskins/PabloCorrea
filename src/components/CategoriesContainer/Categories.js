import React from 'react'
import { Link } from 'react-router-dom'

export const Categories = ({category, id, nombre, precio, img, desc}) => {

        return (

            <div className="categorias">
            <Link to={"/category/Survival"} className="categoria">
                <img src={"https://cdn.iconscout.com/icon/premium/png-512-thumb/survival-1579998-1337780.png"} alt={nombre}/>
                <p>Survival</p>

            </Link>
            <Link to={"/category/Racing"} className="categoria">
                <img src={"https://image.flaticon.com/icons/png/512/65/65578.png"} alt={nombre}/>
                <p>Racing</p>

            </Link>
            <Link to={"/category/Shooter"}className="categoria">
                <img src={"https://freepikpsd.com/media/2019/10/shooting-icon-png-6-Transparent-Images-Free.png"} alt={nombre}/>
                <p>Shooter</p>
      

            </Link>
            <Link to={"/category/Strategy"} className="categoria">
                <img src={"https://icons-for-free.com/iconfiles/png/512/approach+game+marketing+master+plan+plan+strategy+icon-1320184914091842957.png"} alt={nombre}/>
                <p>Estrategia</p>
            </Link>
            </div>

            
        )
}