import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar({ darkMode, setDarkMode }) { 

const [menuOpen] = useState(false);

return (
<nav className={darkMode ? "bg-gray-900 text-white p-4" : "bg-red-500 text-white p-4"}>

<div className="flex justify-between items-center">

<h1 className="text-xl font-bold">My Portfolio</h1>

<div className="flex gap-4 items-center">

</div>

<ul className="hidden md:flex gap-6">
<li><Link to="/"className="hover:text-slate-900 transition">Accueil</Link></li>
<li><Link to="/about" className="hover:text-slate-900 dark:hover:text-red-400 transition font-medium">À propos</Link></li>
<li><Link to="/projects" className="hover:text-slate-900 transition">Projects</Link></li>
<li><Link to="/contact" className="hover:text-slate-900 transition">Contact</Link></li>
</ul>

</div>

{menuOpen && (
<ul className="mt-4 flex flex-col gap-3 md:hidden">
<li><Link to="/" className="hover:text-slate-900 transition">Accueil</Link></li>
<li><Link to="/about" className="hover:text-slate-900 dark:hover:text-red-400 transition font-medium">À propos</Link></li>
<li><Link to="/projects" className="hover:text-slate-900 transition">Projects</Link></li>
<li><Link to="/contact" className="hover:text-slate-900 dark:hover:text-red-400 transition">Contact</Link></li>
</ul>
)}

</nav>
);
}

export default Navbar;