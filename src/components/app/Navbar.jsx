import React from 'react'
import { Link } from "react-router-dom"


function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/most-popular">Most Popular</Link>
        </div>
    )
}

export default Navbar
