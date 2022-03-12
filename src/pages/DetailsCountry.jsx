import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { cleanCountry, GetCountryId } from '../redux/actions/GetCountryId'
import { BiArrowBack } from 'react-icons/bi'

export const DetailsCountry = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const id = useParams().id
    const info = useSelector(state => state.country)
    console.log(info);
    useEffect(() => {
        dispatch(GetCountryId(id));
    }, [])
    useEffect(() => {
        return () => {
            dispatch(cleanCountry())

        }
    }, [])
    const volver = () => {
        navigate('/')
    }
    return (
        <>
            <button onClick={volver}><BiArrowBack /> volver</button>
            <div className="container_data">
                <div className="contenedor_img">
                    <img src={info?.flags.png} alt="Img" width="350px" height="300px" />
                </div>
                <div className="container_info-1">
                    <h2>{info?.name}</h2>
                    <h4>Capital: {info?.capital}</h4>
                    <h4>Poblacion: {info?.population}</h4>
                    <h4>Region: {info?.region}</h4>
                    <h4>SubRegion: {info?.subregion}</h4>
                </div>
                <div className="container_info-2">
                    <h4>Idioma:
                    {
                        info?.languages.map(el => (<span key={info.languages.indexOf(el)}>{el.name}</span>))
                    }
                    </h4>
                    
                    {
                        info?.currencies.map(el => (<h4 key={el}>Moneda: {el.name}</h4>))
                    }
                    {
                        info?.borders &&
                        <>
                            <h4>Paises Fronterizos</h4>
                            <div className="container-country">
                                {
                                    info?.borders?.map(el => (<button key={el}><a href={`/country/${el}`}>{el}</a></button>))
                                }
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
