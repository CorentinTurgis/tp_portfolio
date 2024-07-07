// src/components/PortfolioProjects.js
import React, {useEffect, useState} from 'react';
import ProjectCard from './ProjectCard';  // Assurez-vous que le chemin d'importation est correct

const PortfolioProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section className='border-b border-black p-12 pt-8'>
      <h2 className='font-bold text-xl'>Mes Projets</h2>
      <div className="projects flex flex-row flex-wrap">
        {projects.map(project => (
          <div className="w-full sm:w-1/2 md:w-1/3 p-2">
            <ProjectCard key={project.id} project={project}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioProjects;
