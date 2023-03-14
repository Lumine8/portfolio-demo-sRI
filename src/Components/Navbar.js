import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { ReactComponent as Hamburger } from '../assets/hamburger.svg'
import '../Components/styleSheets/navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="Navcontainer">
        <div className="logo">
          <h1 className='logo'>UI DEV</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
          <li>
              <HashLink to="/#Home">Home</HashLink>
            </li>
            <li>
              <HashLink to="/#About">About</HashLink>
            </li>
            <li>
              <HashLink to="/#Projects">Projects</HashLink>
            </li>
            <li>
              <HashLink to="/#Contact">Contact</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar