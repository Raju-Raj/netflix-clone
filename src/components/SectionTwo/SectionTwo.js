import React from 'react';
import './SectionTwo.css';
import pnhImg from '../../assets/section4/image.jpg';
import bookImg from '../../assets/section4/boxshot.png';
import downloadimg from '../../assets/section4/download.png';

const SectionTwo = () => {
  return (
    <div className='section-two'>

        <div className='sectionTwo-body'>

            <div className='secTwo-l'>
                <img src={pnhImg} alt=''/>
                <div className='box'>
                    <img src={bookImg} alt=''/>
                    <div className='matter'>
                        <h4>Stranger Things</h4>
                        <p>Downloading...</p>
                    </div>
                    <img src={downloadimg} alt=''/>
                </div>
            </div>

            <div className='secTwo-r'>
                <h1>Download your shows to watch offline.</h1>
                <h3>Save your favourites easily and always have something to watch.</h3>
            </div>

        </div>

    </div>
  )
}

export default SectionTwo