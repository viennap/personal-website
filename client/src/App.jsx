import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  // after we retrieve fruits from our background, 
  // we populate this array with those fruits
  const [array, setArray] = useState([]);

  // wait for axios to fetch that route
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.fruits);
    console.log(response.data.fruits); 
  };

  useEffect( () => {
    fetchAPI(); 
  }, []); 
  // empty array means that this function will only run on the initial render

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {array.map((fruit, index) => (
          <div key={index}>
            <p>{fruit}</p>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;