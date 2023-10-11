import React from "react";
import ContactForm from "../ContactFrom";
import { useMutation } from "react-query";

const Contactpage = () => {
  return (
    <section className="wpo-contact-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="office-info">
              <div className="row">
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-placeholder"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>찾아오는 길</h2>
                      <p>
                        서울 용산구 서빙고로 17
                        <br />
                        용산센트럴파크 공공시설동 4층
                      </p>
                      <p>용산구 청년창업지원센터 17실</p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-email"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>이메일</h2>
                      <p>indieip@indieip.co.kr</p>
                    </div>
                  </div>
                </div>
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div className="office-info-item">
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-phone-call"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>전화번호</h2>
                      <p>+0507-1304-6037</p>
                      <p>FAX 0504-235-0246</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpo-contact-title">
              <h2>묻고 싶은 내용이 있나요?</h2>
              <p>묻고 싶은 내용이 있다면 아래의 양식을 작성해주세요.</p>
            </div>
            <div className="wpo-contact-form-area">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
