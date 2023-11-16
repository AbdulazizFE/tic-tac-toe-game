import "./App.css";
import React from "react";
import Square from "./component/Square";
import { Board } from "./component/Board";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
      <Square />
      <Board />
    </>
  );
}

export default App;
