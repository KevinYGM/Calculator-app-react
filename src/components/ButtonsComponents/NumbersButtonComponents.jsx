import React from 'react'
import './ButtonsComponents.css';

export const NumbersButtonComponents = (props) => {

  return (
    <>
      <button id="button-seven" onClick={(e) => props.addInput(e.target.textContent)}>7</button>
      <button id="button-eight" onClick={(e) => props.addInput(e.target.textContent)}>8</button>
      <button id="button-nine" onClick={(e) => props.addInput(e.target.textContent)}>9</button>
      <button id="button-four" onClick={(e) => props.addInput(e.target.textContent)}>4</button>
      <button id="button-five" onClick={(e) => props.addInput(e.target.textContent)}>5</button>
      <button id="button-six" onClick={(e) => props.addInput(e.target.textContent)}>6</button>
      <button id="button-one" onClick={(e) => props.addInput(e.target.textContent)}>1</button>
      <button id="button-two" onClick={(e) => props.addInput(e.target.textContent)}>2</button>
      <button id="button-three" onClick={(e) => props.addInput(e.target.textContent)}>3</button>
      <button id="button-decimal" onClick={(e) => props.addInput(e.target.textContent)}>.</button>
      <button id="button-zero" onClick={(e) => props.addInput(e.target.textContent)}>0</button>
      <button id="button-doublezero" onClick={(e) => props.addInput(e.target.textContent)}>00</button>
    </>
  )
}
