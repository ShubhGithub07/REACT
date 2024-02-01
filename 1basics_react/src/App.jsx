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
      <h1 className="bg-green-400 text-white p-4 rounded-xl">Tailwind test</h1>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.unsplash.com/photo-1706633365807-ac262530a8f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512"/>
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>

      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add value {count}</button><br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
