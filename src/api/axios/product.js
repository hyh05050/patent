import axios from "./config";

export default {
  async productList(queryString) {
    /* OK */
    try {
      return await axios.get(`api/product`);
    } catch (error) {
      console.log(error);
      return {
        status: "fail",
        message: "try login catch error",
      };
    }
  },
  async productInfo(params) {
    /* OK */
    try {
      return await axios.get(`api/product/` + params.productId);
    } catch (error) {
      console.log(error);
      return {
        status: "fail",
        message: "try login catch error",
      };
    }
  },
};
