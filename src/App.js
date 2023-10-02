import "./index.css"
import {useState,useEffect} from"react"

const App=()=>{
  console.log("uplne hore")
  const [vlaue,setvalue]=useState(1)
  useEffect((()=>{
    console.log("ja jsem useEffect")
  }))
  console.log("text pred return")
  return  <div>
  <h1>test</h1>
  <p>{vlaue}</p>
  {console.log("ja jsem return")}
  <button onClick={()=>setvalue(vlaue+1)}>klikni</button>
  </div>
}
export default App