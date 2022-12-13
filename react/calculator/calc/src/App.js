import {useState} from "react";
import "./App.css";
import Buttons from "./components/Buttons";

const colors = ["red", "blue", "yellow", "green", "salmon"];

function App() {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  return (
    <div className="App">
      <Buttons />
    </div>
  );
}

export default App;
