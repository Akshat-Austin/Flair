import React from 'react'
import Group from '../../assets/images/people image/Group-2198.png'
import N1 from '../../assets/images/people image/Group-2199.png'
import N2 from '../../assets/images/people image/Group-2200.png'
import N3 from '../../assets/images/people image/Group-2201.png'
import N4 from '../../assets/images/people image/Group-2202.png'
import './stepByStep.css'

const StepByStep = () => {
    return (
        <div className='steps'>
            <div>
                <h3 className='steps-heading1'>Step By Step</h3>
                <h1 className='steps-heading2'>How It Works?</h1>
                <p className='steps-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='group'>
                <img className='group-photo' src={Group} alt='group' />
                <img className='n1' src={N1} alt='n1' />
                <img className='n2' src={N2} alt='n2' />
                <img className='n3' src={N3} alt='n3' />
                <img className='n4' src={N4} alt='n4' />
            </div>
        </div>
    )
}

export default StepByStep
