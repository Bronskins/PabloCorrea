import React, {useEffect, useState} from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [data, setData] = useState([]) // La data empieza con un array vacio
    const [loading, setLoading] = useState(false) // Seteamos el estado inicial de loading en FALSE (Loading...)


    // UseEffect que resolvera el llamado a la data

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then(res => setData(res))
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading ? <h2>Cargando...</h2>
            : <ItemList productos={data}/>    
        }
        </>
    )

}