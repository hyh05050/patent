import { getAccount, setAccessToken } from "./../../common/loginInfo";
import AccountAPI from "./account";
import PatentAPI from "./patent";
import PaymentAPI from "./payment";
import ProductAPI from "./product";

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
  payment: {
    status: "success",
  },
  product: {
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

export const objectToQueryString = (obj) => {
  return Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");
};

export const getLogin = async (data) => {
  if (isDev) {
    return dummyAPI("login");
  }

  // return dummyAPI("login");

  const params = {
    accountKey: data.email,
    password: data.password,
    email: data.email,
    joinType: data.joinType,
    humanName: data.humanName,
  };
  const result = await AccountAPI.login(params);
  setAccessToken(result["authToken"]);
  return result;
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
    joinType: "user",
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
    humanName: "[INDIPRO 문의]" + data.name,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    memo: data.notes,
  };
  return AccountAPI.contact(params);
};

export const getPatentApply = async (data) => {
  if (isDev) {
    return dummyAPI("patentApply");
  }
  
  const params = {
    ...data,
    registerId: getAccount().accountId || 0,
    inventorSocialNo:
      data.inventor_social_no_first && data.inventor_social_no_last
        ? `${data.inventor_social_no_first}-${data.inventor_social_no_last}`
        : "",
    proposerSocialNo:
      data.proposer_social_no_first && data.proposer_social_no_last
        ? `${data.proposer_social_no_first}-${data.proposer_social_no_last}`
        : "",
    patentName: data.keyword,
    status: "R",
  };
  return PatentAPI.patentApply(params);
};

export const getMyPatentList = async (data) => {
  if (isDev) {
    return dummyAPI("myPatentList");
  }

  const params = {
    registerId: getAccount().accountId || 0,
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

export const getPayment = async (data) => {
  if (isDev) {
    return dummyAPI("payment");
  }

  const params = {
    imp_uid: data.imp_uid,
    merchant_uid: data.merchant_uid,
  };
  return PaymentAPI.payment(params);
};

export const getPaymentPrepare = async (data) => {
  if (isDev) {
    return dummyAPI("payment");
  }

  const params = {
    merchant_uid: data.merchant_uid,
    amount: data.amount,
  };
  return PaymentAPI.prepare(params);
};

export const getApplyCount = async (data) => {
  if (isDev) {
    return dummyAPI("payment");
  }

  const params = {
    userId: getAccount().accountId,
  };
  return PaymentAPI.applyCount(params);
};

export const getProducts = async (data) => {
  if (isDev) {
    return dummyAPI("product");
  }

  const params = {};
  return ProductAPI.productList(params);
};
