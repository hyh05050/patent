import axios from "./config";

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
            return await axios.post(`api/account`, params);
        } catch (error) {
            console.log(error);
            return {
                status: "fail",
                message: "try login catch error",
            };
        }
    },
    async forgotPassword(params) {
        /* OK */
        try {
            return await axios.post(`api/account/forgotPassword`, params);
        } catch (error) {
            console.log(error);
            return {
                status: "fail",
                message: "try login catch error",
            };
        }
    },
    async contact(params) {
        /* OK */
        try {
            return await axios.post(`api/account/contact`, params);
        } catch (error) {
            console.log(error);
            return {
                status: "fail",
                message: "try login catch error",
            };
        }
    },
    async changePassword(params) {
        /* OK */
        try {
            return await axios.post(`api/account/password`, params);
        } catch (error) {
            console.log(error);
            return {
                status: "fail",
                message: "try login catch error",
            };
        }
    },
};
