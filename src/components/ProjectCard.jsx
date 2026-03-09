const  ProjectCard=({ title, description, tech, image }) => {
 <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
        
       <div className="h-56 overflow-hidden"></div> 
     <img
        src={img}
        alt={title}
        className="w-50 h-60 mx-auto rounded-full object-cover mb-4
        border-4 border-red-600"
        />

      {/* Contenu */}
      <div className="bg-red-200 p-8 text-center ">
         
      <h3 className="text-xl font-bold text-red-600">
          {title}
        </h3>

        <p className="text-gray-600 mt-2">
          {description}
        </p>

        <p className="text-sm text-gray-500 mt-3">
          {tech}
        </p>

        

      </div>

    </div>
  
}

export default ProjectCard;