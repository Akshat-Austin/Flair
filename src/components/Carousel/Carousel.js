import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CarouselImage from '../../assets/images/image 32.png'
import DoteImage from '../../assets/images/extra/Group-2126.png'
import './carousel.css'

const CarouselDiagram = () => {
    return (
        <div className='carousel-box'>
            <h1 className='carousel-heading'>They love us. You will too</h1>
            <div className='back-box'></div>
            <AliceCarousel disableButtonsControls={true}>
                <img src={CarouselImage} className="sliderimg" alt='Sliding'/>
                <img src={CarouselImage} className="sliderimg" alt='Sliding'/>
                <img src={CarouselImage} className="sliderimg" alt='Sliding'/>
                <img src={CarouselImage} className="sliderimg" alt='Sliding'/>
            </AliceCarousel>
            <img src={DoteImage} className="dot-image" alt='Sliding' />
            <a className='read-about' href='#'>read success stories <i className=" fas fa-chevron-right"></i></a>
        </div>
    )
}

export default CarouselDiagram
