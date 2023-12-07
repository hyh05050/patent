import React, { useState } from "react";
import { useQuery } from "react-query";
import { styled } from "styled-components";
import { getProducts } from "../../api/axios/common";
import { consoleLog } from "../../common";
import { getAccount } from "../../common/loginInfo";

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
  const isLogin = getAccount()?.isLogin;

  const { data: productList, isLoading } = useQuery(
    ["product", "getProducts"],
    async () => {
      return (await getProducts()).data;
    },
    {
      onSuccess: (res) => {
        consoleLog(res);
      },
      onError: () => {},
    },
  );

  if (isLoading) return <div>Loading...</div>;

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
          <p className="pricing-etc">(VAT별도, 관납료별도)</p>
          {productList.map((product, index) => (
            <div
              key={index}
              className={`grid ${activeGrid === product.productId ? "active" : ""}`}
              onMouseEnter={() => setActiveGrid(product.productId)}
              onMouseLeave={() => setActiveGrid(null)}
              onClick={() => {
                if(isLogin){
                  window.location.href = '/apply';
                } else {
                  window.location.href = "/login";
                }
              } }
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
