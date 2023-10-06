import Book from "./components/Book";
import {useState}from "react"

const App = () => {
  const [show,setShow]=useState(false)
    return <div>
      <button onClick={()=>setShow(!show)}>ukaz/skryj</button>
    {show && <Book />}
    </div>
  
};
export default App;
