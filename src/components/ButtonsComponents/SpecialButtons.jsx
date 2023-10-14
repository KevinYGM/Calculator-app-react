import React from 'react'
import './ButtonsComponents.css';
import { FaBackspace } from 'react-icons/fa';

export const SpecialButtons = () => {
  return (
    <div className="container-specials-buttons highlighted">
      <button className="button-clear">AC</button>
      <button className="button-c"><FaBackspace /></button>
      <button className="button-percentager">%</button>
    </div>
  )
}
