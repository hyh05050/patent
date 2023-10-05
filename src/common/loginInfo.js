import { getCookie, removeCookie, setCookie } from "./cookie";

//loginInfo => {isLogin: true, userId: 1, userName: "admin"}

export const getLoginInfo = () => {
    const loginInfo = getCookie("loginInfo");
    if (loginInfo) {
        return JSON.parse(loginInfo);
    }

    if (sessionStorage.getItem("loginInfo")) {
        return JSON.parse(sessionStorage.getItem("loginInfo"));
    }

    return null;
};

export const setLoginInfo = (loginInfo, cookieFg) => {
    if (cookieFg) {
        setCookie("loginInfo", JSON.stringify(loginInfo), {
            path: "/",
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        });
    } else {
        sessionStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    }
};

export const removeLoginInfo = () => {
    removeCookie("loginInfo");
    sessionStorage.removeItem("loginInfo");
};
