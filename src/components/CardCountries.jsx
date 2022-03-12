import React from 'react'
import { Link } from 'react-router-dom'

export const CardCountries = ({ name,img,id }) => {

    return (
        <div className="card-countries">
            <Link to={`/country/${id}`}>
            <img src={img} alt="Countri" width="275px" height="150px" />
            </Link>
            <h3>{name}</h3>
        </div>
    )
}