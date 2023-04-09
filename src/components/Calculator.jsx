import { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumClick = (num) => {
    if (operator === "") {
      setNum1(num1 + num);
    } else {
      setNum2(num2 + num);
    }
  };

  const handleOperatorClick = (op) => {
    switch (op) {
      case "=":
        if (num1 !== "" && num2 !== "") {
          switch (operator) {
            case "+":
              setResult(parseFloat(num1) + parseFloat(num2));
              break;
            case "-":
              setResult(parseFloat(num1) - parseFloat(num2));
              break;
            case "*":
              setResult(parseFloat(num1) * parseFloat(num2));
              break;
            case "/":
              setResult(parseFloat(num1) / parseFloat(num2));
              break;
            default:
              break;
          }
        }

        setNum1("");
        setNum2("");
        setOperator("");
        break;
      default:
        setOperator(op);
        setNum1(result !== "" ? result : num1);
        setNum2("");
        setResult("");
        break;
    }
  };
  const clear = () => {
    setResult("");
    setNum1("");
    setNum2("");
  };

  const handlePercentageButtonClick = () => {
    setResult(parseFloat(num1) / 100 || parseFloat(num2) / 100 || result / 100);
  };

  const handlePlusMinusButtonClick = () => {
    if (num1 && operator) {
      setNum2(parseFloat(num2) * -1);
    } else {
      if (num1 === "") {
        setNum1("-");
      } else {
        setNum1(parseFloat(num1) * -1);
      }
    }
  };

  return (
    <div className="App max-w-2xl  mx-auto py-10">
      <div className="max-w-sm mx-auto">
        <form>
          <input
            className="bg-[#7B7A89]  text-right px-3 w-full py-6 text-white text-xl font-bold leading-8"
            type="text"
            value={result !== "" ? result : num2 !== "" ? num2 : num1}
          />
        </form>
        <div className={`grid  grid-cols-4`}>
          <Button
            onclick={clear}
            id="clear"
            info="AC"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />

          <Button
            onclick={() => handlePlusMinusButtonClick("+/-")}
            info="+/-"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />

          <Button
            onclick={() => handlePercentageButtonClick("%")}
            info="%"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />

          <Button
            onclick={() => handleOperatorClick("/")}
            info="÷"
            style={`${" bg-[#F48637] text-white"}`}
          />

          <Button
            onclick={() => handleNumClick("7")}
            info="7"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={() => handleNumClick("8")}
            info="8"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={() => handleNumClick("9")}
            info="9"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={() => handleOperatorClick("*")}
            info="x"
            style={`${"bg-[#F48637] text-white"}`}
          />
          <Button
            onclick={() => handleNumClick("4")}
            info="4"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />

          <Button
            onclick={() => handleNumClick("5")}
            info="5"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={() => handleNumClick("6")}
            info="6"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />

          <Button
            onclick={() => handleOperatorClick("-")}
            info="-"
            style={`${"bg-[#F48637] text-white"}`}
          />

          <Button
            onclick={() => handleNumClick("1")}
            info="1"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />

          <Button
            onclick={() => handleNumClick("2")}
            info="2"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={() => handleNumClick("3")}
            info="3"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={() => handleOperatorClick("+")}
            info="+"
            style={`${"bg-[#F48637] text-white"}`}
          />
          <Button
            onclick={() => handleNumClick("0")}
            info="0"
            style={`${"col-span-2 bg-[#DCDBDC] text-black"}`}
          />

          <Button
            onclick={() => handleNumClick(".")}
            info="."
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={() => handleOperatorClick("=")}
            info="="
            style={`${"bg-[#F48637]  text-white"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
