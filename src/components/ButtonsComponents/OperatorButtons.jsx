import React from 'react'
import './ButtonsComponents.css';

export const OperatorButtons = (props) => {

  return (
    <>
      <div className="container-operator-buttons highlighted">
        <button className="button-division" onClick={(e) => props.addInput(e.target.textContent)}>÷</button>
        <button className="button-multiplication" onClick={(e) => props.addInput(e.target.textContent)}>X</button>
        <button className="button-subtraction" onClick={(e) => props.addInput(e.target.textContent)}>-</button>
        <button className="button-addition" onClick={(e) => props.addInput(e.target.textContent)}>+</button>
      </div>
    </>
  )
}
