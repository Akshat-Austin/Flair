import React from 'react'
import Collarge from '../../assets/images/group images/Group-2197.png'
import Icon1 from '../../assets/images/png/icon-01.png'
import Icon2 from '../../assets/images/png/icon-02.png'
import Icon3 from '../../assets/images/png/icon-03.png'
import './drive.css'

const Drive = () => {
    return (
        <div className='drive'>
            <div>
                <img className='collarge' src={Collarge} alt='collarge' />
            </div>
            <div className='title4'>
                <h1 className='drive-h1'>Drive metrics that matter</h1>
                <p className='drive-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='extra-numbers'>
                    <span className='percent'>14% </span>
                    <span className='percent1'>_ </span>
                    <p className='para2'> More revenue</p>
                    <div className='image-icon'>
                        <img className='icon-1 represent' src={Icon1} alt='icon' />
                    </div>
                    
                </div>
                <p className='extra-numbers-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <div className='extra-numbers'>
                    <span className='percent'>26% </span>
                    <span className='percent1'>_ </span>
                    <p className='para2'> Fewer Returns</p>
                    <div className='image-icon'>
                        <img className='icon-2 represent' src={Icon2} alt='icon' />
                    </div>
                </div>
                <p className='extra-numbers-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                <div className='extra-numbers'>
                    <span className='percent'>42% </span>
                    <span className='percent1'>_ </span>
                    <p className='para2'> Instant Product Drops and Marketing</p>
                    <div className='image-icon'>
                        <img className='icon-3 represent' src={Icon3} alt='icon' />
                    </div>
                </div>
                <p className='extra-numbers-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
        </div>
    )
}

export default Drive
