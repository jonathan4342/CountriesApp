import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardCountries } from '../components/CardCountries'
import { getAllCountries } from '../redux/actions/AllContries'

export const Home = () => {

    const dispatch = useDispatch()
    const info = useSelector(state => state.countries)


    useEffect(() => {
        dispatch(getAllCountries())
    }, [])
    return (
            <div className="container_all">
                {
                    info.map(el => (<CardCountries key={el.cca3} id={el.cca2}img={el.flags.png} name={el.name.common} poblacion={el.population} capital={el.capital} region={el.region} />))
                }
            </div>
    )
}
