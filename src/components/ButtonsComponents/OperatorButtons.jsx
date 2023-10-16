import React from 'react'
import './ButtonsComponents.css';

export const OperatorButtons = (props) => {

  return (
    <>
      <div className="container-operator-buttons highlighted">
        <button id="button-division" onClick={(e) => props.addInput(e.target.textContent)}>÷</button>
        <button id="button-multiplication" onClick={(e) => props.addInput(e.target.textContent)}>x</button>
        <button id="button-subtraction" onClick={(e) => props.addInput(e.target.textContent)}>-</button>
        <button id="button-addition" onClick={(e) => props.addInput(e.target.textContent)}>+</button>
      </div>
    </>
  )
}
