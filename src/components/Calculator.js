import React, { useState } from "react";
export default function Calculator() {
  const [result, setResult] = useState("");

  //   function for on off operation
  const onOff = () => {
    if ("" === result) {
      setResult(0);
    } else {
      setResult("");
    }
  };

  // function to fetch data input
  const inputData = (event) => {
    if (result === "") {
      setResult("");
    } else {
      if (result === 0) {
        setResult(event.target.value);
      } else {
        setResult(result + event.target.value);
      }
    }
  };

  // function to calculate
  const calculate = () => {
    if (result === "") {
      setResult("");
    } else {
      setResult(eval(result));
    }
  };
  // function for all clear button
  const allClear = () => {
    if (result === "") {
      setResult("");
    } else {
      setResult(0);
    }
  };

  // function for delete last number

  const deleteLastNumber = () => {
    if (typeof result === 'string' && result.length > 0) {
      if (result.length === 1) {
        setResult('0');
      } else if (result === '0') {
        setResult('0');

      } else {
        setResult(result.slice(0, -1));
      }
    }
  };

  return (
    <>
      <div className="main">
        <div className="header d-flex justify-content-around">
          <div className="left">
            <h2 className="top_heading">
              Basic <br /> Calculator
            </h2>
          </div>
          <div className="right d-flex ">
            <label className="switch-button mb-3" htmlFor="switch">
              <div className="switch-outer" >
                <input id="switch" type="checkbox" onClick={onOff}  />
                <div className="button">
                  <span className="button-toggle" />
                  <span className="button-indicator" />
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="display">
          <h2 id="result">{result}</h2>
        </div>
        <div className="buttons">
          <button id="clear" onClick={allClear}>
            AC
          </button>
          <button id="delete_single_num" onClick={deleteLastNumber}>
            C
          </button>
          <button id="Normal_btn" onClick={inputData} value="/">
            /
          </button>
          <button id="Normal_btn" onClick={inputData} value="*">
            *
          </button>
        </div>
        <div className="buttons">
          <button id="Normal_btn" onClick={inputData} value="7">
            7
          </button>
          <button id="Normal_btn" onClick={inputData} value="8">
            8
          </button>
          <button id="Normal_btn" onClick={inputData} value="9">
            9
          </button>
          <button id="Normal_btn" onClick={inputData} value="-">
            -
          </button>
        </div>
        <div className="buttons">
          <button id="Normal_btn" onClick={inputData} value="4">
            4
          </button>
          <button id="Normal_btn" onClick={inputData} value="5">
            5
          </button>
          <button id="Normal_btn" onClick={inputData} value="6">
            6
          </button>
          <button id="Normal_button" onClick={inputData} value="+">
            +
          </button>
        </div>
        <div className="buttons">
          <button id="Normal_btn" onClick={inputData} value="1">
            1
          </button>
          <button id="Normal_btn" onClick={inputData} value="2">
            2
          </button>
          <button id="Normal_btn" onClick={inputData} value="3">
            3
          </button>
          <button id="Normal_btn" onClick={inputData} value=".">
            .
          </button>
        </div>
        <div className="buttons">
          <button id="Normal_btn" onClick={inputData} value="0">
            0
          </button>

          <button id="Normal_btn" onClick={inputData} value="00">
            00
          </button>
          <button id="equalTo" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
}
