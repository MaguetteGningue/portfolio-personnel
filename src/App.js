import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  console.log("portfolio chargé");
}, []);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

return (
<div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-400 transition-colors duration-500 ease-out">
  <h1 className="text-4xl text-white font-bold">Le site fonctionne !</h1>


<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
</Routes>

<Footer />



</div>
);
}

export default App;