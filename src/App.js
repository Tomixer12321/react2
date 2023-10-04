import "./index.css";
import { useState, useEffect } from "react";
const App = () => {
  const url = "http://api.open-notify.org/iss-now.json";
  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");

  const getCoordinates = async () => {
    const responst = await fetch(url);
    const data = await responst.json();
    setlatitude(data["iss_position"]["latitude"])
    setlongitude(data["iss_position"]["longitude"])
  };
  useEffect(()=>{
    getCoordinates();
  },[])

  return (
    <div>
      <h1>API</h1>
      <h1>zemepisna sirka</h1>
      <p>{latitude}</p>
      <h1>zemepisna delka</h1>
      <p>{longitude}</p>
    </div>
  );
};
export default App;
