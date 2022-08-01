import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  getPosts: ["params"],
  getPostsSuccess: ["response"],
  getPostsFailed: ["response"],
  addVideoPost: ["params", "onSuccess", "onFailed"],
  addVideoPostSuccess: ["response"],
  addVideoPostFailed: ["response"],
  editVideoPost: ["params", "id", "onSuccess", "onFailed"],
  editVideoPostSuccess: ["response"],
  editVideoPostFailed: ["response"],
  getOnePost: ["id"],
  getOnePostSuccess: ["response"],
  getOnePostFailed: ["response"]
});

export const LibraryTypes = Types;

export default Creators;
