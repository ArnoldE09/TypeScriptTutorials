// import React,{useState} from 'react';
// import {Posts} from './Posts';
// //import ProjectCard from './ProjectCard';
// //import ProjectForm from './ProjectForm';

// interface PostsListProps {
//     posts: Posts[];
//     onSave:(project:Posts)=>void;
//   }

// function PostsLists({ posts,onSave }: PostsListProps) {
//     const [postBeingEdited,setProjectBeingEdited]=useState({});
    
//     const handleEdit=(post:Posts)=> {
//         setProjectBeingEdited(post);
//       };
//         const cancelEditing=() =>{
//           setProjectBeingEdited({});
//       };
//     return (
//       <div className="row">
//         {posts.map((post) => (
//           <div key={post.id} className="cols-sm">
//             {post===postBeingEdited ?(
//               <ProjectForm 
//                 project={post}
//                 onSave={onSave}
//                 onCancel={cancelEditing}
//               />
//           ) : (
//             <ProjectCard project={post} onEdit={handleEdit} />
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   }
  
//   export default PostsLists;