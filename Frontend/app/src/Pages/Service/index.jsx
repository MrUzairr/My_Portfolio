import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faUsers, faPhone,faUser,faBellConcierge, faBars, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faReact, faWeebly } from '@fortawesome/free-brands-svg-icons'
export default function Service() {
  const webWindow = () => {
    window.location.href = '/web'
  }
  return (
    <div id='service'>
      <div className="service-container">
      <h2 style={{color:'#EE4E34'}}>Services</h2>
      <div className='service-content' style={{color:'#fff'}}>
        <div>
            <div>
            <FontAwesomeIcon className='service-icon' icon={faReact} />
            </div>
            <h2>Web Development</h2>
            <button onClick={webWindow}>Learn More</button>
        </div>
        <div>
            <div>
            <FontAwesomeIcon className='service-icon' icon={faLaptop} />
            </div>
            <h2>Desktop Development</h2>
            <button>Learn More</button>
        </div>
      </div>
      </div>
    </div>
  )
}
