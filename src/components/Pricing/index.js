import React, { useState } from "react";
import { styled } from "styled-components";
import { getPayment, getPaymentPrepare } from "../../api/axios/common";
import { getAccount } from "../../common/loginInfo";
import { toast } from "react-toastify";

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

const PurchaseButton = styled.button`
  width: 100%;
  @media (max-width: 1199px) {
    width: calc(100% - 50px);
  }
`;

const priceList = [
  {
    title: "Free",
    price: 100,
    priceBefore: 50000,
    priceText: "0",
    priceUnit: "원",
    list: ["출원번호 확인", "정규출원 마감일 관리", "무료 상담 정보 안내<br/>ㅤ"],
    etc: "",
    link: "/pricing",
  },
  {
    title: "Basic",
    price: 250000,
    priceBefore: 300000,
    priceText: "25",
    priceUnit: "만원",
    list: ["Free 서비스<br/>+", "변리사 직접 상담 1회", "임시출원 1건"],
    etc: "",
    link: "/pricing",
  },
  {
    title: "Standard",
    price: 350000,
    priceBefore: 550000,
    priceText: "35",
    priceUnit: "만원",
    list: ["Basic 서비스<br/>+", "기술문서 사전 검토 서비스", "맞춤형 IP 지원사업 안내 서비스"],
    etc: "",
    link: "/pricing",
  },
  {
    title: "Standard Pro",
    price: 1750000,
    priceBefore: 2200000,
    priceText: "175",
    priceUnit: "만원",
    list: ["Standard 서비스<br/>+", "임시출원 2건", "정규출원 1건", "ㅤ<br/>ㅤ"],
    etc: "정규출원 서비스 제공기간 - 최초 임시출원일로부터 <br/> 1년 중간사건, 등록비용 별도",
    link: "/pricing",
  },
  {
    title: "Premium",
    price: 3000000,
    priceBefore: 3750000,
    priceText: "300",
    priceUnit: "만원",
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

const IMP = window.IMP;
IMP.init("imp36555036");

const Pricing = (props) => {
  const [activeGrid, setActiveGrid] = useState(null);
  const isLogin = getAccount()?.isLogin;

  const onClickPurchase = async (index) => {
    // if (!isLogin) {
    //   toast.warning("로그인 후 이용하실 수 있습니다.");
    //   return;
    // }

    const params = {
      pg: "nice_v2.iamport01m",
      pay_method: "card",
      merchant_uid: "UID" + getAccount().accountId + "_" + Date.now(),
      name: "인디프로 " + priceList[index].title + " 서비스",
      amount: priceList[index].price,
    };

    const response = await getPaymentPrepare(params);
    if (response.status === "fail") {
      toast.error(response.message);
      return;
    }

    IMP.request_pay(params, (response) => {
      //callback
      if (response.error_code != null) {
        let msg = "결제에 실패하였습니다.";
        if (response.error_code === "F400") {
          msg = "결제가 취소되었습니다.";
        } else if (response.error_code === "F500") {
          msg = "결제 정보가 잘못되었습니다.";
        }
        toast.error(msg);
        return;
      }

      //response : { imp_uid:???, merchant_uid:??? }
      console.log(response);
      getPayment(response);
    });
  };

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
                    {value.priceText}
                    <span>{value.priceUnit}</span>
                  </h3>
                  <p>{value.priceBefore.toLocaleString()}</p>
                </div>
              </div>
              <div className="pricing-body">
                <ul>
                  {value.list.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ul>
                {value.etc && <p dangerouslySetInnerHTML={{ __html: value.etc }}></p>}
                <PurchaseButton className="get-started" onClick={() => onClickPurchase(index)}>
                  서비스 신청
                </PurchaseButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
