import React from 'react'
import './Screen.css';

export const Screen = () => {
  return (
    <div className="screen">
      <div className="screen-operation">15+27</div>
        <div className="screen-result">
          <span>=</span>
          <span>42</span>
        </div>
    </div>
  )
}
