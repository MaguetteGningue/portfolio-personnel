import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [likes, setLikes] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    setIsVisible(true);
   
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 transition-colors duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
       
     <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest text-red-600 uppercase bg-red-100 dark:bg-red-900/30 rounded-full animate-pulse">
          Disponible pour de nouveaux projets
        </span>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
          Bonjour, <br className="md:hidden" /> je suis 
          <span className="text-red-600 inline-block hover:rotate-3 transition-transform cursor-default ml-3">
            Maguette
          </span>
        </h1>

        <div className="flex justify-center mb-10">
          <p className="text-xl md:text-2xl font-mono text-slate-600 dark:text-slate-400 border-r-4 border-red-600 pr-2 animate-typing overflow-hidden whitespace-nowrap max-w-fit">
            Développeur Web en formation
          </p>
        </div>

        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
          Bienvenue sur mon portfolio ! Je crée des applications web modernes, 
          fluides et centrées sur l'utilisateur en utilisant les dernières technologies comme React et Tailwind.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/projects" 
            className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-500/30 hover:bg-red-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            Voir mes projets
          </Link>

          <button 
            onClick={() => setLikes(likes + 1)}
            className="group flex items-center gap-3 px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border-2 border-transparent hover:border-red-600 transition-all duration-300 w-full sm:w-auto"
          >
            <span className="group-hover:scale-125 transition-transform duration-300">❤️</span>
            Likes : <span className="text-red-600">{likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;