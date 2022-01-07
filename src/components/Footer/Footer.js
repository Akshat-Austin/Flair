import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <a className='logo'> fl<span>ai</span>r</a>
            <div className='address'>
                <div>
                    <p className='home-address'><i class="add fas fa-building"></i>Jl. Diponegoro No.22, Citarum, Kec. Bandung Wetan, Kota <br /> <span className='remain'>Bandung, Jawa Barat 40115</span></p>
                    <p><i class="add fas fa-envelope"></i>info@flair.ai</p>
                </div>
                <div>
                    <button className='button1'>Try Now</button>
                    <button className='button2'>Sign Up</button>
                </div>
            </div>
            <div className='copy-right'>
                <p className='copyright'>© 2021 Flair.AI, All Right Reserved</p>
                <div className='tag'>
                    <a className='tag1' href='#'>Privacy Policy</a>
                    <a className='tag2' href='#'>Terms of Service</a>
                    <a className='tag3' href='#'>Contact Us</a>
                    <a className='tag4' href='#'>About us</a>
                </div>
            </div>
            <div className='social-icons'>
                <a className='all-icons' href='#'><i class="facebook fab fa-facebook-square"></i></a>
                <a className='all-icons' href='#'><i class="twitter fab fa-twitter"></i></a>
                <a className='all-icons' href='#'><i class="instagram fab fa-instagram"></i></a>
                <a className='all-icons' href='#'><i class="youtube fab fa-youtube"></i></a>
            </div>
        </div>
    )
}

export default Footer
