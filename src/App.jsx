import { FaDivide, FaMinus } from "react-icons/fa6";
import { MdKeyboardBackspace } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import "./App.css";
import CalcButton from "./components/CalcButton";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold italic underline">Human Calculator</h1>
      <div className="bg-[#1D293A] text-white my-6">
        <div className="flex justify-center items-center">
          <div className="">
            <div className="pt-20 pb-6 flex justify-end items-center">
              <h1 className="text-6xl">16.7</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 pb-8">
              <CalcButton>AC</CalcButton>
              <CalcButton>
                <MdKeyboardBackspace size={27} />
              </CalcButton>
              <CalcButton>%</CalcButton>
              <CalcButton>
                <FaDivide size={19} />
              </CalcButton>
              <CalcButton classN={"font-bold"}>7</CalcButton>
              <CalcButton classN={"font-bold"}>8</CalcButton>
              <CalcButton classN={"font-bold"}>9</CalcButton>
              <CalcButton classN={"bg-[#6C63FF]"}>
                <RxCross1 size={17} />
              </CalcButton>
              <CalcButton classN={"font-bold"}>4</CalcButton>
              <CalcButton classN={"font-bold"}>5</CalcButton>
              <CalcButton classN={"font-bold"}>6</CalcButton>
              <CalcButton>
                <FaMinus size={18} />
              </CalcButton>
              <CalcButton classN={"font-bold"}>1</CalcButton>
              <CalcButton classN={"font-bold"}>2</CalcButton>
              <CalcButton classN={"font-bold"}>3</CalcButton>
              <CalcButton classN={"font-bold"}>+</CalcButton>
              {/* <div className="col-span-2">
              </div> */}
              <CalcButton classN={"font-bold col-span-2 w-36"}>0</CalcButton>
              <CalcButton classN={"font-bold"}>.</CalcButton>
              <CalcButton classN={"font-bold"}>=</CalcButton>
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
