import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
   <div className='navbar navbar-dark navbar-lg-0 custom-navbar bg-secondery' >
       <ul className="nav nav custom-nav" >
         
         <li className='nav-item'>
             <a href='#' className='nav-link'>Home</a>
             </li>
             <li className='nav-item'>
             <a href='#' className='nav-link'>Products</a>
             </li>
             </ul>
   </div>
  )
}

export default Navbar