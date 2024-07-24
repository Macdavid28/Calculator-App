import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleSquareRoot = () => {
    setInput(Math.sqrt(input).toString());
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={handleSquareRoot}>√</button>
        <button onClick={handleCalculate} className="equals">
          =
        </button>
        <button onClick={() => handleButtonClick("+")} className="plus">
          +
        </button>
        <button onClick={handleDelete} className="delete">
          CE
        </button>
        <button onClick={handleClear} className="clear">
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;
