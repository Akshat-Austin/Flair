import React from 'react'
import Color2 from '../../assets/images/background image/Group-2134.png'
import Frame2 from '../../assets/images/group images/Frame-2138.png'
import './deploy.css'

const Deploy = () => {
    return (
        <div className='deploy'>
            <div className='group2'>
                <h1 className='deploy-heading2'>Deploy Thousands Of <br/> Fashion Images <span className='heading-span'>(Better Wording / <br/> Take This Out?)</span></h1>
                <p className='deploy-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua.</p>
                <ul className='deploy-ul'>
                    <li>Upload your apparels in bulk</li>
                    <li>Mix and match various clothings on different models</li>
                    <li>Test which combinations have the highest conversion rate</li>
                </ul>
            </div>
            <div>
                <img className='color2' src={Color2} alt='color2' />
                <img className='frame2' src={Frame2} alt='frame2' />
            </div>
        </div>
    )
}

export default Deploy
