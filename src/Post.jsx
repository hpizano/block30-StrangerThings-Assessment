import { useState, useEffect } from 'react'
import App from './App';
import { useParams, Link } from 'react-router-dom';

const Post = ({ posts, auth, removePost })=> {
  const { id } = useParams();
  const post = posts.find(post => post._id === id);
  if(!post){
    return null;
  }
  
  return (
    <div>
      <h1>{ post.title }</h1>
      <h2> Item description: </h2>
      <h3>{post.description}</h3>
      { auth._id === post.author._id ? 
      <button onClick={ () => removePost(posts._id)}>Delete</button>: ''}
      
    </div>
  );
};

export default Post;
