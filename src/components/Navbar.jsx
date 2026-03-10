import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar({ darkMode, setDarkMode }) { 
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-red-600 dark:bg-slate-900 text-white p-4 sticky top-0 z-50 transition-colors duration-300 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
       
        <Link to="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition">
          MAGUETTE<span className="text-slate-900 dark:text-red-500">.DEV</span>
        </Link>

        
        <div className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-6">
            <li><Link to="/" className="hover:text-slate-900 dark:hover:text-red-400 transition font-medium">Accueil</Link></li>
            <li><Link to="/about" className="hover:text-slate-900 dark:hover:text-red-400 transition font-medium">À propos</Link></li>
            <li><Link to="/projects" className="hover:text-slate-900 dark:hover:text-red-400 transition font-medium">Projets</Link></li>
            <li><Link to="/contact" className="hover:text-slate-900 dark:hover:text-red-400 transition font-medium">Contact</Link></li>
          </ul>

          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-slate-800 transition-all border border-transparent hover:border-white/30"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* BOUTON MENU MOBILE (Burger) */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      {menuOpen && (
        <ul className="mt-4 flex flex-col gap-4 md:hidden pb-4 border-t border-red-500 dark:border-slate-700 pt-4">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-slate-900 transition">Accueil</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-slate-900 transition">À propos</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)} className="block hover:text-slate-900 transition">Projets</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-slate-900 transition">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;