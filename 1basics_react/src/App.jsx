import Try from "./Try"
import { useState } from "react";

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
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add value {count}</button><br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
