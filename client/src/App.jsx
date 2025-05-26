import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Work from "./pages/Work";
import Travel from "./pages/Travel";

function App() {
  // after we retrieve fruits from our background, 
  // we populate this array with those fruits
  const [array, setArray] = useState([]);
  const [projects, setProjects] = useState([]);

  // wait for axios to fetch that route
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.fruits);
    console.log(response.data.fruits); 
  };

  const fetchProjects = async () => {
    const response = await axios.get("http://localhost:8080/api/projects");
    setProjects(response.data.projects);
    console.log(response.data.projects);
  };

  useEffect( () => {
    fetchProjects(); 
  }, []); 
  // empty array means that this function will only run on the initial render

  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
        <Navbar />
          <div className="mt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/travel" element={<Travel />} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;