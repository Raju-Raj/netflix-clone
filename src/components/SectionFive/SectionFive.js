import React from 'react';
import Questions from '../Questions/Questions';
import './SectionFive.css';

const SectionFive = () => {
  return (
    <div className='section-five'>

        <div className='secFive-body'>

            <h1>Frequently Asked Questions</h1>

            <div className='questions'>
                <Questions/>
            </div>

            <div className='email-sec'>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
              <div className='form-sec'>
              <input type="text" placeholder="Email Address"/>
               <button>Get Started</button>
              </div>
            </div>

        </div>

    </div>
  )
}

export default SectionFive