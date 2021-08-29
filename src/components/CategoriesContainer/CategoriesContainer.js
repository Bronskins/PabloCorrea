import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import { Categories } from './Categories'
import { Link } from 'react-router-dom'

export const CategoriesContainer = () => {

    const { itemId } = useParams() // Importo el HOOK para capturar el ID en los parametros. Tipo STRING asi que hay que Parsear
    const [item, setItem] = useState(null) // Hook para setear estado inicial de item (Llamado a API)
    const [loading, setLoading] = useState(false)

    // UseEffect para pedirle la informacion a la API (PedirDatos)
    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then(res => {
                setItem( res.find(prod => prod.id === parseInt(itemId)) )
            })
            .finally(() => { setLoading(false) })
    }, [itemId])

    return (

        // Cuando el item se convierta en TRUE, mostrara el componente ItemDetail
        // Envio por PROPS el objeto ITEM, usando un spread.
        <div className="container-categorias w-100">
            <h2 className="headerr">CATEGORIAS</h2>
            <hr className="text-info p-1 w-75"/>
            <Categories {...item}/>
            <hr className="text-info p-1 w-75"/>
        </div>

    )

}