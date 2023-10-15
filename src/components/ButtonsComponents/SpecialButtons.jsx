import React from 'react'
import './ButtonsComponents.css';
import { FaBackspace } from 'react-icons/fa';

export const SpecialButtons = (props) => {
  return (
    <div className="container-specials-buttons highlighted">
      <button className="button-clear" onClick={() => props.specialAccions('')}>AC</button>
      <button className="button-c" onClick={() => props.specialAccions(props.deleteOneToOne.slice(0, -1))}><FaBackspace /></button>
      <button className="button-percentager" onClick={(e) => props.addInput(e.target.textContent)}>%</button>
    </div>
  )
}
