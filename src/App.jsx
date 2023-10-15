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

function App() {

  const [input, setInput] = useState('');

  /*function that serves to capture the pressed key on the screen*/
  const addInput = val => {
    if ((val === '.' || val === '*' || val === '/' || val === '%') 
        && 
      (input.slice(-1) === '.' ||input.slice(-1) === '+' || input.slice(-1) === '-' || input.slice(-1) === '*' || input.slice(-1) === '/' || input.slice(-1) === '%')){
      setInput(input);

    }else if((val === '+' || val === '-') && (input.slice(-1) === '.' ||input.slice(-1) === '+' || input.slice(-1) === '-') ){
      setInput(input);

    }else{
    setInput(input + val);
  }
};


const calculateResult = () => {
  try {
      if (input) {
        setInput(evaluate(input));
        setInput(evaluate(input).toString());
      } else {
        alert("Por favor ingrese valores para realizar los cálculos")
      }
  } catch (error) {
    alert("Ha ocurrido un error al realizar el cálculo. Por favor revise la expresión matemática e intente nuevamente.");
  }
  };

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
            />

          <div className="buttons">
            <SpecialButtons 
                    specialAccions = { setInput }
                    deleteOneToOne = { input }
                    addInput = { addInput } />
            <OperatorButtons addInput = { addInput } />
            <NumbersButtonComponents addInput = { addInput } />
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
