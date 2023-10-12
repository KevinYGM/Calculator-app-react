import { BsLinkedin } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";
import './FooterComponents.css';


import React from 'react'

export const FooterComponents = () => {
  return (
    <footer>
        <div className="logo">
          <span>KG</span>
          <h3>Kevin González Montenegro</h3>
        </div>

        <div className="react">
        <span><FaReact /></span>
        <span>&copy; Created with <strong>React</strong> in 2023  </span>
        </div>
        
        <a href="https://www.linkedin.com/in/kevinygm/" className='linkedin' target="_blank" rel="noreferrer">
          <BsLinkedin />
          <span>Programmer Linkedin</span>
        </a>
      </footer>
  )
}
