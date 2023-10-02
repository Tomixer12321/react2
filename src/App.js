import "./index.css"
import {useState,useEffect} from"react"

const App=()=>{
  const [vlaue,setvalue]=useState(1)
  useEffect((()=>{
    console.log("ja jsem useEffect")
  }))

  return  <div>
  <h1>test</h1>
  <p>{vlaue}</p>
  {console.log("ja jsem return")}
  <button onClick={()=>setvalue(vlaue+1)}>klikni</button>
  </div>
}
export default App