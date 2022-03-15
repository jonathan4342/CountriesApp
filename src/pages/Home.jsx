import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardCountries } from '../components/CardCountries'
import { getAllCountries } from '../redux/actions/AllContries'
import { FilterCountriesName } from '../redux/actions/FilterCountriesName'
import { FilterCountriesRegion } from '../redux/actions/FilterCountriesRegion'

export const Home = () => {

    const dispatch = useDispatch()
    const { countriesF, searchCountry } = useSelector(state => state)
    const [search, setSearch] = useState('')
    const [countryFilter, setCountryFilter] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        dispatch(getAllCountries())
    }, [])
    //funcion para el buscador

    useEffect(() => {
        dispatch(FilterCountriesName(search))
    }, [search])

    useEffect(() => {
        setCountryFilter(countriesF)
    }, [countriesF])

    useEffect(() => {
        setCountryFilter(countriesF?.filter(el => (el.name.toLowerCase().includes(searchCountry.toLowerCase()))))
    }, [searchCountry])


    const nameCountry = (e) => {
        setSearch(e.target.value)
    }
    const filterRegion = (e) => {
        dispatch(FilterCountriesRegion(e.target.value))
    }
    const paginado = () => {
        return countryFilter.slice(currentPage, currentPage + 8)
    }
    const nextPage = () => {
        if (countriesF?.filter(el => (el.name.toLowerCase().includes(searchCountry.toLowerCase()))).length > currentPage + 8) {
            setCurrentPage(currentPage + 8)
        }
    }
    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 8)
        }
    }
    return (
        <>
            <div className="container_inicio">
                <h2>Where in the world?</h2>
            </div>
            <div className="container_filter">
                {/* <BsSearch className="emoticon b"/> */}
                <input type="text"
                    placeholder={` Search for a country...`}
                    className="input_Search"
                    name='search'
                    value={search}
                    onChange={nameCountry}
                />
                <select onChange={filterRegion}>
                    <option value='all'>All</option>
                    <option value='africa'>Africa</option>
                    <option value='americas'>America</option>
                    <option value='asia'>Asia</option>
                    <option value='europe'>Europa</option>
                    <option value='oceania'>Oceania</option>
                </select>
            </div>
            <div className="container_all">
                {
                    paginado().map(el => (<CardCountries key={el.numericCode} id={el.alpha3Code} img={el.flags.png} name={el.name} poblacion={el.population} capital={el.capital} region={el.region} />))
                }
            </div>
            <div className='btn'>
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
            </div>
            
        </>
    )
}
