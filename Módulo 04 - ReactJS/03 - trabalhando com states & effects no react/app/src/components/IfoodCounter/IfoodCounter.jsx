import React, { useState, useEffect } from 'react'
import '../IfoodCounter/IfoodCounter.css'

export default function IfoodCounter() {
  const [value, setValue] = useState(1);
  const [button, setButton] = useState("counter-button-minus-active");

  useEffect(() => {
    document.getElementById('moeda').innerHTML = 'R$ ' + (value * 2.50).toFixed(2);
  },[value])

  function down() {
    if (value <= 1) {
      setButton("counter-button-minus-desactive")
    }
    if (value > 0) {
      setValue(value - 1);
    }
  }

  function up() {
    setValue(value + 1);
    setButton("counter-button-minus-active")
  }

  return (
    <div className="countex-wrapper">
      <h1>{value}</h1>
      <button 
        className={button}
        onClick={down}
        >        
        -
        </button>
      <button 
        className="counter-button-plus-active"
        onClick={up}      
        >
        +
        </button>
        <button id="moeda"></button>
    </div>
  )
}
