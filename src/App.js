import "./index.css";
import { useState, useEffect } from "react";

const App = () => {
  const [value, setvalue] = useState(1);
  useEffect(() => {
    const button = document.querySelector(".btn");
    button.textContent=`klick colso ${value}`
  });
  return (
    <div>
      <h1>test</h1>
      <p>{value}</p>
      {console.log("ja jsem return")}
      <button className="btn" onClick={() => setvalue(value + 1)}>
        klikni
      </button>
    </div>
  );
};
export default App;
