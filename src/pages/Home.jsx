import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardCountries } from '../components/CardCountries'
import { getAllCountries } from '../redux/actions/AllContries'
import { css } from "@emotion/react";
import { MoonLoader } from 'react-spinners';

export const Home = () => {

    const dispatch = useDispatch()
    const info = useSelector(state => state.countries)
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
  `;
    useEffect(() => {
        dispatch(getAllCountries())
    }, [])

    if (!info) {
        return <MoonLoader
            css={override} size={60} />
    }
    return (
        <>
            <div className="container_inicio">
                <h2>Where in the world?</h2>
                <h2>Dark Mode</h2>
            </div>
            <div className="container_filter">
                <input type="text"
                    placeholder='Search for a country...'
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
