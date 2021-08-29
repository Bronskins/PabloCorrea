import React from 'react'
import {Item} from './Item'

export const ItemList = ({productos}) => {
    console.log(productos) 

    return (

        <section className="container-lg d-flex my-5 flex-column">

            <h2 className='text-center text-uppercase text-light'>Juegos más vendidos</h2>
            <hr className="text-info p-1"/>

            <div className="row justify-content-center"> 
                
                {productos.map((prod) => <Item key={prod.id} {...prod}/> )} 

            </div>
            <hr className="text-info p-1"/>

        </section>
    )

}