import "./index.css";
import {useState,useEffect} from "react"

const App = () => {
  const [quote,setquote]=useState("vychozi text")
  const url="https://api.kanye.rest/"

  

  const getquote=async()=>{
    const response= await fetch(url)
    const data= await response.json()
    const finalQuote=(data["quote"])
    setquote(finalQuote)
  }
  useEffect(()=>{
    getquote()
  },[])

  return (
    <div>
      <h1>{quote}</h1>
    </div>
  );
};
export default App;
