import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardCountries } from '../components/CardCountries'
import { getAllCountries } from '../redux/actions/AllContries'
import {AiOutlineSearch} from 'react-icons/ai'
export const Home = () => {

    const dispatch = useDispatch()
    const info = useSelector(state => state.countries)


    useEffect(() => {
        dispatch(getAllCountries())
    }, [])
    console.log(info);
    return (
        <>
            <div className="container_filter">
                <input type="text"
                    placeholder= 'Busca un pais'
                    className="input_Search" />
                <select></select>
            </div>
            <div className="container_all">
                {
                    info.map(el => (<CardCountries key={el.numericCode} id={el.alpha3Code} img={el.flags.png} name={el.name} poblacion={el.population} capital={el.capital} region={el.region} />))
                }
            </div>
        </>
    )
}
