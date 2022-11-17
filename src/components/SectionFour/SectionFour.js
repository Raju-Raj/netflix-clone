import React from 'react';
import './SectionFour.css';
import image from '../../assets/section6/children.png';

const SectionFour = () => {
  return (
    <div className='section-four'>

        <div className='secFour-body'>

            <div className='secFour-l'> 
                <img src={image} alt=''/>
            </div>

            <div className='secFour-r'>
                <div className='content'>
                <h1>Create profiles for children.</h1>
                <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
                </div>
            </div>

        </div>

    </div>
  )
}

export default SectionFour