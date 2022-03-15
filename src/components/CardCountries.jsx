import React from 'react'
import { Link } from 'react-router-dom'

export const CardCountries = ({ name, img, id, poblacion, region, capital }) => {

    return (
        <>
            <div className="card-countries">
                <div className="card-img">
                    <Link to={`/country/${id}`}>
                        <img src={img} alt="Country" width="310px" height="200px" />
                    </Link>
                </div>
                <div className="card-info">
                    <h1>{name}</h1>
                    <h4>Population: {poblacion}</h4>
                    <h4>Region: {region}</h4>
                    <h4>Capital: {capital}</h4>
                </div>
            </div>
        </>
    )
}