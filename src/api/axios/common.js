import AccountAPI from "./account";

const isDev = true;

const dummyData = {
    login: {
        status: "success",
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
    patentApply: {
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
    if (isDev) {
        return dummyAPI("login");
    }

    const params = {
        accountKey: data.email,
        password: data.password,
    };
    return AccountAPI.login(params);
};

export const getJoin = async (data) => {
    if (isDev) {
        return dummyAPI("join");
    }

    const params = {
        accountKey: data.email,
        password: data.password,
        name: data.name,
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
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
    };
    return AccountAPI.patentApply(params);
};
