import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const SHOW_POST = "SHOW_POST";
export const DELETE_POST = "DELETE_POST";



const rootURL = "http://reduxblog.herokuapp.com/api";
const apiKey = "?key=randomkey";

export function fetchPosts(){
  const request = axios.get(`${rootURL}/posts${apiKey}`);
  console.log(request);
  return({
    type: FETCH_POSTS,
    payload: request
  })
}

export function createPost(props){
  const request = axios.post(`${rootURL}/posts${apiKey}`, props);

  return({
    type: CREATE_POST,
    payload: request
  })
}

export function showPost(id){
  const request = axios.get(`${rootURL}/posts/${id}${apiKey}`);

  return({
    type: SHOW_POST,
    payload: request
  })
}

export function deletePost(id){
  const request = axios.delete(`${rootURL}/posts/${id}${apiKey}`);

  return({
    type: DELETE_POST,
    payload: request
  })
}
