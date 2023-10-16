import { useState } from "react";

export const KeysConnections = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const effectButtons = (buttonTurn) => {
    if (isButtonPressed) {
      return;
    }

    setIsButtonPressed(true);

    // buttonTurn.classList.add("blink");
    // setTimeout(function () {
    //   buttonTurn.classList.remove("blink");
    //   buttonTurn.click();
    //   setIsButtonPressed(true);
    // }, 100);

    buttonTurn.classList.add("boton-activado")
    buttonTurn.click();
    setIsButtonPressed(true);
    buttonTurn.classList.remove("boton-activado")
  };

  document.addEventListener("keydown", function (event) {
    console.log(event.code, event.key);

/*----------------NumbersbuttonComponent------------------------*/    
    if (event.key === "7") {
      let buttonTurn = document.getElementById("button-seven");
      effectButtons(buttonTurn); 
    }

    if (event.key === "8") {
      let buttonTurn = document.getElementById("button-eight");
      effectButtons(buttonTurn);
    }

    if (event.key === "9") {
      let buttonTurn = document.getElementById("button-nine");
      effectButtons(buttonTurn);
    }

    if (event.key === "4") {
      let buttonTurn = document.getElementById("button-four");
      effectButtons(buttonTurn);
    }

    if (event.key === "5") {
      let buttonTurn = document.getElementById("button-five");
      effectButtons(buttonTurn);
    }

    if (event.key === "6") {
      let buttonTurn = document.getElementById("button-six");
      effectButtons(buttonTurn);
    }

    if (event.key === "1") {
      let buttonTurn = document.getElementById("button-one");
      effectButtons(buttonTurn);
    }

    if (event.key === "2") {
      let buttonTurn = document.getElementById("button-two");
      effectButtons(buttonTurn);
    }

    if (event.key === "3") {
      let buttonTurn = document.getElementById("button-three");
      effectButtons(buttonTurn);
    }

    if (event.key === ".") {
      let buttonTurn = document.getElementById("button-decimal");
      effectButtons(buttonTurn);
    }

    if (event.key === "0") {
      let buttonTurn = document.getElementById("button-zero");
      effectButtons(buttonTurn);
    }

  
    /*---------------------Operatorbuttons------------------------*/ 
    if (event.key === "/" ) {
      event.preventDefault();
      let buttonTurn = document.getElementById("button-division");
      effectButtons(buttonTurn);
    }

    if (event.key === "*" ) {
      let buttonTurn = document.getElementById("button-multiplication");
      effectButtons(buttonTurn);
    }

    if (event.key === "-" ) {
      let buttonTurn = document.getElementById("button-subtraction");
      effectButtons(buttonTurn);
    }

    if (event.key === "+" ) {
      let buttonTurn = document.getElementById("button-addition");
      effectButtons(buttonTurn);
    }

/*---------------------ResultButton------------------------*/
    if (event.key === "Enter") {
      let buttonTurn = document.getElementById("button-result");
      effectButtons(buttonTurn);
    }

/*---------------------SpecialButtons------------------------*/
    if (event.key === "Delete") {
      let buttonTurn = document.getElementById("button-clear");
      effectButtons(buttonTurn);
    }

    if (event.key === "Backspace") {
      let buttonTurn = document.getElementById("button-c");
      effectButtons(buttonTurn);
    }

    if (event.key === "%") {
      let buttonTurn = document.getElementById("button-percentager");
      effectButtons(buttonTurn);
    }
  });
};