import { useState, useEffect } from "react";

const App = () => {
  const [value, setvalue] = useState(0);
  const [test, setTest] = useState(0);

  useEffect(() => {
    const button = document.querySelector(".btn");
    if (value > 0) {
      button.textContent = `klick colso ${value}`;
    } else {
      button.textContent = "klick";
    }
  }, [value]);

  useEffect(() => {
    document.title = `novy titulek ${test}`;
  }, [test]);

  return (
    <div>
      <h1>test</h1>
      <p>{value}</p>
      <button className="btn" onClick={() => setvalue(value + 1)}>
        klikni
      </button>
      <button onClick={() => setTest(test + 1)}>titulek</button>
    </div>
  );
};
export default App;