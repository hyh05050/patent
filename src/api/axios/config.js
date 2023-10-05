import axios from "axios";
// import { getSavedAuthToken } from '../common/storage'

const instance = axios.create({
  //baseURL: "http://localhost:8081/",
  baseURL: "http://indieip.startlump.com/",
});

instance.defaults.headers.common["content-type"] = "application/json; charset=utf-8";
// instance.defaults.headers.common['X-AUTH-TOKEN'] = (getSavedAuthToken() ?? '')
// instance.defaults.headers.common['content-type'] = 'application/x-www-form-urlencoded'

instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Do something with response error
    console.log(`----------> ERROR RESPONSE : ${error.config.url}`);
    console.log(`----------> ERROR MESSAGE  : ${error.message}`);
    return Promise.reject(error);
  },
);

export default instance;
