import React, { SyntheticEvent, useState } from 'react';
import { Stock } from './Stock';
import { Col,Form} from "react-bootstrap";
import PropTypes from 'prop-types';


 interface StockFormProps {
    stock: Stock;  
    
  }
  
  function EditStock({stock: initialStock}: StockFormProps) {
    const [stock, setStock] = useState(initialStock);
    // const [errors, setErrors] = useState({ name: '',  description: '',  budget: ''});
    

    const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      // alert("handle submit " + isValid())
      // if (!isValid()) return;
      // onSave(project);
      //onCancel();
      };

  const handleChange = (event: any) => {
      
      // const { type, name,  value, checked } = event.target;
      
      // let updatedValue = type === 'checkbox' ? checked : value;
      // if (type === 'number') {
      //     updatedValue = Number(updatedValue);
      // }
      // const change = {
      //   [name]: updatedValue,
      // };
      
      // let updatedProject: Stock;
      
      
      
    //   setProject((p) => {
    //     updatedProject = new Project({ ...p, ...change });
    //     return updatedProject;
    //   });
    //   setErrors(() => validate(updatedProject));
    };

    // function validate(project: Stock) {
    //       let errors: any = { name: '', description: '', budget: '' };
    //       if (project.name.length === 0) {
    //         errors.name = 'Name is required';
    //       }
    //       if (project.name.length > 0 && project.name.length < 3) {
    //         errors.name = 'Name needs to be at least 3 characters.';
    //       }
    //       if (project.description.length === 0) {
    //          errors.description = 'Description is required.';
    //       }
    //       if (project.budget === 0) {
    //         errors.budget = 'Budget must be more than 0.';
    //       }
    //       return errors;
    //     }
    //     function isValid() {
    //       // alert("isValid");
    //       return (
    //         errors.name.length === 0 &&
    //         errors.description.length === 0 
    //         //errors.budget.length === 0
            
    //       );
        // }


return (
        
        <Form.Group className="input-group vertical" onSubmit={handleSubmit}>
          {'Project name'}
          <Col>
              <Form.Control
                type="text"
                name="name"
                defaultValue={stock.company}
                placeholder="Project Name"
                onChange={handleChange}
              />
              {/* {errors.name.length > 0 && (
                <div className="card error">
                  <p>{errors.name}</p>
                </div>
              )} */}
          </Col>
          {'Description'}
          <Col>
              <Form.Control  
                type ="text"
                defaultValue={stock.stockPrice}
                name="description"
                placeholder="Description"
                onChange={handleChange}
              />
               {/* {errors.description.length > 0 && (
                  <div className="card error">
                    <p>{errors.description}</p>
                  </div>
                )} */}
          </Col>
          {'Budget'}
          <Col>
                <Form.Control
                  type="text"
                  name="budget"
                  defaultValue={stock.ticker}
                  placeholder="Project Budget"
                  onChange={handleChange}
                />
              {/* {errors.budget.length > 0 && (
               <div className="card error">
                 <p>{errors.budget}</p>
               </div>
              )}             */}
          </Col>
          
          
          
  </Form.Group>
  
  );
}

EditStock.propTypes = {
  stock: PropTypes.instanceOf(Stock),
  //onEdit: PropTypes.func.isRequired,
  // onCancel: PropTypes.func.isRequired
};

export default EditStock;
