import Try from "./Try"
import { useState } from "react";
import Card from "./components/Card";

function App() {
  // const username = "Good Morning"
  // let count = 15
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
      {/* <h1>Hello World! {username}</h1> */}
      {/* <Try/> */}
      <h1 className="bg-green-400 text-white p-4 rounded-xl">Tailwind test</h1>
      <Card username="Shubham" />
      <Card username="Max" />

      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add value {count}</button><br />
      <button onClick={removeValue}>Remove value {count}</button>
    </>
  )
}

export default App
