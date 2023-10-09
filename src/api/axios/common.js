import AccountAPI from "./account";
import PatentAPI from "./patent";
import { getLoginInfo } from "./../../common/loginInfo";

const isDev = false;

const dummyData = {
    login: {
        status: "success",
        data: {
            accountId: 2,
            accountKey: "tester@naver.com",
            humanName: "테스터",
        },
    },
    join: {
        status: "success",
    },
    forgotPassword: {
        status: "success",
    },
    contact: {
        status: "success",
    },
    myPatentList: {
        status: "success",
    },
    myPatentInfo: {
        status: "success",
    },
    patentApply: {
        status: "success",
    },
    changePassword: {
        status: "success",
    },
};

const dummyAPI = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dummyData[data]);
        }, 1000);
    });
};

export const getLogin = async (data) => {
    // if (isDev) {
    //     return dummyAPI("login");
    // }

    return dummyAPI("login");

    // const params = {
    //     accountKey: data.email,
    //     password: data.password,
    // };
    // return AccountAPI.login(params);
};

export const getJoin = async (data) => {
    if (isDev) {
        return dummyAPI("join");
    }

    const params = {
        accountKey: data.email,
        email: data.email,
        password: data.password,
        humanName: data.name,
    };
    return AccountAPI.join(params);
};

export const getForgotPassword = async (data) => {
    if (isDev) {
        return dummyAPI("forgotPassword");
    }

    const params = {
        accountKey: data.email,
    };
    return AccountAPI.forgotPassword(params);
};

export const getContact = async (data) => {
    if (isDev) {
        return dummyAPI("contact");
    }

    const params = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
    };
    return AccountAPI.contact(params);
};

export const getPatentApply = async (data) => {
    if (isDev) {
        return dummyAPI("patentApply");
    }

    const params = {
        ...data,
        registerId: 2,
        inventorSocialNo: `${data.inventor_social_no_first}-${data.inventor_social_no_last}`,
        proposerSocialNo: `${data.proposer_social_no_first}-${data.proposer_social_no_last}`,
        proposerAddress: `${data.proposer_address_postcode} ${data.proposer_address} ${data.proposer_address_detail}`,
        inventorAddress: `${data.inventor_address_postcode} ${data.inventor_address} ${data.inventor_address_detail}`,
        patentName: data.keyword,
    };
    return PatentAPI.patentApply(params);
};

export const getMyPatentList = async (data) => {
    if (isDev) {
        return dummyAPI("myPatentList");
    }

    const params = {
        registerId: getLoginInfo().accountId || 2,
    };
    const queryStr = objectToQueryString(params);
    return PatentAPI.myPatentList(queryStr);
};

export const getMyPatentInfo = async (data) => {
    if (isDev) {
        return dummyAPI("myPatentInfo");
    }

    const params = {
        patentId: data.patentId,
    };
    return PatentAPI.myPatentInfo(params);
};

export const getChangePassword = async (data) => {
    if (isDev) {
        return dummyAPI("changePassword");
    }

    const params = {
        password: data.password,
    };
    return AccountAPI.changePassword(params);
};

export const objectToQueryString = (obj) => {
    return Object.keys(obj)
        .map((key) => key + "=" + obj[key])
        .join("&");
};
