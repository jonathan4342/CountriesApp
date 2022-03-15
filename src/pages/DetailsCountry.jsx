import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
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
    }, [id])
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
            <div className="container_data">
                <div className="container_img">
                    <button onClick={volver} className="btn"> <BiArrowBack className='emoticon' /> Back</button>
                    <img src={info?.flags.png} alt="Img" width="500px" height="400px" />
                </div>
                <div className="container_info">
                    <div className="container_info-1">
                        <h2>{info?.name}</h2>
                    </div>
                    <div className="container_info-2">
                        <ul>
                            <li>Native name: <span>{info?.nativeName}</span></li>
                            <li>Population: <span>{info?.population}</span></li>
                            <li>Region: <span>{info?.region}</span></li>
                            <li>Sub Region: <span>{info?.subregion}</span></li>
                            <li>Capital: <span>{info?.capital}</span></li>
                        </ul>
                        <ul>
                            <li>Top Level Domain:
                                {
                                    info?.topLevelDomain.map(el => (<span key={el}> {el}</span>))
                                }
                            </li>
                            <li>Currencies:
                                {
                                    info?.currencies.map(el => (<span key={el}> {el.name}</span>))
                                }
                            </li>
                            <li>Languagues:
                                {
                                    info?.languages.map(el => (<span key={info.languages.indexOf(el)}> {el.name}</span>))
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="container_info-3">
                        {
                            info?.borders &&
                            <>
                                <h4>Border Countries:
                                    {
                                        info?.borders?.map(el => (
                                            <button key={info.borders.indexOf(el)} onClick={() => navigate(`/country/${el}`)}>
                                                {el}
                                            </button>
                                        ))
                                    }
                                </h4>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
