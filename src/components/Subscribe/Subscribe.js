import React from 'react'
import CircleImage1 from '../../assets/images/background image/Ellipse-123.png'
import CircleImage2 from '../../assets/images/background image/Ellipse-124.png'
import CircleImage3 from '../../assets/images/background image/Rectangle-14.png'
import CircleImage4 from '../../assets/images/background image/Rectangle-37.png'
import './subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='contain'>
                <img className='color4' src={CircleImage1} alt='CircleImage' />
                <img className='color5' src={CircleImage2} alt='CircleImage' />
                <img className='color6' src={CircleImage3} alt='CircleImage' />
                <img className='color7' src={CircleImage4} alt='CircleImage' />
                <h1 className='subscribe-heading'>Save Your Money. Just snap your <br/> products, and Flair will do the rest.</h1>
                <p className='subscribe-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='subscribe-search'>
                    <input className='subscribe-input' type="email" id="address" name="address" placeholder='Your Email Address' />
                    <button className='subscribe-button'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
