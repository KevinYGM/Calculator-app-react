import './App.css';
import { FaBackspace } from 'react-icons/fa';
import { FaReact } from "react-icons/fa6";
import { FooterComponents } from './components/FooterComponents/FooterComponents';
import { HeaderComponents } from './components/HeaderComponents/HeaderComponents';
import { Screen } from './components/Screen'

function App() {
  return (
    <>
      <HeaderComponents />
      
      <main className="container-main">
        <div className="body-calculator">
          <div className="header-calculator">Calculator <span><FaReact /></span></div>
          <Screen />
          <div className="buttons">
            <div className="container-specials-buttons highlighted">
              <button className="button-clear">AC</button>
              <button className="button-c"><FaBackspace /></button>
              <button className="button-percentager">%</button>
            </div>
            <div className="container-operator-buttons highlighted">
              <button className="button-division">÷</button>
              <button className="button-multiplication">X</button>
              <button className="button-subtraction">-</button>
              <button className="button-addition">+</button>
            </div>
            <button className="button-seven">7</button>
            <button className="button-eight">8</button>
            <button className="button-nine">9</button>
            <button className="button-four">4</button>
            <button className="button-five">5</button>
            <button className="button-six">6</button>
            <button className="button-one">1</button>
            <button className="button-two">2</button>
            <button className="button-three">3</button>
            <button className="button-decimal">.</button>
            <button className="button-zero">0</button>
            <button className="button-doublezero">00</button>
            
            <button className="button-result highlighted">=</button>
          </div>
          <div className="brand"><span>KYGM</span></div>
        </div>
      </main>
      <FooterComponents />
    </>
  );
}

export default App;
