import React from 'react'
import CompanyLogo from '../../assets/images/extra/Frame-2146.png'
import Cursor from '../../assets/images/clarity_cursor-hand-click-line.png'
import './platform.css'

const Platform = () => {
    return (
        <div className='platform'>
            <div>
                <h3 className='platform-heading1'>PLATFORM</h3>
                <h1 className='platform-heading2'>API Integration With Your Favorite <br/> ECommerce Platform</h1>
                <p className='platform-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='company-group'>
                <img className='company-logo' src={CompanyLogo} alt='Company Logo' />
            </div>
            <img className='cursor' src={Cursor} alt='cursor' />
        </div>
    )
}

export default Platform

