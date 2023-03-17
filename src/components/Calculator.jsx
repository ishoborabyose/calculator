/* eslint no-eval: 0 */
import { useState } from "react";
import Button from "./Button";

const Calculator = () => {
  const [result, setResult] = useState("");
  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div className="App max-w-2xl  mx-auto py-10">
      <div className="max-w-sm mx-auto">
        <form>
          <input
            className="bg-[#7B7A89]  text-right px-3 w-full py-6 text-white text-xl font-bold leading-8"
            type="text"
            value={result === "" ? "0" : result}
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
            onclick={handleClick}
            name="+/-"
            info="+/-"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />

          <Button
            onclick={handleClick}
            name="%"
            info="%"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />

          <Button
            onclick={handleClick}
            name="/"
            info="÷"
            style={`${" bg-[#F48637] text-white"}`}
          />

          <Button
            onclick={handleClick}
            name="7"
            info="7"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={handleClick}
            name="8"
            info="8"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={handleClick}
            name="9"
            info="9"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={handleClick}
            name="*"
            info="x"
            style={`${"bg-[#F48637] text-white"}`}
          />
          <Button
            onclick={handleClick}
            name="4"
            info="4"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />

          <Button
            onclick={handleClick}
            name="5"
            info="5"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={handleClick}
            name="6"
            info="6"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />

          <Button
            onclick={handleClick}
            name="-"
            info="-"
            style={`${"bg-[#F48637] text-white"}`}
          />

          <Button
            onclick={handleClick}
            name="1"
            info="1"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />

          <Button
            onclick={handleClick}
            name="2"
            info="2"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={handleClick}
            name="3"
            info="3"
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={handleClick}
            name="+"
            info="+"
            style={`${"bg-[#F48637] text-white"}`}
          />
          <Button
            onclick={handleClick}
            name="0"
            info="0"
            style={`${"col-span-2 bg-[#DCDBDC] text-black"}`}
          />

          <Button
            onclick={handleClick}
            name="."
            info="."
            style={`${"bg-[#DCDBDC] text-black"}`}
          />
          <Button
            onclick={calculate}
            name="="
            info="="
            style={`${"bg-[#F48637]  text-white"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
