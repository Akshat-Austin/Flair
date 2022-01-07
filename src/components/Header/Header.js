import React from 'react'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className='navbar'>
                <div className='nav'>
                    <a className='logo'> fl<span>ai</span>r</a>
                    <div className='navitems'>
                        <a className='nav-item' href='#'>Home</a>
                        <a className='nav-item' href='#'>Product</a>
                        <a className='nav-item' href='#'>For Brands</a>
                        <a className='nav-item' href='#'>Pricing</a>
                        <a className='s-line' href='#'></a>
                        <a className='nav-item' href='#'>Sign In</a>
                    </div>
                </div>
                <button className='sign-up' >Sign Up</button>
            </div>
        </header>
    )
}

export default Header
