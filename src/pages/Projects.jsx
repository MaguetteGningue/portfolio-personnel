import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Gestion de Bibliothèque",
      description: "Application permettant de gérer les livres, les emprunts et les utilisateurs dans une bibliothèque.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      img: "/gestionbibliothéque.jpg", 
      link: "#"
    },
    {
      id: 2,
      title: "Blog WordPress",
      description: "Site web de blog créé avec WordPress pour publier des articles et partager des ressources en ligne.",
      tech: ["WordPress", "PHP", "MySQL"],
      img: "/blogwordpress.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Application de gestion de notes",
      description: "Application web permettant de gérer les étudiants et leurs notes avec ajout, modification et affichage des données.",
      tech: ["Tailwind CSS", "JavaScript", "React"],
      img: "/notes.jpg", 
      link: "#"
    },
    {
      id: 4,
      title: "Système de gestion des utilisateurs",
      description: "Application permettant d'ajouter, modifier et supprimer des utilisateurs.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      img: "/utilisateur.jpg",
      link: "#"
    },
    {
      id: 5,
      title: "BUROK Business - Design",
      description: "Conception d'une affiche publicitaire complète sous Photoshop pour une boutique en ligne.",
      tech: ["Photoshop", "Design Graphique","UI/UX"],
      img: "/burok.jpg",
      link: "#"
    },
    {
      id: 6,
      title: "Système de réservation en ligne",
      description: "Plateforme web permettant aux utilisateurs de réserver des services ou des rendez-vous en ligne facilement.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      img: "/réservation.jpg",
      link: "#"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4 transition-colors duration-500">
      
      <h2 className="text-4xl font-black text-center mb-16 text-slate-900 dark:text-white border-b-4 border-red-600 w-fit mx-auto pb-4">
        Mes Projets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-slate-700 flex flex-col">
            
            <div className="h-52 overflow-hidden bg-slate-200 dark:bg-slate-700 flex items-center justify-center relative group">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250?text=Projet+En+Cours'; }}
              />
              <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, index) => (
                  <span key={index} className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold">
                    {t}
                  </span>
                ))}
              </div>

              <a 
                href={project.link}
                className="inline-block w-full text-center bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition-colors font-bold shadow-md hover:shadow-red-500/40"
              >
               
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} // <--- NE PAS OUBLIER CETTE ACCOLADE

export default Projects;