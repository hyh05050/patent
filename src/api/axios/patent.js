import axios from "./config";

export default {
    async myPatentList(queryString) {
        /* OK */
        try {
            return await axios.get(`api/prePatent?${queryString}`);
        } catch (error) {
            console.log(error);
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
            console.log(error);
            return {
                status: "fail",
                message: "try login catch error",
            };
        }
    },
    async patentApply(params) {
        /* OK */
        try {
            return await axios.post(`api/prePatent`, params);
        } catch (error) {
            console.log(error);
            return {
                status: "fail",
                message: "try login catch error",
            };
        }
    },
};
