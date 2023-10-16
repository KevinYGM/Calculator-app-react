import './ButtonsComponents.css';
import { FaBackspace } from 'react-icons/fa';

export const SpecialButtons = (props) => {

  const eraseOneToOne = () => {
    if(props.stateButtonResult){
      props.setInput(props.input);
    }else{
      if(props.input.length >=1 ){
        props.setInput(props.input.slice(0, -1))
      }else{
        props.setScreenResult(('0'))
      }
    }
  }


  const eraseAll = () => {
    props.setInput('');
    props.setScreenResult('0');
  }
    


  return (
    <div className="container-specials-buttons highlighted">
      <button className="button-clear" id="button-clear" onClick={ eraseAll }>AC</button>
      <button className="button-c" id="button-c" onClick={ eraseOneToOne }><FaBackspace /></button>
      <button className="button-percentager" id="button-percentager" onClick={(e) => props.addInput(e.target.textContent)}>%</button>
    </div>
  )
}
