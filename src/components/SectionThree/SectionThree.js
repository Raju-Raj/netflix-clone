import React from 'react';
import './SectionThree.css';
import movievideo from '../../assets/video-devices-in.mp4'
import tvImage from '../../assets/section5/device.png'

const SectionThree = () => {
  return (
    <div className='section-three'>

        <div className='secThree-body'>

            <div className='secthree-l'>
               <div className='content'>
               <h1>Watch everywhere.</h1>
                <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
               </div>
            </div>

            <div className='secthree-r'>
            <video src={movievideo} autoPlay muted loop/>
            <img src={tvImage} alt=''/>
            </div>

        </div>

    </div>
  )
}

export default SectionThree