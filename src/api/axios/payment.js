import axios from "./config";

export default {
  async payment(params) {
    /* OK */
    try {
      return await axios.post(`api/payment`, params);
    } catch (error) {
      console.log(error);
      return {
        status: "fail",
        message: "try login catch error",
      };
    }
  },
  async prepare(params) {
    /* OK */
    try {
      return await axios.post(`api/payment/prepare`, params);
    } catch (error) {
      console.log(error);
      return {
        status: "fail",
        message: "try login catch error",
      };
    }
  },
};
