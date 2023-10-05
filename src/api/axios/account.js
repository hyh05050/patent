import axios, { Result } from "./config";
import { QueryFunctionContext } from "react-query";

export default {
  async login(params) {
    /* OK */
    try {
      return await axios.post(`api/account/login`, params);
    } catch (error) {
      console.log(error);
      return {
        status: "fail",
        message: "try login catch error",
      };
    }
  },
  async join(params) {
    /* OK */
    try {
      return await axios.post(`api/account/join`, params);
    } catch (error) {
      console.log(error);
      return {
        status: "fail",
        message: "try login catch error",
      };
    }
  },
};
