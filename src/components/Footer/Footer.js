import React from 'react';
import './Footer.css';
import globeimg from '../../assets/section1/globe.png';

const Footer = () => {
  return (
    <div className='footer'>
        
            <div className='footer-body'>

            <p>Questions? Call 000-800-040-1843</p>

            <div className='footer-links'>
                <ul>
                    <li>FAQ</li>
                    <li>Investor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>
                </ul>
                <ul>
                    <li>Help Centre</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legal Notices</li>
                </ul>
                <ul>
                    <li>Account</li>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Only On Netflix</li>
                </ul>
                <ul>
                    <li>Media Centre</li>
                    <li>Terms of Use</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <button className='btn'>
            <img src={globeimg} alt='' className='globeimg'/>
                <select>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
            </button>
            <p>Netflix India</p>
            </div>
    </div>
  )
}

export default Footer