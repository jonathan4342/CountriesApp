import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DetailsCountry } from '../pages/DetailsCountry'
import { Home } from '../pages/Home'
export const RouteApp = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/country/:id'element={<DetailsCountry/>}/>
            </Routes>
        </Router>
    )
}
