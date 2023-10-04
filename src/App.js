import "./index.css";
import { useState, useEffect } from "react";

const App = () => {
  const [windowSize,setWindowSize]=useState(window.innerWidth)
  const sizecontrol=()=>{
    setWindowSize(window.innerWidth)
  }
  useEffect(()=>{
    console.log("ja jsem useEffenc")
    window.addEventListener("resize",sizecontrol)
    return ()=>{
      console.log("ja jsem cleanUP function")
      window.removeEventListener("resize",sizecontrol)
    }
  })
  return (
    <div>
      <h1>sirka okna</h1>
      <h2>{windowSize}</h2>
    </div>
  );
};
export default App;
