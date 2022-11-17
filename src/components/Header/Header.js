import React from 'react';
import './Header.css';
import logo from '../../assets/netflix.png';
import globeimg from '../../assets/section1/globe.png';

const Header = () => {
  return (
    <div className='header'>

        <div className='header-body'>

            <div className='header-t max-width'>
                <img src={logo} alt='' className='logo'/>
                <div className='buttons'>
                    <button className='btn1'>
                    <img src={globeimg} alt='' className='globeimg'/>
                    <select>
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                    </button>
                    <button className='btn2'>
                        Sign In
                    </button>
                </div>
            </div>

            <div className='header-b'>
                <div className='content'>
                <h1>Unlimited movies, TV shows and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className='email-form'>
                    <input type="text" placeholder="Email Address"/>
                    <button>Get Started</button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Header