import React from "react";
import mainImg from "../../images/main-img02.jpg";
import { styled } from "styled-components";

const Highlight = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

const AboutLeft = (props) => {
  return (
    <section className="wpo-about-section section-padding section-bg-blue">
      <div className="container">
        <div className="wpo-about-section-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="wpo-about-img">
                <img src={mainImg} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="wpo-about-content">
                <div className="wpo-section-title">
                  <h2>이런 것도 특허가 되나요?</h2>
                </div>
                <div className="wpo-about-content-inner">
                  <p>네! 됩니다. </p>
                  <p>
                    임시출원은 <Highlight>형식에 제한되지 않고</Highlight> 제출할 수 있습니다.
                  </p>
                  <p>따라서 현재 보유하고 있는 사업계획서, 연구개발계획서, 연구노트 등으로도 임시출원이 가능합니다!</p>
                  <p>(한글, 워드, pdf, ppt, 기타 그림파일… 모두 가능)</p>
                  <div className="signeture">
                    <h4>그래도 고민이 된다면 상담신청하세요!</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLeft;
