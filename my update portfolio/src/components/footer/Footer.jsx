import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo' >Noman Nehan</a>

            <ul className='premalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#Awards & Recognition">Awards</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.facebook.com/share/151hdTMhyH/"><FaFacebookF/></a>
                <a href="https://www.instagram.com/_nnoms?igsh=YW1mOW92NWhkeHNx"><FiInstagram/></a>
                <a href="https://x.com/noman_nehan?t=iiVEgUfG5rawc_CpiOIaLg&s=09"><IoLogoTwitter/></a>
            </div>
        <div className="footer__copyright">
            <small>&copy; Abdullah Al Noman  All rights reserved.</small>
        </div>


        </footer>

    )
}

export default Footer
