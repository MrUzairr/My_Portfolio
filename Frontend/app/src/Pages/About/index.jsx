import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faUsers, faPhone,faUser,faBellConcierge, faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <div id='about'>
      <div className='about-container'>
          <h2 style={{color:'#EE4E34'}}>About ME</h2>
        <div className='about-content'>
          <div className='about-img'>
            <img src="pic3.png" className='about-imgs' alt="" />
          </div>
          <div className="about-txt-content">
            <p>
Greetings! I'm Muhammad Uzair, a 21-year-old student hailing from Gujranwala, Pakistan. I embarked on my academic journey at New Crescent Public High School in my hometown, achieving an impressive 88.54 percent in my matriculation.

Continuing my pursuit of knowledge, I pursued my Intermediate education at Punjab Group of College, Gujranwala, where I excelled with a remarkable score of 97.36 percent.

Currently, I am enrolled in a Bachelor of Science program majoring in Computer Science at the renowned University of Engineering and Technology, Lahore, Pakistan. This esteemed institution is ranked 5th in Pakistan according to the QS Ranking for the year 2023.</p>
            <p style={{marginTop:'10px'}}>I have a passion for gardening, engaging in lengthy discussions on current events, and assisting my peers in their personal growth across various fields. My aspiration is to contribute to creating a better world for all to enjoy. I firmly believe in my ability to effectively share my vision with others.</p>
            <p style={{marginTop:'15px'}}><FontAwesomeIcon icon={faUser} /> Muhammad Uzair</p>
            <p style={{marginTop:'15px'}}><FontAwesomeIcon icon={faPhone} /> +923254744800</p>
            <p style={{marginTop:'15px'}}><FontAwesomeIcon icon={faEnvelope} /> uzairakhtar100@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
