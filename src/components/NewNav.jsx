import React from 'react'
import './Navbar.css'
import {useState} from 'react';

function NewNav() {
  const navLinks = [{
    title: "Home",
    link: "#"

  },
  {
    title: "Contact Us",
    link: "#"

  },
  {
    title: "About",
    link: "#"

  }
  ]
  const [menuToggle,setMenuToggle]= useState(false);
   
  const handleToggleState = ()=>{
    setMenuToggle((prev)=>{
      return !prev;
    });
  }

  return (
    <nav className="navbar-custom">
      <h1 className="brand-moto">{"NOURISH BY NEELAM"}</h1>
       <div className='menu-icons' onClick={handleToggleState}>
        {menuToggle==false?<div> 🎟 </div>:<div>⚔ </div>} 
         
       </div>
      <ul  className={menuToggle===true?' navigator activetoggle':'navigator'} >
      {navLinks.map(link => {
        return (<li key={link.title}>
          <a href={link.link} className='custom-nav-link'>
            {link.title}
          </a>
        </li>
        
        )
      })}
      </ul>
    </nav>
  )
}

export default NewNav