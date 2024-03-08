import React from 'react'
import './contactui.css';
import instagram from './../image/instalogo.png';
import twitter from './../image/twitterlogo.png';
import mail from './../image/gmaillogo.png';
const ContactUi = () => {
  return (
    <div>
       <footer>  
        <div class="social-icons">
        <a href="https://www.instagram.com">
        <img src={instagram} alt="Instagram"/>
      </a>
      <a href="https://twitter.com">
        <img src={twitter} alt="Twitter"/>
      </a>
      <a href="mailto:contact@example.com" class="email-icon">
        <img src={mail} alt="Email"/>
      </a>
    </div>
       </footer>
    </div>
  )
}

export default ContactUi;