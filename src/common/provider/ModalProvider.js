import React from "react";
import PatentModal from "../../components/modal/PatentModal";
import PatentFinishModal from "../../components/modal/PatentFinishModal";
import MyInfoModal from "../../components/modal/MyInfoModal";
import "../../sass/components/_modal.scss";

const ModalProvider = () => {
  return (
    <>
      <PatentModal />
      <PatentFinishModal />
      <MyInfoModal />
    </>
  );
};

export default ModalProvider;
