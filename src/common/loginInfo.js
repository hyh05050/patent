import axios from "axios";

export const getAccount = () => {
  if (localStorage.getItem("ACCOUNT-INFO")) {
    return JSON.parse(localStorage.getItem("ACCOUNT-INFO"));
  }

  return null;
};

export const setAccount = (accountData) => {
  localStorage.setItem("ACCOUNT-INFO", JSON.stringify(accountData));
};

export const removeAccount = () => {
  localStorage.removeItem("ACCOUNT-INFO");
};

export const setAccessToken = (accessToken) => {
  localStorage.setItem("X-AUTH-TOKEN", JSON.stringify(accessToken));
};

export const setRefreshToken = (refreshToken) => {
  localStorage.setItem("X-REFRESH-TOKEN", JSON.stringify(refreshToken));
};

export const getAccessToken = () => {
  if (localStorage.getItem("X-AUTH-TOKEN") !== "undefined") {
    return JSON.parse(localStorage.getItem("X-AUTH-TOKEN"));
  } else {
    return null;
  }
};

export const getRefreshToken = () => {
  if (localStorage.getItem("X-REFRESH-TOKEN") !== "undefined") {
    return JSON.parse(localStorage.getItem("X-REFRESH-TOKEN"));
  } else {
    return null;
  }
};

export const checkAccessToken = async () => {
  const accessToken = await getAccessToken();
  if (!accessToken) {
    return -1;
  }
  const response =  await axios.post("https://indieip.startlump.com/api/accessTokenTouch", {
    accessToken: accessToken,
  });
  
  return response.data.status == "success" ? true : false;
};

export const doRefreshToken = async () => {
  const refreshToken = await getRefreshToken();
  if (!refreshToken) {
    return -1;
  }
  return await axios.post("https://indieip.startlump.com/api/refresh", {
    refreshToken: refreshToken,
  });
};
