import axios from "./config";

export default {
  async login(params) {
    /* OK */
    try {
      return await axios.post(`api/login`, params);
    } catch (error) {
      return {
        status: "fail",
        message: "try login catch error",
      };
    }
  },
  async join(params) {
    /* OK */
    try {
      return await axios.post(`api/join`, params);
    } catch (error) {
      return {
        status: "fail",
        message: "try join catch error",
      };
    }
  },
  async forgotPassword(params) {
    /* OK */
    try {
      return await axios.post(`api/account/forgotPassword`, params);
    } catch (error) {
      return {
        status: "fail",
        message: "try forgotPassword catch error",
      };
    }
  },
  async contact(params) {
    /* OK */
    try {
      return await axios.post(`api/attorney/contact`, params);
    } catch (error) {
      return {
        status: "fail",
        message: "try contact catch error",
      };
    }
  },
  async changePassword(params) {
    /* OK */
    try {
      return await axios.post(`api/account/password`, params);
    } catch (error) {
      return {
        status: "fail",
        message: "try password catch error",
      };
    }
  },
};
