import axios from "axios";
import axiosInstance from "./config";

export default {
  async payment(params) {
    /* OK */
    try {
      return await axiosInstance.post(`api/payment`, params);
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
      return await axios.post(`https://api.iamport.kr/payments/prepare`, params, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
      return {
        status: "fail",
        message: "try login catch error",
      };
    }
  },
};
