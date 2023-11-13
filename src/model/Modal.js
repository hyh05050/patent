import { atom } from "recoil";

const defaultModal = (type) => {
  return {
    modalState: false,
    modalType: type,
    modalData: null,
    callback: null,
  };
};

export const patentModalAtom = atom({
  key: "patentModalAtom",
  default: defaultModal("PatentModal"),
});

export const patentFinishModalAtom = atom({
  key: "patentFinishModalAtom",
  default: defaultModal("PatentFinishModal"),
});

export const myInfoModalAtom = atom({
  key: "myInfoModalAtom",
  default: defaultModal("MyInfoModal"),
});

export const paymentModalAtom = atom({
  key: "paymentModalAtom",
  default: defaultModal("PaymentModal"),
});

export const loadingModalAtom = atom({
  key: "loadingModalAtom",
  default: defaultModal("LoadingModal"),
});
