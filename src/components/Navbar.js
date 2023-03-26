import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FiAlignJustify } from 'react-icons/fi'
import logo from '../assets/images/logo.svg'
function Navbar() {
  const [show, setShow] = useState(false)
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/' className='nav-logo'>
            <img src={logo} alt='logo' />
          </Link>
          <button
            type='button'
            className='nav-btn'
            onClick={() => setShow(!show)}
          >
            <FiAlignJustify />
          </button>
        </div>
        <div className={show ? 'nav-links show-links' : 'nav-links'}>
          <Link
            onClick={() => setShow(false)}
            to='/'
            className='nav-link '
            activeClassName='active-link'
          >
            home
          </Link>
          <Link
            onClick={() => setShow(false)}
            to='/recipes'
            className='nav-link '
            activeClassName='active-link'
          >
            recipes
          </Link>
          <Link
            onClick={() => setShow(false)}
            to='/tags'
            className='nav-link '
            activeClassName='active-link'
          >
            tags
          </Link>
          <Link
            to='/about'
            className='nav-link '
            activeClassName='active-link'
            onClick={() => setShow(false)}
          >
            about
          </Link>
          <nav className='nav-link contact-link'>
            <Link to='/contact' className='btn'>
              contact
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
