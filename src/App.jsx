import './App.css';
import { FaReact } from "react-icons/fa6";
import { FooterComponents } from './components/FooterComponents/FooterComponents';
import { HeaderComponents } from './components/HeaderComponents/HeaderComponents';
import { Screen } from './components/Screen/Screen'
import { NumbersButtonComponents } from './components/ButtonsComponents/NumbersButtonComponents';
import { SpecialButtons } from './components/ButtonsComponents/SpecialButtons';
import { OperatorButtons } from './components/ButtonsComponents/OperatorButtons';
import { ResultButton } from './components/ButtonsComponents/ResultButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import { KeysConnections } from './helper/keysConnections';

function App() {

/*states*/ 
  const [input, setInput] = useState('');
  const [screenResult, setScreenResult] = useState('0');
  const [stateButtonResult, setStateButtonResult] = useState(false);

 /* function (helper) that makes the connection with the keyboard keys*/ 
  KeysConnections();


 /* function that checks if the pressed button is an operator*/ 
  const isOperator = val => {
    return isNaN(val) && (val !== '.') && (val !== '=') && (val !== '%');
  };

  
/*function that serves to capture the pressed key on the screen*/
  const addInput = (val) => {

    setStateButtonResult(false);


     if ((val === '.' || val === 'x' || val === '÷' || val === '%') 
        && 
      (input.slice(-1) === '.' ||input.slice(-1) === '+' || input.slice(-1) === '-' || input.slice(-1) === 'x' || input.slice(-1) === '÷' || input.slice(-1) === '%')){
      setInput(input);

    }else if((val === '+' || val === '-') && (input.slice(-1) === '.' ||input.slice(-1) === '+' || input.slice(-1) === '-') ){
      setInput(input);

    }else{
    setInput(input + val);
  }

  if(stateButtonResult && isOperator(val)){
    setInput(screenResult + val);
    setScreenResult("0");
  }else if(stateButtonResult && !isOperator(val)){
    setInput(val);
    setScreenResult("0");
  }
};


/* function that performs the calculations */
const calculateResult = () => {
  
setStateButtonResult(true);
  
const sanitizedInput = input.replace(/x/g, "*").replace(/÷/g, "/");
  
  try {
    if (sanitizedInput) {
      setScreenResult(evaluate(sanitizedInput).toString());
    } else {
      alert("Please enter values ​​to perform calculations.");
    }
  } catch (error) {
    alert(
      "An error occurred while performing the calculation. Please check the mathematical expression and try again."
    );
  }
}


return (
    <>
      <HeaderComponents />
      
      <main className="container-main">
        <div className="body-calculator">

          <div className="header-calculator">
            <span>Calculator</span> 
            <span><FaReact /></span>
          </div>

          <Screen
              inputOperation = { input } 
              screenResult = { screenResult }
            />

          <div className="buttons">
            <SpecialButtons 
                    setInput = { setInput }
                    input = { input }
                    setScreenResult = { setScreenResult }
                    screenResult = { screenResult }
                    stateButtonResult = { stateButtonResult }
                    addInput = { addInput }
                    />
            <OperatorButtons 
                    addInput = { addInput }
                    />
            <NumbersButtonComponents 
                    addInput = { addInput }
                    />
            <ResultButton calculateResult= { calculateResult } />
          </div>

          <div className="brand">
            <span>KYGM</span>
          </div>
        </div>
      </main>

      <FooterComponents />
    </>
  );
}


export default App;
