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

export const getAccessToken = () => {
  if (localStorage.getItem("X-AUTH-TOKEN") !== "undefined") {
    return JSON.parse(localStorage.getItem("X-AUTH-TOKEN"));
  }

  return null;
};
