import React from 'react'
import './contactui.css';
import instagram from './../image/instalogo.png';
import twitter from './../image/twitterlogo.png';
import mail from './../image/gmaillogo.png';
import BG from './../image/contLogo.jpg'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import './contactui.css'
const ContactUi = () => {
  return (
   <>
    <div className='header-cont'>
      <img src={BG}></img>
    </div>
    <div className="contact-us">
        <div className='Heading'>
      <h2>Get in Touch</h2>
      <h2>Where we Are</h2>
      </div>

      <div className="contact-details">
        <div className="column">
          <p>
            <strong>Email:</strong>
          </p>
          <p>
            <a href="mailto:your@email.com">dhruvilrx100@email.com</a>
          </p>
        </div>

        <div className="column">
          <p>
            <strong>Social Media:</strong>
          </p>
          <p className="social-icon">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </p>
        </div>

        <div className="column">
          <p>
            <strong>Address:</strong>
          </p>
          <p>Nadiad,Gujarat,India</p>
        </div>
      </div>
    </div>
   </>
  )
}

export default ContactUi;