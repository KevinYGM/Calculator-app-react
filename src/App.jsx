import './App.css';
import { FaReact } from "react-icons/fa6";
import { FooterComponents } from './components/FooterComponents/FooterComponents';
import { HeaderComponents } from './components/HeaderComponents/HeaderComponents';
import { Screen } from './components/Screen/Screen'
import { NumbersButtonComponents } from './components/ButtonsComponents/NumbersButtonComponents';
import { SpecialButtons } from './components/ButtonsComponents/SpecialButtons';
import { OperatorButtons } from './components/ButtonsComponents/OperatorButtons';
import { ResultButton } from './components/ButtonsComponents/ResultButton';

function App() {
  return (
    <>
      <HeaderComponents />
      
      <main className="container-main">
        <div className="body-calculator">

          <div className="header-calculator">
            <span>Calculator</span> 
            <span><FaReact /></span>
          </div>

          <Screen />

          <div className="buttons">
            <SpecialButtons />
            <OperatorButtons />
            <NumbersButtonComponents />
            <ResultButton />
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
