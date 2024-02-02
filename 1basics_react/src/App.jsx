import Try from "./Try"
import { useState } from "react";
import Card from "./components/Card";

function App() {
  // const username = "Good Morning"
  // let count = 15
  let [color, setColor] = useState("olive")
  let [count, setCount] = useState(10)

  const addValue = () => {
    console.log("value added", count);
    // count = count + 1
    // if (count >= 20) {
    //   console.log({count});
    // } 
    // else {
    //   setCount(count + 1)
    // }
    do {
      setCount(count + 1)
    } while (count >= 20)
  }

  const removeValue = () => {
    console.log("value removed", count);
    
    if (count <= 0) {
      console.log({count});
    }
    else {
      setCount(count - 1)  
    }
  }


  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <h1 className="bg-green-400 text-white p-4 rounded-xl">Tailwind test</h1>
        <Card username="Shubham" />
        <Card username="Max" />

        <h2>Counter value: {count}</h2>
        <button onClick={addValue}>Add value {count}</button><br />
        <button onClick={removeValue}>Remove value {count}</button>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}}>Orange</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          </div>
        </div>
      </div>

      {/* <h1>Hello World! {username}</h1> */}
      {/* <Try/> */}
      
    </>
  )
}

export default App
