import { axiosClient } from "../ultils";

const productApi = {
  fetchProducts() {
    return axiosClient.get("products/category/electronics");
  }
};

export default productApi;
