import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="w-100 shadow-3xl border border-black p-2 mx-4">
      <img className="h-48 w-48 m-auto" src={project.image} alt="project"/>
      <h3 className='text-center font-bold'>{project.title}</h3>
      <p className='h-10 text-center text-xs'>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
