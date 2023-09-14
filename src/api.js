import axios from 'axios';

const COHORT_NAME = '2307-FTB-ET-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const logout = ()=> {
  window.localStorage.removeItem('token');
}

const register = async(credentials)=> {
  const response = await axios.post(
    `${BASE_URL}/users/register`,
    { user: credentials }
  );
  const token = response.data.data.token;
  window.localStorage.setItem('token', token);
  return loginWithToken();

};

const loginWithToken = async()=> {
  const token = window.localStorage.getItem('token');
  if(token){
    const response = await axios.get(
      `${BASE_URL}/users/me`,
      {
        headers: {
          authorization: `Bearer ${token }`
        }
      }
    );
    return response.data.data;
  }
  throw 'no token';
};

const fetchPosts = async()=> {
  const response = await axios.get(
    `${BASE_URL}/posts`,
  );
  return response.data.data.posts;
};

const createPost = async(post)=> {
  const token = window.localStorage.getItem('token');
  const response = await axios.post(
    `${BASE_URL}/posts`,
    { post },
    {
      headers: {
        authorization: `Bearer ${ token }`
      }
    }
  );
  return response.data.data.post;
};

const login = async(credentials)=> {
  const response = await axios.post(
    `${BASE_URL}/users/login`,
    { user: credentials }
  );
  const token = response.data.data.token;
  window.localStorage.setItem('token', token);
  return loginWithToken();
};

const api = {
  logout,
  register,
  login,
  loginWithToken,
  fetchPosts,
  createPost

};

export default api;
