import {FETCH_POSTS, SHOW_POST} from "../actions/index.js";

const INITIAL_STATE = { all: [], post: null}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_POSTS:
    {
      console.log(action.payload);
      return {...state, all: action.payload.data}
    }

    case SHOW_POST:
    {
      return {...state, post: action.payload.data}
    }
  }
  return state;
}
