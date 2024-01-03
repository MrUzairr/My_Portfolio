import React,{useState,useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll'
export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav')
  }
  return (
    <div className='nav-container'>
      <div className='nav-content'>
        <div className='logo' >
            <p><i>M</i><span className='logo-color'>uhammad</span> <i>U</i><span className='logo-color'>zair</span></p>
        </div>
        <nav ref={navRef}>
                <Link className='nav-links' to='home' spy={true} smooth={true} offset={-100} duration={800} >Home</Link>
                <Link className='nav-links' to='about' spy={true} smooth={true} offset={-100} duration={800} >About</Link>
                <Link className='nav-links' to='skill' spy={true} smooth={true} offset={-10} duration={800} >Skills</Link>
                <Link className='nav-links' to='service' spy={true} smooth={true} offset={-100} duration={800} >Services</Link>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FontAwesomeIcon icon={faTimes} />
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  )
}

// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import {Link} from 'react-scroll'
// export default function Navbar() {
  
//   return (
//     <div className='nav-container'>
//       <div className='nav-content'>
//         <div className='logo' >
//             <p><i>M</i><span className='logo-color'>uhammad</span> <i>U</i><span className='logo-color'>zair</span></p>
//         </div>
//         <div className='nav-tabs'>
//         <input type="checkbox" id="check" />
//             <label for="check" className="checkbtn">
//             <FontAwesomeIcon icon={faBars} />
//         </label>
//             <ul>
//                 <li><Link className='nav-links' to='home' spy={true} smooth={true} offset={-100} duration={800} >Home</Link></li>
//                 <li><Link className='nav-links' to='about' spy={true} smooth={true} offset={-100} duration={800} >About</Link></li>
//                 <li><Link className='nav-links' to='skill' spy={true} smooth={true} offset={-10} duration={800} >Skills</Link></li>
//                 <li><Link className='nav-links' to='service' spy={true} smooth={true} offset={-100} duration={800} >Services</Link></li>
//             </ul>
//         </div>

//       </div>
//     </div>
//   )
// }
