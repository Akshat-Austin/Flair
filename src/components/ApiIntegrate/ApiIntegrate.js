import React from 'react'
import Color3 from '../../assets/images/background image/Group-2135.png'
import Frame3 from '../../assets/images/group images/Frame-2139.png'
import './apiintegrate.css'

const ApiIntegrate = () => {
    return (
        <div className='api'>
            <div className='group3'>
                <div>
                    <img className='color3' src={Color3} alt='color1' />
                    <img className='frame3' src={Frame3} alt='frame1' />
                </div>
                <div className='title3'>
                    <h1 className='h3'>API Integration For Your <br/> Business Needs</h1>
                    <p className='p3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul className='ul3'>
                        <li>Reliable & scaleable</li>
                        <li>Customize the response to fit your app</li>
                        <li>Personal customer support</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ApiIntegrate
