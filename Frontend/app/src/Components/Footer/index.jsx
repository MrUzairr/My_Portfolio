import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faUsers, faPhone,faUser,faBellConcierge, faBars, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faGitlab, faInstagram, faReact, faTwitter, faWeebly, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  const facebook = () => {
    window.location.href = 'https://www.facebook.com/profile.php?id=100073740212382&mibextid=ZbWKwL'
  }
  const twitter = () => {
    window.location.href = 'https://twitter.com/UzairCh06667733?t=7vLstjoc0nBJyW6qlskxLw&s=09'
  }
  const instagram = () => {
    window.location.href = 'https://instagram.com/uzairakhtar100?igshid=NGExMmI2YTkyZg=='
  }
  const youtube = () => {
    window.location.href = 'https://www.youtube.com/@codelab668'
  }
  return (
    <div>
      <div className='footer-container'>
        <h2>Connect Me</h2>
        <div className='footer-content'>
            <div className='footer-icons'>
                <div onClick={facebook}>
                <FontAwesomeIcon className='footer-icon' icon={faFacebookF} />
                </div>
                <div onClick={twitter}>
                <FontAwesomeIcon className='footer-icon' icon={faTwitter} />
                </div>
                <div onClick={instagram}>
                <FontAwesomeIcon className='footer-icon' icon={faInstagram} />
                </div>
                <div onClick={youtube}>
                <FontAwesomeIcon className='footer-icon' icon={faYoutube} />
                </div>
            </div>
            <div className='footer-reserved'>
                <p>All Rights Reserved. © 2023 By <a href="/" className='reseve-name'>Muhammad Uzair</a></p>
            </div>
        </div>
      </div>
    </div>
  )
}
