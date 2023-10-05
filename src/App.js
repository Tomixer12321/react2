import { useState, useEffect } from "react";
const url = "http://api.open-notify.org/iss-now.json";


const App = () => {
  const [loading, setloading] = useState(false);
  const [latitude,setlatitude]=useState("")
  const [longitude,setlongitude]=useState("")

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => data["iss_position"])
      .then((position)=>{
        setlatitude(position["latitude"])
        setlongitude(position["longitude"])
      })
  }, []);

  if(loading){
    return <h1>nacitani stranky...</h1>;
  }
    return <div>
      <h2>zemepisna siska</h2>
      <p>{latitude}</p>
      <h2>zemiepisna delka</h2>
      <p>{longitude}</p>
    </div>
  
};
export default App;
