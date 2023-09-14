import { useState, useEffect } from 'react'

import { useParams, Link } from 'react-router-dom';

const Post = ({ posts, auth })=> {
  const { id } = useParams();
  const post = posts.find(post => post._id === id);
  if(!post){
    return null;
  }
  return (
    <div>
      <h1>{ post.title }</h1>
      { auth._id === post.author._id ? <button>x</button>: ''}
    </div>
  );
};

export default Post;
