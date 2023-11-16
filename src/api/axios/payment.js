import axios from "./config";

export default {
  async payment(params) {
    /* OK */
    try {
      return await axios.post(`api/payment`, params);
    } catch (error) {
      return {
        status: "fail",
        message: "try payment catch error",
      };
    }
  },
  async prepare(params) {
    /* OK */
    try {
      return await axios.post(`api/payment/prepare`, params);
    } catch (error) {
      return {
        status: "fail",
        message: "try payment prepare catch error",
      };
    }
  },
  async applyCount(params) {
    /* OK */
    try {
      return await axios.post(`api/payment/applyCount`, params);
    } catch (error) {
      return {
        status: "fail",
        message: "try applyCount catch error",
      };
    }
  },
};
