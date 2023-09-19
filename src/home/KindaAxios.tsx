import React, { useState, useEffect } from 'react';
import axios from 'axios';

// import './App.css';

// The REST API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const KindaAxios = () => {
  // At the beginning, posts is an empty array
  const [posts, setPosts] = useState([]);

  // Define the function that fetches the data from API
  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);

//   const handleClick = (title:string) => {
//     alert(title)
//   }

  return (
    <div className="wrapper">
      {posts.length > 0 ? (
        <div className="content">
          {posts.map((post:any) => (
            <div className="post">
              <h2>{post.title}</h2>
              <p>{post.body}</p>

              {/* <button onClick={handleClick(post.title)} type="button"> */}
            </div>
          ))}
        </div>
      ) : (
        <p className="loading">Loading... </p>
      )}
    </div>
  );
};

export default KindaAxios;