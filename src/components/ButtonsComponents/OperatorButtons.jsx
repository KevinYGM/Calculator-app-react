import React from 'react'
import './ButtonsComponents.css';

export const OperatorButtons = () => {
  return (
    <>
      <div className="container-operator-buttons highlighted">
        <button className="button-division">÷</button>
        <button className="button-multiplication">X</button>
        <button className="button-subtraction">-</button>
        <button className="button-addition">+</button>
      </div>
    </>
  )
}
