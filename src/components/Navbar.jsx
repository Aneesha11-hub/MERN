import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gray-900 font-bold px-6 py-4">
    <ul className="flex text-blue-100 justify-around">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/services'}>Services</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        
    </ul>    
    </div>
  )
}
export default Navbar