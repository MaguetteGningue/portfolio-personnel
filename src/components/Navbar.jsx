import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Navbar({ darkMode, setDarkMode }) { 

const [menuOpen, setMenuOpen] = useState(false);

return (
<nav className={darkMode ? "bg-gray-900 text-white p-4" : "bg-red-500 text-white p-4"}>

<div className="flex justify-between items-center">

<h1 className="text-xl font-bold">My Portfolio</h1>

<div className="flex gap-4 items-center">

<button 
onClick={() => setDarkMode(!darkMode)}
className="bg-red-500 text-black px-3 py-1 rounded"
> 
🌙
</button>

<button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
Menu
</button>

</div>

<ul className="hidden md:flex gap-6">
<li><Link to="/"className="hover:text-slate-900 transition">Accueil</Link></li>
<li><Link to="/about" className="hover:text-slate-900 transition">À propos</Link></li>
<li><Link to="/projects" className="hover:text-slate-900 transition">Projects</Link></li>
<li><Link to="/contact" className="hover:text-slate-900 transition">Contact</Link></li>
</ul>

</div>

{menuOpen && (
<ul className="mt-4 flex flex-col gap-3 md:hidden">
<li><Link to="/" className="hover:text-slate-900 transition">Accueil</Link></li>
<li><Link to="/about" className="hover:text-slate-900 transition">À propos</Link></li>
<li><Link to="/projects" className="hover:text-slate-900 transition">Projects</Link></li>
<li><Link to="/contact" className="hover:text-slate-900 transitio">Contact</Link></li>
</ul>
)}

</nav>
);
}

export default Navbar;