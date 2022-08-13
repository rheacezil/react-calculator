import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const getNumber = (number) => {
    if (secondNumber === 0) {
      setSecondNumber(number);
    } else if (secondNumber) {
      setSecondNumber("" + secondNumber + number);
    } else if (firstNumber === 0) {
      setFirstNumber(number);
    } else {
      setFirstNumber("" + firstNumber + number);
    }
  };

  const getDisplay = () => {
    // return secondNumber ? secondNumber : firstNumber;
    if (secondNumber) {
      return `${firstNumber}${operation}${secondNumber}`;
    } else if (operation) {
      return `${firstNumber}${operation}`;
    } else {
      return firstNumber;
    }
  };

  const getOperation = (sign) => {
    if (sign !== "=") {
      setOperation(sign);
      setSecondNumber(0);
    } else {
      switch (operation) {
        case "+":
          setFirstNumber(parseFloat(firstNumber) + parseFloat(secondNumber));
          setSecondNumber(null);
          setOperation(null);
          break;

        case "-":
          setFirstNumber(parseFloat(firstNumber) - parseFloat(secondNumber));
          setSecondNumber(null);
          setOperation(null);
          break;

        case "x":
          setFirstNumber(parseFloat(firstNumber) * parseFloat(secondNumber));
          setSecondNumber(null);
          setOperation(null);
          break;

        case "÷":
          setFirstNumber(parseFloat(firstNumber) / parseFloat(secondNumber));
          setSecondNumber(null);
          setOperation(null);
          break;

        default:
          return;
      }
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center mx-auto vh-100 w-100">
      <div id="calculator" className="py-2 rounded">
        <div className="container">
          <div className="row g-2">
            <div className="col-12">
              <h1 id="display" className="fs-1 my-4 text-end text-white">
                {getDisplay()}
              </h1>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-secondary text-center rounded-circle"
                id="clearMemoryButton"
                onClick={() => {
                  window.location.reload();
                }}
              >
                C
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-secondary text-center rounded-circle"
                onClick={() => {
                  secondNumber
                    ? setSecondNumber(secondNumber * -1)
                    : setFirstNumber(firstNumber * -1);
                }}
              >
                ±
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-secondary text-center rounded-circle"
                onClick={() => {
                  secondNumber
                    ? setSecondNumber(secondNumber / 100)
                    : setFirstNumber(firstNumber / 100);
                }}
              >
                %
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-warning text-center rounded-circle"
                onClick={() => {
                  getOperation("÷");
                }}
              >
                ÷
              </div>
            </div>

            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-dark text-center rounded-circle"
                onClick={() => {
                  getNumber(7);
                }}
              >
                7
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-dark text-center rounded-circle"
                onClick={() => {
                  getNumber(8);
                }}
              >
                8
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-dark text-center rounded-circle"
                onClick={() => {
                  getNumber(9);
                }}
              >
                9
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-warning text-center rounded-circle"
                onClick={() => {
                  getOperation("x");
                }}
              >
                x
              </div>
            </div>

            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-dark text-center rounded-circle"
                onClick={() => {
                  getNumber(4);
                }}
              >
                4
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-dark text-center rounded-circle"
                onClick={() => {
                  getNumber(5);
                }}
              >
                5
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-dark text-center rounded-circle"
                onClick={() => {
                  getNumber(6);
                }}
              >
                6
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-warning text-center rounded-circle"
                onClick={() => {
                  getOperation("-");
                }}
              >
                -
              </div>
            </div>

            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-dark text-center rounded-circle"
                onClick={() => {
                  getNumber(1);
                }}
              >
                1
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-dark text-center rounded-circle"
                onClick={() => {
                  getNumber(2);
                }}
              >
                2
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-dark text-center rounded-circle"
                onClick={() => {
                  getNumber(3);
                }}
              >
                3
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-warning text-center rounded-circle"
                onClick={() => {
                  getOperation("+");
                }}
              >
                +
              </div>
            </div>

            <div className="col-6">
              <div
                className="button
                        fs-5 fw-bold text-bg-dark text-center rounded-pill"
                onClick={() => {
                  getNumber(0);
                }}
              >
                0
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-dark text-center rounded-circle"
                onClick={() => {
                  getNumber(".");
                }}
              >
                .
              </div>
            </div>
            <div className="col-3">
              <div
                className="button
                        fs-5 fw-bold text-bg-warning text-center rounded-circle"
                onClick={() => {
                  getOperation("=");
                }}
              >
                =
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
