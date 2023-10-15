import React from 'react'
import './Screen.css';

export const Screen = (props) => {
  return (
    <div className="screen">
      <div className="screen-operation">{ props.inputOperation}</div>
        <div className="screen-result">
          <span>=</span>
          <span>42</span>
        </div>
    </div>
  )
}
