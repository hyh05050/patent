import axios from "./config";

export default {
  async myPatentList(queryString) {
    /* OK */
    try {
      return await axios.get(`api/prePatent?${queryString}`);
    } catch (error) {
      return {
        status: "fail",
        message: "try login catch error",
      };
    }
  },
  async myPatentInfo(params) {
    /* OK */
    try {
      return await axios.get(`api/prePatent/` + params.patentId);
    } catch (error) {
      return {
        status: "fail",
        message: "try prePatent catch error",
      };
    }
  },
  async patentApply(params) {
    /* OK */
    try {
      return await axios.post(`api/prePatent`, params);
    } catch (error) {
      return {
        status: "fail",
        message: "try prePatent catch error",
      };
    }
  },
};
