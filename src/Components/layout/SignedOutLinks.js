import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/signup' style={{ color: 'black' }}>Signup</NavLink></li>
                <li><NavLink to='/signin' style={{ color: 'black' }}>Login</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks