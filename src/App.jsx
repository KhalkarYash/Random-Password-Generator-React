import { useState } from "react";
import { NC, SC, UC, LC } from "./data/PassChar";

function App() {
  let [upperCase, setUpperCase] = useState(false);
  let [lowerCase, setLowerCase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [specialChars, setSpecialChars] = useState(false);
  let [passwordLength, setPasswordLength] = useState(10);
  let [fPass, setFPass] = useState("");

  let createPassword = () => {
    let finalPass = "";
    let charSet = "";
    if (upperCase || lowerCase || numbers || specialChars) {
      if (upperCase) charSet += UC;
      if (lowerCase) charSet += LC;
      if (numbers) charSet += NC;
      if (specialChars) charSet += SC;

      for (let i = 0; i < passwordLength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setFPass(finalPass);
    } else {
      alert("Please select atleast checkbox");
    }
  };

  let copyPass = () => {
    navigator.clipboard.writeText(fPass);
  };

  return (
    <div className="bg-[rgb(7,5,48)] h-[100vh] w-[100vw] flex justify-center items-center text-white">
      <div className="min-w-[350px] bg-[#610bb2] p-5 shadow-xl shadow-[#feffaf89] rounded-sm">
        <h2 className="text-center font-bold text-2xl mb-3">
          Password Generator
        </h2>
        <div className="flex justify-between">
          <input
            type="text"
            className="mr-0.5 w-[80%] bg-white text-black p-2"
            readOnly
            value={fPass}
          />
          <button className="w-[20%] bg-white text-black" onClick={copyPass}>
            Copy
          </button>
        </div>
        <div className="flex justify-between py-2.5 items-center">
          <label className="w-[80%]">Password Length</label>
          <input
            type="number"
            className="w-[15%] text-black p-1 bg-white"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            max={20}
          />
        </div>
        <div className="flex justify-between py-2.5 items-center">
          <label className="w-[80%]">Include Uppercase</label>
          <input
            type="checkbox"
            className="w-[10%] bg-white"
            onChange={() => setUpperCase(!upperCase)}
            checked={upperCase}
          />
        </div>
        <div className="flex justify-between py-2.5 items-center">
          <label className="w-[80%]">Include Lowercase</label>
          <input
            type="checkbox"
            className="w-[10%] bg-white"
            onChange={() => setLowerCase(!lowerCase)}
            checked={lowerCase}
          />
        </div>
        <div className="flex justify-between py-2.5 items-center">
          <label className="w-[80%]">Include Numbers</label>
          <input
            type="checkbox"
            className="w-[10%] bg-white"
            onChange={() => setNumbers(!numbers)}
            checked={numbers}
          />
        </div>
        <div className="flex justify-between py-2.5 items-center">
          <label className="w-[80%]">Include Special Characters</label>
          <input
            type="checkbox"
            className="w-[10%] bg-white"
            onChange={() => setSpecialChars(!specialChars)}
            checked={specialChars}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-white text-lg text-black py-2.5 w-full cursor-pointer hover:bg-[rgb(7,5,48)] hover:text-white duration-300 shadow-lg shadow-[#0000008f]"
            onClick={createPassword}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
