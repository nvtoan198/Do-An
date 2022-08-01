import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  uploadImage: ["params", "key"],
  uploadImageSuccess: ["response"],
  uploadImageFailed: ["response"],
  uploadChunk: ["params"],
  uploadChunkSuccess: ["response"],
  uploadChunkFailed: ["response"]
});

export const UploadTypes = Types;

export default Creators;
