import React from 'react'
import Header from './Header/Header'
import Home from './Home/Home'
import Benefits from './Benefits/Benefits'
import StepByStep from './StepByStep/StepByStep'
import Deploy from './Deploy/Deploy'
import Design from './Design/Design'
import Drive from './Drive/Drive'
import Platform from './Platform/Platform'
import ApiIntegrate from './ApiIntegrate/ApiIntegrate'
import CarouselDiagram from './Carousel/Carousel'
import Subscribe from './Subscribe/Subscribe'
import Footer from './Footer/Footer'

const Routes = () => {
    return (
        <div>
            <Header />
            <Home />
            <Benefits />
            <StepByStep />
            <Deploy />
            <Design />
            <Drive />
            <Platform />
            <ApiIntegrate />
            <CarouselDiagram/>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Routes
