import { useState } from "react";
import { FaDivide, FaMinus } from "react-icons/fa6";
import { MdKeyboardBackspace } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import "./App.css";
import CalcButton from "./components/CalcButton";

function App() {
  const [value, setValue] = useState("");
  // const [res,setRes] = useState([{
  //   key:"",
  //   val:""
  // }])
  // console.log(recentResult);

  const handleNumberClick = (input) => {
    if (value.length < 8) {
      setValue(value + input);
    }
  };

  const handleBackSpace = () => {
    setValue(value.slice(0, -1));
  };

  const handleClear = () => {
    setValue("");
  };
  const calculate = () => {
    try {
      console.log(value);
      setValue(eval(value));
      console.log(value);
    } catch (error) {
      setValue("Syntex error");
    }
  };
  return (
    <div>
      <h1 className="text-4xl font-bold italic underline">Human Calculator</h1>
      <div className="bg-[#1D293A] text-white my-6">
        <div className="flex justify-center items-center">
          <div className="">
            <div className="pt-20 pb-6 flex justify-end items-center">
              <h1 className="text-6xl">{value ? value : "|"}</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 pb-8">
              <CalcButton onClick={handleClear}>AC</CalcButton>
              <CalcButton onClick={handleBackSpace}>
                <MdKeyboardBackspace size={27} />
              </CalcButton>
              <CalcButton>%</CalcButton>
              <CalcButton onClick={() => handleNumberClick("/")}>
                <FaDivide size={19} />
              </CalcButton>
              <CalcButton
                classN={"font-bold"}
                onClick={() => handleNumberClick("7")}
              >
                7
              </CalcButton>
              <CalcButton
                classN={"font-bold"}
                onClick={() => handleNumberClick("8")}
              >
                8
              </CalcButton>
              <CalcButton
                classN={"font-bold"}
                onClick={() => handleNumberClick("9")}
              >
                9
              </CalcButton>
              <CalcButton onClick={() => handleNumberClick("*")}>
                <RxCross1 size={17} />
              </CalcButton>
              <CalcButton
                classN={"font-bold"}
                onClick={() => handleNumberClick("4")}
              >
                4
              </CalcButton>
              <CalcButton
                classN={"font-bold"}
                onClick={() => handleNumberClick("5")}
              >
                5
              </CalcButton>
              <CalcButton
                classN={"font-bold"}
                onClick={() => handleNumberClick("6")}
              >
                6
              </CalcButton>
              <CalcButton onClick={() => handleNumberClick("-")}>
                <FaMinus size={18} />
              </CalcButton>
              <CalcButton
                classN={"font-bold"}
                onClick={() => handleNumberClick("1")}
              >
                1
              </CalcButton>
              <CalcButton
                classN={"font-bold"}
                onClick={() => handleNumberClick("2")}
              >
                2
              </CalcButton>
              <CalcButton
                classN={"font-bold"}
                onClick={() => handleNumberClick("3")}
              >
                3
              </CalcButton>
              <CalcButton
                classN={"font-bold"}
                onClick={() => handleNumberClick("+")}
              >
                +
              </CalcButton>
              <CalcButton
                classN={"font-bold col-span-2 w-36"}
                onClick={() => handleNumberClick(0)}
              >
                0
              </CalcButton>
              <CalcButton
                classN={"font-bold"}
                onClick={() => handleNumberClick(".")}
              >
                .
              </CalcButton>
              <CalcButton classN={"font-bold"} onClick={calculate}>
                =
              </CalcButton>
            </div>
            <div className="pb-10">
              <h1 className="text-xl font-medium py-4">Recent Calculations</h1>
              <h1 className="text-lg">92.2 * 4 = 368.8</h1>
              <h1 className="text-lg text-slate-500">92.2 * 4 = 368.8</h1>
              <h1 className="text-lg text-slate-500">92.2 * 4 = 368.8</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
