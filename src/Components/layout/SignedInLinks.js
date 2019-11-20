import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/CreateProject' style={{ color: 'black' }}>New Project</NavLink></li>
                <li><NavLink to='/' style={{ color: 'black' }}>Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating green lighten-1">DSC</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedInLinks