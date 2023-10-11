import React, { useState } from "react";
import { styled } from "styled-components";

const priceList = [
  {
    title: "Free",
    price: "0",
    priceUnit: "원",
    priceBefore: "50,000",
    list: ["출원번호 확인", "정규출원 마감일 관리", "무료 상담 정보 안내<br/>ㅤ"],
    etc: "",
    link: "/pricing",
  },
  {
    title: "Basic",
    price: "25",
    priceUnit: "만원",
    priceBefore: "300,000",
    list: ["Free 서비스<br/>+", "변리사 직접 상담 1회", "임시출원 1건"],
    etc: "",
    link: "/pricing",
  },
  {
    title: "Standard",
    price: "35",
    priceUnit: "만원",
    priceBefore: "550,000",
    list: ["Basic 서비스<br/>+", "기술문서 사전 검토 서비스", "맞춤형 IP 지원사업 안내 서비스"],
    etc: "",
    link: "/pricing",
  },
  {
    title: "Standard Pro",
    price: "175",
    priceUnit: "만원",
    priceBefore: "2,200,000",
    list: ["Standard 서비스<br/>+", "임시출원 2건", "정규출원 1건", "ㅤ<br/>ㅤ"],
    etc: "정규출원 서비스 제공기간 - 최초 임시출원일로부터 <br/> 1년 중간사건, 등록비용 별도",
    link: "/pricing",
  },
  {
    title: "Premium",
    price: "300",
    priceUnit: "만원",
    priceBefore: "3,750,000",
    list: [
      "Standard Pro 서비스<br/>+",
      "임시출원 5건",
      "정규출원 1건",
      "우선심사 신청<br/>(정규 출원 이후 6개월 이내 등록)",
    ],
    etc: "정규출원 서비스 제공기간 - 최초 임시출원일로부터 <br/> 1년 중간사건, 등록비용 별도",
    link: "/pricing",
  },
];

const PriceTitle = styled.h2`
  @media (max-width: 1439px) {
    font-size: 1.88rem !important;
  }

  @media (max-width: 992px) {
    font-size: 2rem !important;
  }

  @media (max-width: 650px) {
    font-size: 1.7rem !important;
  }
`;

const Pricing = (props) => {
  const [activeGrid, setActiveGrid] = useState(null);

  return (
    <section className="wpo-pricing-section section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="wpo-section-title">
              <PriceTitle>인디프로 서비스 비용 안내</PriceTitle>
            </div>
          </div>
        </div>
        <div className="pricing-grids clearfix">
          <p className="pricing-etc">(VAT별도)</p>
          {priceList.map((value, index) => (
            <div
              key={index}
              className={`grid ${activeGrid === index ? "active" : ""}`}
              onMouseEnter={() => setActiveGrid(index)}
              onMouseLeave={() => setActiveGrid(null)}
            >
              <div className="type">
                <h5 style={{ fontSize: "24px" }}>{value.title}</h5>
              </div>
              <div className="pricing-header">
                <div>
                  <h3 className="price">
                    {value.price}
                    <span>{value.priceUnit}</span>
                  </h3>
                  <p>{value.priceBefore}</p>
                </div>
              </div>
              <div className="pricing-body">
                <ul>
                  {value.list.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ul>
                {value.etc && <p dangerouslySetInnerHTML={{ __html: value.etc }}></p>}
                {/* <Link to={value.link} className="get-started">
                  Get Started
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
