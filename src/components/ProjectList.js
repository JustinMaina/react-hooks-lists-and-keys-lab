import React from 'react';
import ProjectItem from './ProjectItem';
import user from '../data/user';

function ProjectList() {
 return (
    <div>
      {user.projects.map(project => (
        <ProjectItem
          key={project.id}
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectList;
