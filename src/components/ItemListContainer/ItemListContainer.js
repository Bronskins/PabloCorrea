import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from './ItemList'
import { ItemDetail } from '../ItemDetailContainer/ItemDetail'

export const ItemListContainer = () => {

    // Se puede usar 'parametros' sin desestructurar para obtener el objeto completo de parametros.
    const { catId } = useParams(); // WebHook para recuperar los parametros en el URL. (catId)
    const [data, setData] = useState([]) // La data empieza con un array vacio
    const [loading, setLoading] = useState(false) // Seteamos el estado inicial de loading en FALSE (Loading...)


    // UseEffect que resolvera el llamado a la data

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then(res => {
                // Si existe un ID parametro, devolver lo que matcheen con ese. Sino devolver toda la data.
                if(catId){
                    const arrayFiltrado = res.filter(prod => prod.category === catId)
                    setData(arrayFiltrado)
                } else {
                    setData(res)
                }

            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [catId])

    return (
        <>
            {loading ? <h2 className="cargando">Cargando...</h2>
            : <ItemList productos={data}/>    
        }
        </>
    )

}