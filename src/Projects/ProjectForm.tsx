import React, { SyntheticEvent, useState } from 'react';
import { Project } from './Project';
import { Col,Form} from "react-bootstrap";
import PropTypes from 'prop-types';


 interface ProjectFormProps {
    project: Project;  
    onSave: (project: Project) => void;
    onCancel: () => void;
  }
  
  function ProjectForm({project: initialProject,onSave,onCancel}: ProjectFormProps) {
    alert("ProjectForm " + JSON.stringify(initialProject, null, 2));
    const [project, setProject] = useState(initialProject);
    const [errors, setErrors] = useState({ name: '',  description: '',  budget: ''});
    

    const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      // alert("handle submit " + isValid())
      if (!isValid()) return;
      onSave(project);
      //onCancel();
      };

  const handleChange = (event: any) => {
      
      const { type, name,  value, checked } = event.target;
      
      let updatedValue = type === 'checkbox' ? checked : value;
      if (type === 'number') {
          updatedValue = Number(updatedValue);
      }
      const change = {
        [name]: updatedValue,
      };
      
      let updatedProject: Project;
      
      
      
      setProject((p) => {
        updatedProject = new Project({ ...p, ...change });
        return updatedProject;
      });
      setErrors(() => validate(updatedProject));
    };

    function validate(project: Project) {
          let errors: any = { name: '', description: '', budget: '' };
          if (project.name.length === 0) {
            errors.name = 'Name is required';
          }
          if (project.name.length > 0 && project.name.length < 3) {
            errors.name = 'Name needs to be at least 3 characters.';
          }
          if (project.description.length === 0) {
             errors.description = 'Description is required.';
          }
          if (project.budget === 0) {
            errors.budget = 'Budget must be more than 0.';
          }
          return errors;
        }
        function isValid() {
          // alert("isValid");
          return (
            errors.name.length === 0 &&
            errors.description.length === 0 
            //errors.budget.length === 0
            
          );
        }


return (
        
        <Form.Group className="input-group vertical" onSubmit={handleSubmit}>
          {'Project name'}
          <Col>
              <Form.Control
                type="text"
                name="name"
                defaultValue={project.name}
                placeholder="Project Name"
                onChange={handleChange}
              />
              {errors.name.length > 0 && (
                <div className="card error">
                  <p>{errors.name}</p>
                </div>
              )}
          </Col>
          {'Description'}
          <Col>
              <Form.Control as="textarea" rows={10} 
                defaultValue={project.description}
                name="description"
                placeholder="Description"
                onChange={handleChange}
              />
               {errors.description.length > 0 && (
                  <div className="card error">
                    <p>{errors.description}</p>
                  </div>
                )}
          </Col>
          {'Budget'}
          <Col>
                <Form.Control
                  type="text"
                  name="budget"
                  defaultValue={project.budget}
                  placeholder="Project Budget"
                  onChange={handleChange}
                />
              {errors.budget.length > 0 && (
               <div className="card error">
                 <p>{errors.budget}</p>
               </div>
              )}            
          </Col>
          {'Status'}
          <Col>
            <Form.Check
              type="checkbox" 
              name="isActive" 
              checked={project.isActive}
              onChange={handleChange}
            />    
            <mark className="active">
              {project.isActive ? 'active' : 'inactive'}
            </mark>
          </Col>
            
          <div className="input-group">
              <Form.Control
                name="isActive"
                type="submit"
                onClick={handleSubmit}
                value="Save"
              />  
              <Form.Control
                type="button"
                onClick={onCancel}
                value="Cancel" 
              />
              
          </div>
          
          
  </Form.Group>
  
  );
}

ProjectForm.propTypes = {
  project: PropTypes.instanceOf(Project),
  //onEdit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default ProjectForm;
