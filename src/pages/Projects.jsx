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
      title: "BUROK Business - Design publicitaire",
      description: "Conception d'une affiche publicitaire compléte sous photoshop pour une boutique en ligne.",
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
    <div className="container mx-auto py-12 px-4">
      
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 border-b-2 border-red-600 w-fit mx-auto pb-2">
        Mes Projets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col">
            
            <div className="h-48 overflow-hidden bg-red-50 flex items-center justify-center">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=Image+Introuvable'; }}
              />
            </div>

            <div className="p-6 flex-grow flex flex-col">

              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, index) => (
                  <span key={index} className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded-full font-semibold">
                    {t}
                  </span>
                ))}
              </div>

              {/* Le bouton pour ouvrir le projet ou l'image */}
              <button 
                className="inline-block w-full text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
            
                </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Projects;