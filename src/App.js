import React,{useState} from "react";
import Board from "./components/Board";

function App() {
  const [intialValues, setIntialValues] = useState(Array(9).fill('Enter'))

  return (
    <div className="gameContainer box-border w-screen h-screen">
      <Board  intialValues={intialValues}/>
    </div>
  );
}

export default App;
