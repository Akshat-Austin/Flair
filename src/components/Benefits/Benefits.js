import React from 'react'
import Color1 from '../../assets/images/background image/Group-2133.png'
import Frame1 from '../../assets/images/group images/Frame-2137.png'
import './benefits.css'

const Benefits = () => {
    return (
        <div className='benefits'>
            <div>
                <h3 className='benefit-heading1'>Benefits</h3>
                <h1 className='benefit-heading2'>What Flair Can Do For You</h1>
                <p className='benefit-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='group1'>
                <div>
                    <img className='color1' src={Color1} alt='color1' />
                    <img className='frame1' src={Frame1} alt='frame1' />
                </div>
                <div className='title1'>
                    <h1 className='h1'>Put Clothing Apparels On <br /> Professional Models Instantly</h1>
                    <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul className='ul'>
                        <li>Remove the background of your clothing photos</li>
                        <li>Automatically detect your clothings and put them on models</li>
                        <li>Provide your own models or choose from our professional model images</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Benefits
