import React, { SyntheticEvent } from 'react';
import { Post } from './Post';
import { Col,Form} from "react-bootstrap";
// import PropTypes from 'prop-types';


//   interface PostFormProps {
//      post: Post;  
// //     onCancel: () => void;
//    }

  
  function PostForm(post: Post) {
      alert("here " )
    //  alert("PostForm " + JSON.stringify(post, null, 2));
    //const [post, setPost] = useState(initialPost);
    //const [errors, setErrors] = useState({ id: '',  title: '',  body: ''});
    

    const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      // alert("handle submit " + isValid())
      //if (!isValid()) return;
      //onSave('');
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
      
      // let updatedPost: Post;
          
      
      // setPost((p:any) => {
      //   updatedPost = new Post({ ...p, ...change });
      //   return updatedPost;
      // });
      // setErrors(() => validate(updatedPost));
    };

    // function validate(project: Posts) {
    //       let errors: any = { id: '', title: '', body: '' };
    //       if (post.name.length === 0) {
    //         errors.name = 'Name is required';
    //       }
    //       if (post.name.length > 0 && project.name.length < 3) {
    //         errors.name = 'Name needs to be at least 3 characters.';
    //       }
    //       if (post.description.length === 0) {
    //          errors.description = 'Description is required.';
    //       }
    //       if (project.budget === 0) {
    //         errors.budget = 'Budget must be more than 0.';
    //       }
    //       return errors;
    //     }
        // function isValid() {
        //   // alert("isValid");
        //   return (
        //     //errors.title.length === 0 &&
        //     //errors.description.length === 0 
        //     //errors.budget.length === 0
            
        //   );
        // }


return (
        
        <Form.Group className="input-group vertical" onSubmit={handleSubmit}>
          
          <Col>
              {/* <Form.Control
                type="text"
                name="id"
                defaultValue='1'
                placeholder="Project Name"
                onChange={handleChange}
              /> */}
              {/* {errors.title.length > 0 && (
                <div className="card error">
                  <p>{errors.title}</p>
                </div>
              )} */}
          </Col>
          
          <Col>
              {/* <Form.Control as="textarea" rows={10} 
                type="text"
                defaultValue='2'
                name="body"
                placeholder="Description"
                onChange={handleChange}
              /> */}
               {/* {errors.description.length > 0 && (
                  <div className="card error">
                    <p>{errors.description}</p>
                  </div>
                )} */}
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
                // onClick={onCancel}
                value="Cancel" 
              />
              
          </div>
          
          
  </Form.Group>
  
  );
}

PostForm.propTypes = {
  //post: PropTypes.instanceOf(Post),
  //onEdit: PropTypes.func.isRequired,
  // onCancel: PropTypes.func.isRequired
};

export default PostForm;