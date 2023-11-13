import React, { useEffect } from "react";
import Modal from "react-modal";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { patentFinishModalAtom } from "../../model/Modal";

const PatentModal = () => {
  const modal = useRecoilValue(patentFinishModalAtom);
  const resetModal = useResetRecoilState(patentFinishModalAtom);

  useEffect(() => {
    // 모달이 열릴 때 이벤트 처리
    if (modal.modalState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal.modalState]);

  const closeModal = () => {
    resetModal();
  };

  const onClickDownload = (fileUrl) => {
    const newWindow = window.open();
    newWindow.document.title = "인디프로 문서 다운로드";
    newWindow.location.href = fileUrl;
  };

  return (
    <Modal
      className={"patent-modal"}
      isOpen={modal.modalState}
      onRequestClose={closeModal}
      contentLabel="임시출원 정보"
      style={{
        overlay: {
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          zIndex: 9998, // 원하는 z-index 값
          overflow: "auto",
        },
        content: {
          position: "absolute",
          top: "40px",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "600px",
          minWidth: "350px",
          border: "1px solid rgb(204, 204, 204)",
          background: "rgb(255, 255, 255)",
          overflow: "auto",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <div className="contents-header">
        <div className="header-title">
          <span>임시출원 정보</span>
        </div>
        <div className="header-close">
          <button onClick={closeModal}>
            <i className="ti-close"></i>
          </button>
        </div>
      </div>

      <div>
        <p className="contents-title">특허 출원 정보</p>
        <div className="contents-box">
          <div>
            <p className="contents-subtitle">1. 발명의 키워드</p>
            <p className="contents-info">{modal.modalData?.keyword}</p>
          </div>
          <div>
            <p className="contents-subtitle">2. 기술자료</p>
            <p className="contents-info">
              <a href="#" onClick={() => onClickDownload(modal.modalData?.document?.fileUrl)}>
                다운로드 링크
              </a>
            </p>
          </div>
          <div>
            <p className="contents-subtitle">3. 기술자료 내용이 외부에 공개여부</p>
            <p className="contents-info">
              {modal.modalData?.openFlag ? "공개일 : " + modal.modalData?.openDate : "아니오"}
            </p>
          </div>
          <div>
            <p className="contents-subtitle">4. 임시출원 후 1년 이내에 해외출원 여부</p>
            <p className="contents-info">{modal.modalData?.foreignFlag ? "예" : "아니오"}</p>
          </div>
          <div>
            <p className="contents-subtitle">5. 출원서(임시출원)</p>
            <p className="contents-info">
              <a href="#" onClick={() => onClickDownload(modal.modalData?.application?.fileUrl)}>
                다운로드 링크
              </a>
            </p>
          </div>
          <div>
            <p className="contents-subtitle">5-1. 출원번호 통지서(임시출원)</p>
            <p className="contents-info">
              <a href="#" onClick={() => onClickDownload(modal.modalData?.applyNotice?.fileUrl)}>
                다운로드 링크
              </a>
            </p>
          </div>
          <div>
            <p className="contents-subtitle">5-2. 영수증(임시출원)</p>
            <p className="contents-info">
              <a href="#" onClick={() => onClickDownload(modal.modalData?.receipt?.fileUrl)}>
                다운로드 링크
              </a>
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="contents-title">출원인 정보</p>
        <div className="contents-box">
          <div>
            <p className="contents-subtitle">1. 출원인의 종류</p>
            <p className="contents-info">{modal.modalData?.proposerKind}</p>
          </div>
          <div>
            <p className="contents-subtitle">2. 출원인 정보({modal.modalData?.proposerKind})</p>
            {modal.modalData?.proposerKind === "개인" ? (
              <div>
                <ul>
                  <li>
                    {modal.modalData?.proposerNameKr}({modal.modalData?.proposerNameEn})
                  </li>
                  <li>
                    <span>주민등록번호 : </span>
                    {modal.modalData?.proposerSocialNo}
                  </li>
                  <li>
                    <span>주소 : </span>
                    {modal.modalData?.proposerPostcode} {modal.modalData?.inventorAddress1}{" "}
                    {modal.modalData?.inventorAddress2}
                  </li>
                  <li>
                    <span>도장&amp;서명 이미지 :</span>
                    <span>
                      <a href="#" onClick={() => onClickDownload(modal.modalData?.proposerStamp?.fileUrl)}>
                        다운로드 링크
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <ul>
                  <li>
                    {modal.modalData?.proposerCompanyNameKr}
                    {modal.modalData?.proposerCompanyNameEn ? `(${modal.modalData?.proposerCompanyNameEn})` : ""}
                  </li>
                  <li>
                    <span>대표자 이름 : </span>
                    {modal.modalData?.proposerCeoName}
                  </li>
                  <li>
                    <span>대표자 전화번호 : </span>
                    {modal.modalData?.proposerCeoPhone}
                  </li>
                  <li>
                    <span>대표자 이메일 : </span>
                    {modal.modalData?.proposerCeoEmail}
                  </li>
                  <li>
                    <span>법인 인감 이미지 : </span>
                    <span>
                      <a href="#" onClick={() => onClickDownload(modal.modalData?.corporationStamp?.fileUrl)}>
                        다운로드 링크
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>법인 사업자등록증 : </span>
                    <span>
                      <a href="#" onClick={() => onClickDownload(modal.modalData?.bizCertificate?.fileUrl)}>
                        다운로드 링크
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>법인 인감증명서 : </span>
                    <span>
                      <a href="#" onClick={() => onClickDownload(modal.modalData?.corporationCertificate?.fileUrl)}>
                        다운로드 링크
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>법인 중소기업확인서 : </span>
                    <span>
                      <a href="#" onClick={() => onClickDownload(modal.modalData?.smallMediumConfirm?.fileUrl)}>
                        다운로드 링크
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <p className="contents-title">발명자 정보</p>
        <div className="contents-box">
          <div>
            <ul>
              <li>
                {modal.modalData?.inventorNameKr}{" "}
                {modal.modalData?.inventorNameKr ? `(${modal.modalData?.inventorNameKr})` : ""}
              </li>
              <li>
                <span>주민등록번호 : </span>
                {modal.modalData?.inventorSocialNo}
              </li>
              <li>
                <span>주소 : </span>
                {modal.modalData?.inventorPostcode} {modal.modalData?.inventorAddress1}{" "}
                {modal.modalData?.inventorAddress2}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <p className="contents-title">담당자 정보</p>
        <div className="contents-box">
          <ul>
            <li>
              <span>담당자 이름 : </span>
              {modal.modalData?.managerName}
            </li>
            <li>
              <span>휴대전화번호 : </span>
              {modal.modalData?.managerPhone}
            </li>
            <li>
              <span>이메일주소 : </span>
              {modal.modalData?.managerEmail}
            </li>
            <li>
              <span>메모 : </span>
              {modal.modalData?.memo}
            </li>
          </ul>
        </div>
      </div>

      {/* <div>
                <p className="contents-title">영수증 처리</p>
                <div className="contents-box">
                    <ul>
                        <li>
                            <span>영수증 처리방법 :</span> 현금 영수증
                        </li>
                        <li>
                            <span>자료 :</span> <span>핸드폰 번호 010-1234-5678</span>
                        </li>
                    </ul>
                </div>
            </div> */}
    </Modal>
  );
};

export default PatentModal;
