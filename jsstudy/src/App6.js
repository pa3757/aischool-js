import "./App.css";
import { useState } from "react";

function App6() {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState();
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();

  const handleNumberClick = (num) => {
    setInput(input + num);
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setFirstNumber(parseInt(input));
    setInput("");
  };

  const calculate = () => {
    setSecondNumber(parseInt(input));
    let result;
    switch (operator) {
      case "+":
        result = firstNumber + parseInt(input);
        break;
      case "-":
        result = firstNumber - parseInt(input);
        break;
      case "*":
        result = firstNumber * parseInt(input);
        break;
      case "/":
        result = firstNumber / parseInt(input);
        break;
      default:
        return;
    }
    setInput(result.toString());
  };

  const clearInput = () => {
    setInput("");
    setOperator();
    setFirstNumber();
    setSecondNumber();
  };

  return (
    <div>
      <div>
        <input type="text" value={input} />
      </div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button
            style={{ width: "85px" }}
            key={num}
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </button>
        ))}
        <button
          style={{ width: "45px" }}
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>
        <button
          style={{ width: "45px" }}
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>
        <button
          style={{ width: "45px" }}
          onClick={() => handleOperatorClick("*")}
        >
          *
        </button>
        <button
          style={{ width: "45px" }}
          onClick={() => handleOperatorClick("/")}
        >
          /
        </button>
        <button style={{ width: "130px" }} onClick={clearInput}>
          C
        </button>
        <button style={{ width: "130px" }} onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App6;
