import React from "react";
import SideBar from "./SideBar";
import { useRecoilState } from "recoil";
import { patentModalAtom, patentFinishModalAtom } from "../../model/Modal";

const items = [
  {
    id: 1,
    title: "임시출원 준비중",
    count: 0,
  },
  {
    id: 2,
    title: "임시출원 완료",
    count: 0,
  },
];

const patents = [
  {
    id: 1,
    apply_day: "2021-06-10",
    keyword: "욕실용 발 받침대",
    applicant: "김영수",
    inventor: "김영수",
  },
  {
    id: 2,
    apply_day: "2021-06-10",
    keyword: "욕실용 발 받침대",
    applicant: "김영수",
    inventor: "김영수",
  },
];

const patents2 = [
  {
    id: 1,
    title: "정규출원 완료",
    apply_day: "2020-11-02",
    apply_success_day: "2021-05-17",
    apply_success_no: "10-2021-0000001",
    invent_title: "욕실용 발 받침대",
    applicant: "김영수",
  },
  {
    id: 2,
    title: "정규출원 미진행",
    apply_day: "2021-10-10",
    apply_success_day: "2022-10-10",
    apply_success_no: "10-2021-0000000",
    invent_title: " AI 기반의 온라인 임시출원 시스템",
    applicant: "이상철",
  },
];

const Contents = (props) => {
  const [activeId, setActiveId] = React.useState(1);
  const [patentModal, setPatentModal] = useRecoilState(patentModalAtom);
  const [patentFinishModal, setPatentFinishModal] = useRecoilState(patentFinishModalAtom);

  const onClickMenu = (itemId) => {
    setActiveId(itemId);
  };

  const onClickPatentModal = (e, modalType) => {
    if (!e.target.classList.contains("download-btn")) {
      if (modalType === "temp") {
        setPatentModal({
          ...patentModal,
          modalState: true,
        });
      } else {
        setPatentFinishModal({
          ...patentFinishModal,
          modalState: true,
        });
      }
    }
  };

  const onClickDownload = () => {
    console.log("download btn clicked");
  };

  return (
    <section className="wpo-blog-pg-section section-padding wpo-mypage-section">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              <div className="row apply-info">
                {items.map((item) => (
                  <div
                    className={`col apply-info-box ${item.id === activeId ? "active" : ""}`}
                    key={item.id}
                    onClick={() => onClickMenu(item.id)}
                  >
                    <p>{item.title}</p>
                    <h3 className="apply-count">
                      {item.count}
                      <span>건</span>
                    </h3>
                  </div>
                ))}
                <div className="col d-none d-sm-block"></div>
                <div className="col d-none d-sm-block"></div>
              </div>

              <div className={`row mt-5 ${1 === activeId ? "d-none d-md-block" : "d-none"} `}>
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
                    {patents.map((patent, index) => (
                      <tr className="item" key={index} onClick={(e) => onClickPatentModal(e, "temp")}>
                        <td>{index + 1}</td>
                        <td>{patent.apply_day}</td>
                        <td>{patent.keyword}</td>
                        <td>{patent.applicant}</td>
                        <td>{patent.inventor}</td>
                        <td>
                          <button type="button" className="download-btn" onClick={() => onClickDownload()}>
                            다운로드
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={`row mt-5 align-items-center  ${1 === activeId ? "d-flex d-md-none" : "d-none"}`}>
                {patents.map((patent, index) => (
                  <div className="apply-list-temp col-lg-6" key={patent.id}>
                    <div className="apply-list-box" onClick={(e) => onClickPatentModal(e, "temp")}>
                      <h2>{items[0].title}</h2>
                      <ul>
                        <li>
                          신청일: <span>{patent.apply_day}</span>
                        </li>
                        <li>
                          키워드: <span>{patent.keyword}</span>
                        </li>
                        <li>
                          출원인: <span>{patent.applicant}</span>
                        </li>
                        <li>
                          발명자: <span>{patent.inventor}</span>
                        </li>
                        <li>
                          기술문서:{" "}
                          <button type="button" className="download-btn" onClick={() => onClickDownload()}>
                            다운로드
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`row mt-5 ${2 === activeId ? "d-none d-md-block" : "d-none"} `}>
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
                    {patents2.map((patent, index) => (
                      <tr className="item" key={index} onClick={(e) => onClickPatentModal(e, "finish")}>
                        <td>{index + 1}</td>
                        <td>{patent.apply_day}</td>
                        <td>{patent.apply_success_no}</td>
                        <td>{patent.invent_title}</td>
                        <td>{patent.applicant}</td>
                        <td>
                          <button type="button" className="download-btn" onClick={() => onClickDownload()}>
                            다운로드
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={`row mt-5 align-items-center ${2 === activeId ? "d-flex d-md-none" : "d-none"}`}>
                {patents2.map((patent, index) => (
                  <div className="apply-list-success col-lg-6" key={patent.id}>
                    <div className="apply-list-box" onClick={(e) => onClickPatentModal(e, "finish")}>
                      <h2>{patent.title}</h2>
                      <ul>
                        <li>
                          임시출원일: <span>{patent.apply_day}</span>
                        </li>
                        <li>
                          임시출원번호 : <span>{patent.apply_success_day}</span>
                        </li>
                        <li>
                          발명의 명칭: <span>{patent.invent_title}</span>
                        </li>
                        <li>
                          출원인: <span>{patent.applicant}</span>
                        </li>
                        <li>
                          문서보기:{" "}
                          <button type="button" className="download-btn" onClick={() => onClickDownload()}>
                            다운로드
                          </button>
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
