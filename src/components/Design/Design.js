import React from 'react'
import Vector1 from '../../assets/images/Vector-43.png'
import Vector2 from '../../assets/images/Vector-44.png'
import GroupImage1 from '../../assets/images/group images/Group-2148.png'
import Ellipse1 from '../../assets/images/background image/ellipse/Ellipse-1.png'
import Ellipse2 from '../../assets/images/background image/ellipse/Ellipse-2.png'
import Ellipse3 from '../../assets/images/background image/ellipse/Ellipse-3.png'
import Ellipse4 from '../../assets/images/background image/ellipse/Ellipse-4.png'
import Part1 from '../../assets/images/part image/1.png'
import Part2 from '../../assets/images/part image/2.png'
import Part3 from '../../assets/images/part image/3.png'
import Part4 from '../../assets/images/part image/4.png'
import Part5 from '../../assets/images/part image/5.png'
import Part6 from '../../assets/images/part image/6.png'
import Part7 from '../../assets/images/part image/7.png'
import Part8 from '../../assets/images/part image/8.png'
import Part9 from '../../assets/images/part image/9.png'
import Part10 from '../../assets/images/part image/10.png'
import Part11 from '../../assets/images/part image/11.png'
import Part12 from '../../assets/images/part image/12.png'
import './design.css'

const Design = () => {
    return (
        <div className='design'>
            <div>
                <img className='vector' src={Vector1} alt='vector' />
                <h3 className='head4'>Flair is a <i>Design Platform</i> That Tracks Conversion Data. </h3>
                <h3 className='head4 create'>Create Thousand of <span className='colour'>Fashion ad Variations (Better <br /> wording)</span> In Minutes.</h3>
            </div>
            <div className='second-half'>
                <div>
                    <img className='group-image' src={GroupImage1} alt='Group Image' />
                </div>
                <img className='vactor-2' src={Vector2} alt='Vactor Image' />
                <div className='second-half-1'>
                    <div className='ellipse-group'>
                        <img className='ellipse-1 ellipse-position' src={Ellipse1} alt='Ellipse 1' />
                        <img className='ellipse-2 ellipse-position' src={Ellipse2} alt='Ellipse 2' />
                        <img className='ellipse-3 ellipse-position' src={Ellipse3} alt='Ellipse 3' />
                        <img className='ellipse-4 ellipse-position' src={Ellipse4} alt='Ellipse 4' />
                    </div>
                    <div className='photo-group'>
                        <div className='image-parts'>
                            <img className='part-position' src={Part1} alt='part 1' />
                            <img className='part-position' src={Part2} alt='part 2' />
                            <img className='part-position' src={Part3} alt='part 3' />
                            <img className='part-position' src={Part4} alt='part 4' />
                        </div>
                        <div className='image-parts image-parts-1'>
                            <img className='part-position' src={Part5} alt='part 1' />
                            <img className='part-position' src={Part6} alt='part 2' />
                            <img className='part-position' src={Part7} alt='part 3' />
                            <img className='part-position' src={Part8} alt='part 4' />
                        </div>
                        <div className='image-parts'>
                            <img className='part-position' src={Part9} alt='part 1' />
                            <img className='part-position' src={Part10} alt='part 2' />
                            <img className='part-position' src={Part11} alt='part 3' />
                            <img className='part-position' src={Part12} alt='part 4' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design
