import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { LibraryTypes } from "Actions/LibraryActions";

export const INITIAL_STATE = Immutable({
  posts: {},
  dataPosts: [],
  onePost: {}
});

const getPostsSuccess = (state, action) => {
  const { response } = action;
  return state.merge({
    posts: response,
    dataPosts: response.data
  });
};
const getPostsFailed = (state, action) => {
  return state.merge({});
};

const getOnePostSuccess = (state, action) => {
  const { response } = action;
  const { post } = response.data;
  return state.merge({
    onePost: post
  });
};
const getOnePostFailed = (state, action) => {
  return state;
};

export const reducer = createReducer(INITIAL_STATE, {
  [LibraryTypes.GET_POSTS_SUCCESS]: getPostsSuccess,
  [LibraryTypes.GET_POSTS_FAILED]: getPostsFailed,
  [LibraryTypes.GET_ONE_POST_SUCCESS]: getOnePostSuccess,
  [LibraryTypes.GET_ONE_POST_FAILED]: getOnePostFailed
});
