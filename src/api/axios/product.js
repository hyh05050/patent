import axios from "./config";

export default {
  async productList(queryString) {
    /* OK */
    try {
      return await axios.get(`api/product`);
    } catch (error) {
      return {
        status: "fail",
        message: "try product catch error",
      };
    }
  },
  async productInfo(params) {
    /* OK */
    try {
      return await axios.get(`api/product/` + params.productId);
    } catch (error) {
      return {
        status: "fail",
        message: "try product catch error",
      };
    }
  },
};
