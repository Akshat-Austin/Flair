import React from 'react'
import Dot from '../../assets/images/extra/Group-2126.png'
import Banner from '../../assets/images/group images/Group-2216.png'
import Ellipse from '../../assets/images/Ellipse-5.png'
import './home.css'

const Home = () => {
    return (
        <div className='container'>
            <div className='sidebar'>
                <img className='dot' src={Dot} alt='dot' />
                <div className='main'>
                    <div className='img'>
                        <h1 className='heading'>Virtually Try <br /> Any Clothing</h1>
                        <img className='ellipse' src={Ellipse} alt='ellipse' />
                    </div>
                    <p className='para'>Flair is an automated platform for you to create <br /> thousands of fashion images and marketing content for <br /> your brand. </p>
                </div>
                <div className='buttons'>
                    <button className='try'>Try Now</button>

                    <button className='discover'>Discover More
                        <div className='icon'>
                            <i class="arrow fas fa-chevron-down"></i>
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <img className='banner' src={Banner} alt='banner' />
            </div>
        </div>
    )
}

export default Home
