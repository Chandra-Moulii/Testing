import "./assets/Css/Global.css";
import Demo from "./components/Demo";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count++);
  }
  return (
    <div className="app">
      <Demo />
      <button onClick={increaseCount}>Button clicked - {count} times</button>
    </div>
  );
}

export default App;
