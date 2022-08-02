import { axiosClient } from "../ultils";

const productApi = {
  fetchProducts() {
    return axiosClient.get("");
  }
};

export default productApi;
