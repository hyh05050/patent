import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { styled } from "styled-components";
import { getProducts } from "../../api/axios/common";
import { getAccount } from "../../common/loginInfo";
import { paymentModalAtom } from "../../model/Modal";

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

const IMP = window.IMP;
IMP.init("imp36555036");

const PaymentModal = () => {
  const modal = useRecoilValue(paymentModalAtom);
  const resetModal = useResetRecoilState(paymentModalAtom);
  const [paymentModalData , setPaymentModalData] = useRecoilState(paymentModalAtom);
  const [activeGrid, setActiveGrid] = useState(null);
  const isLogin = getAccount()?.isLogin;
  
  useEffect(() => {
    // 모달이 열릴 때 이벤트 처리
    if (modal.modalState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal.modalState]);

  const { data: productList, isLoading } = useQuery(
    ["product", "getProducts"],
    async () => {
      return (await getProducts()).data;
    },
    {
      onSuccess: (res) => {},
      onError: () => {},
    },
  );

  const closeModal = () => {
    setActiveGrid(null);
    resetModal();
  };

  const onClickPurchase = async (modalData) => {
    // if (!isLogin) {
    //   toast.warning("로그인 후 이용하실 수 있습니다.");
    //   return;
    // }
    if (activeGrid === null) {
      toast.warning("플랜을 선택해주세요.");
      return;
    }

    const params = {
      // pg:"nice_v2.iamport00m",
      pg: "nice_v2.IM0016037m",
      pay_method: "card",
      merchant_uid: "UID" + getAccount().accountId + "_" + Date.now(),
      name: "인디프로 " + productList[activeGrid].grade + " 플랜",
      amount: productList[activeGrid].price * 1.1,
    };

    // const response = await getPaymentPrepare(params);
    // if (response.status === "fail") {
    //   toast.error(response.message);
    //   return;
    // }

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
      // consoleLog(response);
      // toast.info("결제가 완료되었습니다.");
      // resetModal();

      response.userId = getAccount().accountId;
      response.productId = productList[activeGrid].productId;

      // getPayment(response);
      var patentData = {...modalData};

      patentData.status="P";
      patentData.paymentType = params.name;

      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: 'https://indieip.startlump.com/api/prePatent',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : patentData
      };
      
      axios.request(config)
      .then((response) => {
        toast.info("결제가 완료되었습니다.");
        setPaymentModalData({...paymentModalData, modalState:false, modalData: patentData});
      })

    });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Modal
      className={"payment-modal"}
      isOpen={modal.modalState}
      onRequestClose={closeModal}
      contentLabel="인디프로 플랜 선택"
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
          border: "1px solid rgb(204, 204, 204)",
          background: "rgb(255, 255, 255)",
          overflow: "auto",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <section className="wpo-pricing-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5 col-sm-7 mt-2">
              <div className="wpo-section-title">
                <PriceTitle>인디프로 플랜 선택</PriceTitle>
              </div>
              <div className="pricing-modal-close">
                <button onClick={closeModal}>
                  <i className="ti-close"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="pricing-grids clearfix">
            <p className="pricing-etc">(VAT별도)</p>
            {productList?.map((product, index) => {
              if (product.grade !== "Free") {
                return (
                  <div
                    key={index}
                    className={`grid popup ${activeGrid === index ? "active" : ""}`}
                    onClick={() => setActiveGrid(activeGrid === index ? null : index)}
                  >
                    <div className="type">
                      <h5 style={{ fontSize: "24px" }}>{product.grade}</h5>
                    </div>
                    <div className="pricing-header">
                      <div>
                        <h3 className="price">
                          {product.priceText}
                          <span>{product.priceTextUnit}</span>
                        </h3>
                        <p>{product.priceOriginal.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul>
                        {JSON.parse(product.productInfoHtml).map((item, index) => (
                          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                      </ul>
                      {product.etc && <p dangerouslySetInnerHTML={{ __html: product.etc }}></p>}
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="grid col-lg-4 col-md-8 col-sm-12 mt-5 mb-5">
              <PurchaseButton className="get-started popup" onClick={() => onClickPurchase(modal.modalData)}>
                결제하기
              </PurchaseButton>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default PaymentModal;
