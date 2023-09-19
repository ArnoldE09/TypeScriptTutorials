import React,{useState} from 'react';
import axios, { CancelTokenSource } from 'axios';
import '../index.css';
// import PostForm from './PostForm';
import { Post } from './Post';


// interface IPost {
//   id: number;
//   userId?: number;
//   title: string;
//   body: string;
// }

const defaultPosts: Post[] = [];
const PostsTwo = () => {
  const [posts, setPosts]: [Post[], (posts: Post[]) => void] = React.useState(
    defaultPosts
  );
  // const [postBeingEdited,setPostBeingEdited]=useState({});
  
  // const handleEditClick=(post:Post)=> {
  //       alert("postBeingEdited " + JSON.stringify(post, null, 2));
  //       setPostBeingEdited(post);
  //       <PostForm post={post}/>
  //     };
    //   const cancelEditing=() =>{
    //     setProjectBeingEdited({});
    // }; 
  //   const onSave=() =>{
  //     setProjectBeingEdited({});
  // }; 
  const [loading, setLoading]: [boolean,(loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState('');
  const cancelToken = axios.CancelToken; //create cancel token
  const [cancelTokenSource, setCancelTokenSource]: [CancelTokenSource,(cancelTokenSource: CancelTokenSource) => void] = React.useState(cancelToken.source());
  const handleCancelClick = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('User cancelled operation');
    }
  };

  

  React.useEffect(() => {
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        cancelToken: cancelTokenSource.token,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      })
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        let error = axios.isCancel(ex)
          ? 'Request Cancelled'
          : ex.code === 'ECONNABORTED'
          ? 'A timeout has occurred'
          : ex.response.status === 404
          ? 'Resource Not Found'
          : 'An unexpected error has occurred';

        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="">
      {loading && <button onClick={handleCancelClick}>Cancel</button>}
      
        {posts.map((post) => (
            <div key={post.id} className='cards'> 
              <div className="card">
                <small>{post.id}</small>
                  <h4> {post.title}</h4>
                  <p>{post.body}</p>
                  
              </div>
              <button
          className=" bordered"
          
          // onClick={() => {

          //   handleEditClick(post);
            
          // }}
        >Modify</button>
            </div>  
          
        ))}
        
      
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default PostsTwo;