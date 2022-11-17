import React from 'react';
import './SectionOne.css';
import tvimg from '../../assets/section2/tv.png';
import movievideo from '../../assets/video-tv-in-0819.mp4';


const SectionOne = () => {
  return (
    <div  className='sec-one'>

        <div className='secOne-body max-width'>

            <div className='secOne-l'>
                <h1>Enjoy on your TV.</h1>
                <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
            </div>

            <div className='secOne-r'>
                <img src={tvimg} alt=''/>
                <video src={movievideo} autoPlay muted loop/>
            </div>

        </div>

    </div>
  )
}

export default SectionOne