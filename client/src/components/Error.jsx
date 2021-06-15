import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Error() {
    return (
        <div className='text-white mt-5 d-flex justify-content-center align-items-center flex-column' style={{height:"100vh"}}>
            <h1>404 Error Page</h1>
            <NavLink to='/'>Go Back</NavLink>
        </div>
    )
}
