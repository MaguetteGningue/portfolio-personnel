
const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-10 mt-auto">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-sm mb-4">
          &copy; 2026 <span className="font-bold tracking-wider">MAGUETTE.DEV</span> — Réalisé avec ❤️
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm font-medium opacity-90">
          <a href="tel:781588465" className="hover:text-slate-900 transition-colors underline-offset-4 hover:underline">
            78 158 84 65
          </a>
          <span className="hidden sm:block text-slate-300">|</span>
          <a href="mailto:yadine97@gmail.com" className="hover:text-slate-900 transition-colors underline-offset-4 hover:underline">
            yadine97@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;