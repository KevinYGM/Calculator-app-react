import React from 'react'
import './ButtonsComponents.css';

export const NumbersButtonComponents = (props) => {

  return (
    <>
      <button className="button-seven" onClick={(e) => props.addInput(e.target.textContent)}>7</button>
      <button className="button-eight" onClick={(e) => props.addInput(e.target.textContent)}>8</button>
      <button className="button-nine" onClick={(e) => props.addInput(e.target.textContent)}>9</button>
      <button className="button-four" onClick={(e) => props.addInput(e.target.textContent)}>4</button>
      <button className="button-five" onClick={(e) => props.addInput(e.target.textContent)}>5</button>
      <button className="button-six" onClick={(e) => props.addInput(e.target.textContent)}>6</button>
      <button className="button-one" onClick={(e) => props.addInput(e.target.textContent)}>1</button>
      <button className="button-two" onClick={(e) => props.addInput(e.target.textContent)}>2</button>
      <button className="button-three" onClick={(e) => props.addInput(e.target.textContent)}>3</button>
      <button className="button-decimal" onClick={(e) => props.addInput(e.target.textContent)}>.</button>
      <button className="button-zero" onClick={(e) => props.addInput(e.target.textContent)}>0</button>
      <button className="button-doublezero" onClick={(e) => props.addInput(e.target.textContent)}>00</button>
    </>
  )
}
