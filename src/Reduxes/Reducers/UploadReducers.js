import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { UploadTypes } from "Actions/UploadActions";

export const INITIAL_STATE = Immutable({
  image: {}
});

const uploadImageSuccess = (state, action) => {
  const { response } = action;
  return state.merge({
    image: response.data
  });
};
const uploadImageFailed = (state, action) => {
  console.log("Upload Failed");
  return state;
};
const uploadChunkSuccess = (state, action) => {
  console.log("Upload Chunk Success");
  return state;
};
const uploadChunkFailed = (state, action) => {
  console.log("Upload Chunk Success");
  return state;
};

export const reducer = createReducer(INITIAL_STATE, {
  [UploadTypes.UPLOAD_IMAGE_SUCCESS]: uploadImageSuccess,
  [UploadTypes.UPLOAD_IMAGE_FAILED]: uploadImageFailed,
  [UploadTypes.UPLOAD_CHUNK_SUCCESS]: uploadChunkSuccess,
  [UploadTypes.UPLOAD_CHUNK_FAILED]: uploadChunkFailed
});
