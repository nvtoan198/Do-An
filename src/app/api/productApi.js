import { axiosClient } from "../utils";

const productApi = {
  parseToken(token) {
    const params = { token };
    return axiosClient.get("/token", { params });
  },
  fetchCard() {
    return axiosClient.get("/card");
  },
  logout() {
    return axiosClient.get("/logout");
  }
};

export default productApi;
