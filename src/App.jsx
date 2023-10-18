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
  const [statePostOperator, setStatePostOperator] = useState(false);


 /* function (helper) that makes the connection with the keyboard keys*/ 
  KeysConnections();


 /* function that checks if the pressed button is an operator*/ 
  const isOperator = (val) => {
    return isNaN(val) && (val !== '.') && (val !== '=') && (val !== '%');
  };

 
/* Function that serves to capture the pressed key on the screen */
  const addInput = (val) => {

    setStateButtonResult(false);

    isOperator(val) ? setStatePostOperator(true) : setStatePostOperator(false);
    
/* Conditionals to control the proper input of characters. */    
    if(isOperator(val) && statePostOperator){
      setInput(input.slice(0, -1) + val)
    }else if((isOperator(val) || val === ".") && input.length === 0){
      setInput(input + 0 + val);
    }else if((val === "%" || val === ".") && statePostOperator ){
      setInput(input);
      setStatePostOperator(true);
    }else if(val === "%" && input.length === 0 ){
      setInput(input);
    }else if((val === "%" || val === ".") && (input.slice(-1) === "%" || input.slice(-1) === '.' )){
      setInput(input);
    }else{
      setInput(input + val);
    }
    
/* Conditionals to control the reaction of the app after issuing a result. */    
    if(stateButtonResult && isOperator(val)){
      setInput(screenResult.replace(/,/g, '') + val);
      setScreenResult("0");
    }else if(stateButtonResult && !isOperator(val)){
      setInput(val);
      setScreenResult("0");
    }
};


/* function that performs the calculations */
const calculateResult = () => {
  
setStateButtonResult(true);
  
const sanitizedInput = input.replace(/x/g, "*").replace(/÷/g, "/").replace(/,/g, "");
  
    try {
      if (sanitizedInput) {
        const result = evaluate(sanitizedInput);
        if(!Number.isInteger(result)){
          const roundedResult = Math.ceil(result * 100000) / 100000;
          setScreenResult(roundedResult.toFixed(5).replace(/\.?0+$/, '').toLocaleString());
        }else{
          setScreenResult(result.toLocaleString())}
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
                    setStatePostOperator = { setStatePostOperator}
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
