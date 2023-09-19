import React, { useState } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from './Project';



function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const onSave = (project: Project) => {
          let updatedProjects = projects.map((p: Project) => {
            
            return p.id === project.id ? project : p;
            
          });
          alert("p.id " + JSON.stringify(updatedProjects, null, 2));
          setProjects(updatedProjects);
          
        };
  
  
  return (
    <>
      <ProjectList   projects={projects} onSave={onSave} />
    </>
  );
}

export default ProjectsPage;


