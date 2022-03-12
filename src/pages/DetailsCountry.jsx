import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { cleanCountry, GetCountryId } from '../redux/actions/GetCountryId'

export const DetailsCountry = () => {
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const id = useParams().id
    const info = useSelector(state => state.country)
    console.log(info);
    useEffect(() => {
        dispatch(GetCountryId(id));
    }, [])
    useEffect(()=>{
        dispatch(cleanCountry())
    })
    const volver=()=>{
        navigate('/')
    }
    return (
        <>
            <div>hola</div>
            <button onClick={volver}>volver</button>
        </>

    )
}
