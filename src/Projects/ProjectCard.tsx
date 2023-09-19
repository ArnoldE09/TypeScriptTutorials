import { Project } from './Project';
import PropTypes from 'prop-types';
// import React  from 'react';

function ProjectCard(props:any) {
    const { project,onEdit } = props;
    
    const handleEditClick = (projectBeingEdited: Project) => {
      //alert("projectBeingEdited " + JSON.stringify(projectBeingEdited, null, 2));
      onEdit(projectBeingEdited);    
      };
    
      
      return (
      <div className="card">
        <img src={project.imageUrl} alt={project.name} />
          
            <h4> {project.name}</h4>
            <div>
              {project.description}
            </div>
            <div>
              {' Budget: '} {project.budget.toLocaleString()}
            </div>
              {' Status: '} {project.isActive ? 'Active' : 'Inactive'}
          
        <button
          className=" bordered"
          onClick={() => {
            handleEditClick(project);
          }}
        >
          <span className="icon-edit "></span>
          Edit
        </button>
      </div>
    );
  }

 ProjectCard.propTypes = {
   project: PropTypes.instanceOf(Project).isRequired,
   onEdit: PropTypes.func.isRequired
 };

export default ProjectCard;