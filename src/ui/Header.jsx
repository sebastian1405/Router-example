import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div className='container'>
      <nav className='header'>
      <p>Logo</p>
      <ul className='menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
      </ul>
    </nav>
   </div>
  )
}

export default Header