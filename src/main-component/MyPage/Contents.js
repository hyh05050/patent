import React from "react";
import SideBar from "./sidebar";

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
    const ClickHandler = (itemId) => {
        setActiveId(itemId);
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
                                        onClick={() => ClickHandler(item.id)}
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
                                <table className="table-responsive apply-list-ready">
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>신청일</th>
                                            <th>키워드</th>
                                            <th>출원인</th>
                                            <th>발명자</th>
                                            <th>다운로드</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {patents.map((patent, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <ul>
                                                        <li>{patent.apply_day}</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <ul>
                                                        <li>{patent.keyword}</li>
                                                    </ul>
                                                </td>
                                                <td>{patent.applicant}</td>
                                                <td>{patent.inventor}</td>
                                                <td>
                                                    <ul>
                                                        <li>
                                                            <a className="download-btn" href="/about">
                                                                다운로드
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div
                                className={`row mt-5 align-items-center  ${
                                    1 === activeId ? "d-flex d-md-none" : "d-none"
                                }`}
                            >
                                {patents.map((patent, index) => (
                                    <div className="apply-list-ready col-lg-6" key={patent.id}>
                                        <div className="apply-list-box">
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
                                                    다운로드: <button>기술문서</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={`row mt-5 align-items-center ${2 === activeId ? "d-flex" : "d-none"}`}>
                                {patents2.map((patent, index) => (
                                    <div className="apply-list-success col-lg-6" key={patent.id}>
                                        <div className="apply-list-box">
                                            <h2>{patent.title}</h2>
                                            <ul>
                                                <li>
                                                    임시출원일: <span>{patent.apply_day}</span>
                                                </li>
                                                <li>
                                                    정규출원일: <span>{patent.apply_success_day}</span>
                                                </li>
                                                <li>
                                                    정규출원번호: <span>{patent.apply_success_no}</span>
                                                </li>
                                                <li>
                                                    발명의 명칭: <span>{patent.invent_title}</span>
                                                </li>
                                                <li>
                                                    출원인: <span>{patent.applicant}</span>
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
