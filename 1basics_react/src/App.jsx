// import Try from "./Try"
import { useState } from "react";
import Card from "./components/Card";
import Password from "./components/Password";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./CustomHooks/useCurrencyInfo";

function App() {
  // const username = "Good Morning"
  // let count = 15

  // Currency
  // const [amount, setAmount] = useState(0);
  // const [from, setFrom] = useState("usd");
  // const [to, setTo] = useState("inr");
  // const [convertedAmount, setConvertedAmount] = useState(0);

  // const currencyInfo = useCurrencyInfo(from);
  // const options = Object.keys(currencyInfo);
  // const swap = () => {
  //   setFrom(to);
  //   setTo(from);
  //   setConvertedAmount(amount);
  //   setAmount(convertedAmount);
  // };

  // const convert = () => {
  //   setConvertedAmount(amount * currencyInfo[to]);
  // };

  // // Color, Counter
  // let [color, setColor] = useState("white");
  // let [count, setCount] = useState(10);

  // const addValue = () => {
  //   console.log("value added", count);
  //   // count = count + 1
  //   // if (count >= 20) {
  //   //   console.log({count});
  //   // }
  //   // else {
  //   //   setCount(count + 1)
  //   // }
  //   do {
  //     setCount(count + 1);
  //   } while (count >= 20);
  // };

  // const removeValue = () => {
  //   console.log("value removed", count);

  //   if (count <= 0) {
  //     console.log({ count });
  //   } else {
  //     setCount(count - 1);
  //   }
  // };

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="bg-green-400 text-white p-4 rounded-xl">
          Tailwind test
        </h1>
        <Card username="Shubham" />
        {/* <Card username="Max" /> */}

        <h2>Counter value: {count}</h2>
        <button onClick={addValue}>Add value {count}</button>
        <br />
        <button onClick={removeValue}>Remove value {count}</button>

        <Password />

        <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
        >
          <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  convert();
                }}
              >
                <div className="w-full mb-1">
                  <InputBox
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setAmount(amount)}
                    selectCurrency={from}
                    onAmountChange={(amount) => setAmount(amount)}
                  />
                </div>
                <div className="relative w-full h-0.5">
                  <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick={swap}
                  >
                    swap
                  </button>
                </div>
                <div className="w-full mt-1 mb-4">
                  <InputBox
                    label="To"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={from}
                    amountDisable
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}}>Orange</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          </div>
        </div> */}
      </div>

      {/* <h1>Hello World! {username}</h1> */}
      {/* <Try/> */}
    </>
  );
}

export default App;
