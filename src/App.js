import "./index.css";
import { useState, useEffect } from "react";

const App = () => {
  const [windowSize,setWindowSize]=useState(window.innerWidth)
  const sizecontrol=()=>{
    setWindowSize(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize",sizecontrol)
  })
  return (
    <div>
      <h1>sirka okna</h1>
      <h2>{windowSize}</h2>
    </div>
  );
};
export default App;
