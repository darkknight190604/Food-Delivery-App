import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="Logo" />
                    <p>Discover delicious meals crafted with fresh ingredients and
                        delivered straight to your doorstep. We bring together quality
                        food, amazing flavors, and a seamless ordering experience to
                        make every meal special. Enjoy your favorites anytime with
                        fast, reliable service you can trust.
                    </p>

                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="Facebook" />
                        <img src={assets.twitter_icon} alt="Twitter" />
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </div>
                </div>

                <div className="footer-content-centre">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1 (555) 123-4567</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>

            <hr />
            <p className="footer-copyright">Copyright 2024 © Tomato. All rights reserved.</p>
        </div>
    )
}

export default Footer