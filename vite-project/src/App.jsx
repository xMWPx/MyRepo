import { useState } from "react";
import { CounterIndicator } from "./assets/counter";
import { Butoane } from "./assets/counter/buton";


function App() {
  const [counter, setCounter] = useState(0);



  function plus() {
    setCounter(counter + 1)
  }

  function minus() {
    setCounter(counter + -1)
  }

  function reset() {
    setCounter(0)
  }

  return  <div>
    <CounterIndicator numar={counter} />
    <Butoane onPlus={plus} onMinus={minus} />

    <button onClick={reset}>Reset</button>
  </div>

  }
  


export default App
