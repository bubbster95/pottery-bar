import React from 'react';
import { Link } from 'react-router-dom';

import SocialIcon from "../../Components/Social-Icon/social-icon.js"

import './footer.scss'

const Footer = () => {
    return <div className="footer-container">
        <div className='footer-wrapper footer-links'>
            <h3 className='center'>Quick Links</h3>
            <Link className='footer-link' to='/first-time-climb'>About</Link>
            <Link className='footer-link' to='/programs'>Programs</Link>
            <Link className='footer-link' to='/rates'>Rates</Link>
        </div>
        <div className='footer-wrapper footer-social'>
            <h3>Socialize With Us</h3>

            <SocialIcon path="4015336729" title="Phone"/>
            <SocialIcon path="https://william-stiles.com" title="insta"/>
            <SocialIcon path="stiles.billy@gmail.com" title="email"/>
        </div>
        <div className='footer-wrapper footer-contact'>
            <h3>Haiku Of The Day</h3>

            <p>Lathered in clay earth.</p>
            <p>The wheel of time eternal.</p>
            <p>Dry with fires touch.</p>


        </div>
    </div>
}


export default Footer;
