import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from './ItemDetail'
import { UIContext } from '../Context/UIContext'

export const ItemDetailContainer = () => {

    const { itemId } = useParams() // Importo el HOOK para capturar el ID en los parametros. Tipo STRING asi que hay que Parsear
    const [item, setItem] = useState(null) // Hook para setear estado inicial de item (Llamado a API)
    const {loading, setLoading} = useContext(UIContext)

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
        <div>
            {loading
                ? <h2 className="cargando">Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </div>

    )

}