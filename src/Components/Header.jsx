import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <Link to='/Splash'>
            </Link>
            <Link to='/LoginPage'>
            </Link>
            <Link to='/OTP'></Link>
            <Link to='/Home'></Link>
        </div>
    )
}
