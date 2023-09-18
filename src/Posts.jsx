import { Link } from 'react-router-dom';


const Posts = ({ posts, auth })=> {

  const priceString = (num) => {
    const number = (num*1).toFixed(2)
    if ( number !== Number ) {
      return num
    } else {
      return number
    }
  }
  
  return (
    <ul>
      {
        posts.map( post => {
          return (
            <li key={ post._id } className={ post.author._id === auth._id ? 'mine': ''}>
              <Link to={`/posts/${post._id}`}>{ post.title }</Link> ${ priceString(post.price) } 
              {" - Created by"} {post.author.username}
            </li>
          );
        })
      }
    </ul>
  );
};

export default Posts;

