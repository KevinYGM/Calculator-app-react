import React from 'react'
import './ButtonsComponents.css';

export const ResultButton = ({ calculateResult }) => {
  return (
    <button className="button-result highlighted" 
            id="button-result" 
            onClick={ calculateResult }
            >=</button>
  )
}
