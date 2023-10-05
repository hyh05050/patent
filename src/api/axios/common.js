import AccountAPI from "./account";

const isDev = true;

export const getLogin = async (data) => {
  if (isDev) {
    // 더미 데이터 작업 수행
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: "success" });
      }, 1000);
    });
  } else {
    // axios 호출 작업 수행
    const params = {
      accountKey: data.email,
      password: data.password,
    };
    return AccountAPI.login(params);
  }
};

export const getJoin = async (data) => {
  if (isDev) {
    // 더미 데이터 작업 수행
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: "success" });
      }, 1000);
    });
  } else {
    // axios 호출 작업 수행
    const params = {
      accountKey: data.email,
      password: data.password,
      name: data.full_name,
    };
    return AccountAPI.join(params);
  }
};
