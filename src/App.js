import "./index.css"
import {useState,useEffect} from"react"

const App=()=>{

  useEffect((()=>{
    console.log("ja jsem useEffect")
  }))

  return  <div>
  <h1>test</h1>
  {console.log("ja jsem return")}
  </div>
}
export default App