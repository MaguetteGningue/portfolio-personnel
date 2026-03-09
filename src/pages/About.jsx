import React from 'react';


function About() {
  return (
        
    <div className="flex flex-col items-center justify-content text-center min-h-[70vh] px-4">

      <h2 className="text-4xl font-bold text-red-800 mb-6">
        À propos de Moi
      </h2>
      

      {/* Image */}
      <div className="w-64 h-64 Overflow-hidden rounded-2xl border-4 border-red-600 shawdow-xl">
      <img
        src="/magui.jpg"
        alt="Maguette"
        className="w-60 h-60 mx-auto rounded-full object-cover mb-4 border-4 border-red-600"
      />
      </div>

      <p className="text-gray-600 leading-relaxed ">
        Je m'appelle <strong>Maguette Gningue</strong>, étudiante en 
        <strong> Génie Informatique</strong> passionnée par le développement web,
        je crée des applications modernes avec React.
      </p>

      <p className="mb-4">
        J'ai des compétences en HTML, CSS, JavaScript, React et GitHub.
        J'aime apprendre de nouvelles technologies et relever des défis techniques.
      </p>

      <p>
        Mon objectif est de devenir une développeuse web professionnelle
        capable de concevoir des solutions utiles et performantes.
      </p>

    </div>
  );
}

export default About;