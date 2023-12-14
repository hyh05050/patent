import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { getMyPatentList } from "../../api/axios/common";
import { consoleLog } from "../../common";
import { patentFinishModalAtom, patentModalAtom, paymentModalAtom } from "../../model/Modal";
import SideBar from "./SideBar";

const Contents = (props) => {
  const [activeStatus, setActiveStatus] = useState("R");
  const [isPayment, setIsPayment] = useState(true);
  const [patentModal, setPatentModal] = useRecoilState(patentModalAtom);
  const [patentFinishModal, setPatentFinishModal] = useRecoilState(patentFinishModalAtom);
  const [paymentModal, setPaymentModal] = useRecoilState(paymentModalAtom);

  const { data: patents, isLoading } = useQuery(
    ["patent", "myPatentList"],
    async () => {
      return await getMyPatentList();
    },
    {
      enabled: true,
      onSuccess: (res) => {
        consoleLog(res);
      },
      onError: () => {},
    },
  );

  // const { data: applyCount, isLoading: isLoadingApplyCount } = useQuery(
  //   ["payment", "applyCount"],
  //   async () => {
  //     return await getApplyCount();
  //   },
  //   {
  //     enabled: true,
  //     onSuccess: (res) => {
  //       if (res.status === "success") {
  //         if (res.data?.totalTempApplyCount == 0) setIsPayment(true);
  //       }
  //     },
  //     onError: () => {},
  //   },
  // );

  const onClickMenu = (status) => {
    setActiveStatus(status);
  };

  const onClickPatentModal = (e, modalType, patentData) => {
    if (!e.target.classList.contains("download-btn") && !e.target.classList.contains("payment-btn")) {
      if (modalType === "temp") {
        setPatentModal({
          ...patentModal,
          modalState: true,
          modalData: patentData,
        });
      } else {
        setPatentFinishModal({
          ...patentFinishModal,
          modalState: true,
          modalData: patentData,
        });
      }
    }
  };

  const onClickDownload = (fileUrl) => {
    if (!fileUrl) return toast.warning("기술문서가 없습니다.");

    const newWindow = window.open();
    newWindow.document.title = "인디프로 문서 다운로드";
    newWindow.location.href = fileUrl;
  };

  const onClickPaymentModal = (patentData) => {
    setPaymentModal({
      ...paymentModal,
      modalState: true,
      modalData: patentData,
    });
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <section className="wpo-blog-pg-section section-padding wpo-mypage-section">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              <div className="row apply-info">
                <div
                  className={`col apply-info-box ${activeStatus === "R" ? "active" : ""}`}
                  onClick={() => onClickMenu("R")}
                >
                  <p>임시출원 준비중</p>
                  <h3 className="apply-count">
                    {patents?.data?.filter((item) => item.status === "R" || item.status === "P").length}
                    <span>건</span>
                  </h3>
                </div>
                <div
                  className={`col apply-info-box ${activeStatus === "F" ? "active" : ""}`}
                  onClick={() => onClickMenu("F")}
                >
                  <p>임시출원 완료</p>
                  <h3 className="apply-count">
                    {patents?.data?.filter((item) => item.status === "F").length}
                    <span>건</span>
                  </h3>
                </div>
                <div className="col d-none d-sm-block"></div>
                <div className="col d-none d-sm-block"></div>
              </div>

              <div className={`row mt-5 ${"R" === activeStatus ? "d-none d-md-block" : "d-none"} `}>
                <table className="table-responsive apply-list-temp">
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>신청일</th>
                      <th>키워드</th>
                      <th>출원인</th>
                      <th>발명자</th>
                      <th>기술문서</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patents?.data
                      ?.filter((patent) => patent.status === "R" || patent.status === "P")
                      .map((patent, index) => (
                        <tr
                          className="item"
                          key={patent.patentId}
                          onClick={(e) => onClickPatentModal(e, "temp", patent)}
                        >
                          <td>{index + 1}</td>
                          <td>{patent.updatedAt}</td>
                          <td>{patent.keyword}</td>
                          <td>
                            {patent.proposerKind == "개인" ? patent.proposerNameKr : patent.proposerCompanyNameKr}
                          </td>
                          <td>{patent.inventorNameKr}</td>
                          <td>
                            <button
                              type="button"
                              className="download-btn"
                              onClick={() => onClickDownload(patent.document.fileUrl)}
                            >
                              보기
                            </button>
                            {patent.status !== "P" && (
                              <button type="button" className="payment-btn" onClick={() => onClickPaymentModal(patent)}>
                                결제
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <div className={`row mt-5 align-items-center  ${"R" === activeStatus ? "d-flex d-md-none" : "d-none"}`}>
                {patents?.data
                  ?.filter((patent) => patent.status === "R" || patent.status === "P")
                  .map((patent, index) => (
                    <div className="apply-list-temp col-lg-6" key={patent.patentId}>
                      <div className="apply-list-box" onClick={(e) => onClickPatentModal(e, "temp", patent)}>
                        <h2>임시출원 준비중</h2>
                        <ul>
                          <li>
                            신청일: <span>{patent.updatedAt}</span>
                          </li>
                          <li>
                            키워드: <span>{patent.keyword}</span>
                          </li>
                          <li>
                            출원인:{" "}
                            <span>
                              {patent.proposerKind == "개인" ? patent.proposerNameKr : patent.proposerCompanyNameKr}
                            </span>
                          </li>
                          <li>
                            발명자: <span>{patent.inventorNameKr}</span>
                          </li>
                          <li>
                            기술문서:{" "}
                            <button
                              type="button"
                              className="download-btn"
                              onClick={() => onClickDownload(patent.document.fileUrl)}
                            >
                              보기
                            </button>
                            {patent.status === "R" && (
                              <button type="button" className="payment-btn" onClick={() => onClickPaymentModal(patent)}>
                                결제
                              </button>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>

              <div className={`row mt-5 ${"F" === activeStatus ? "d-none d-md-block" : "d-none"} `}>
                <table className="table-responsive apply-list-success">
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>임시출원일</th>
                      <th>임시출원번호</th>
                      <th>발명의 명칭</th>
                      <th>출원인</th>
                      <th>문서보기</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patents?.data
                      ?.filter((patent) => patent.status === "F")
                      .map((patent, index) => (
                        <tr
                          className="item"
                          key={patent.patentId}
                          onClick={(e) => onClickPatentModal(e, "finish", patent)}
                        >
                          <td>{index + 1}</td>
                          <td>{patent.preProposeDate}</td>
                          <td>{patent.preProposeNo}</td>
                          <td>{patent.patentName}</td>
                          <td>
                            {patent.proposerKind == "개인" ? patent.proposerNameKr : patent.proposerCompanyNameKr}
                          </td>
                          <td>
                            <button
                              type="button"
                              className="download-btn"
                              onClick={() => onClickDownload(patent.document.fileUrl)}
                            >
                              보기
                            </button>
                            {/* {isPayment && (
                              <button type="button" className="payment-btn" onClick={() => onClickPaymentModal(patent)}>
                                결제
                              </button>
                            )} */}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <div className={`row mt-5 align-items-center ${"F" === activeStatus ? "d-flex d-md-none" : "d-none"}`}>
                {patents?.data
                  ?.filter((patent) => patent.status === "F")
                  .map((patent, index) => (
                    <div className="apply-list-success col-lg-6" key={patent.patentId}>
                      <div className="apply-list-box" onClick={(e) => onClickPatentModal(e, "finish", patent)}>
                        <h2>임시출원 완료</h2>
                        <ul>
                          <li>
                            임시출원일: <span>{patent.preProposeDate}</span>
                          </li>
                          <li>
                            임시출원번호 : <span>{patent.preProposeNo}</span>
                          </li>
                          <li>
                            발명의 명칭: <span>{patent.patentName}</span>
                          </li>
                          <li>
                            출원인:{" "}
                            <span>
                              {patent.proposerKind == "개인" ? patent.proposerNameKr : patent.proposerCompanyNameKr}
                            </span>
                          </li>
                          <li>
                            문서보기:{" "}
                            <button
                              type="button"
                              className="download-btn"
                              onClick={() => onClickDownload(patent.document.fileUrl)}
                            >
                              보기
                            </button>
                            {isPayment && (
                              <button type="button" className="payment-btn" onClick={() => onClickPaymentModal(patent)}>
                                결제
                              </button>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <SideBar blLeft={props.blLeft} />
        </div>
      </div>
    </section>
  );
};

export default Contents;
