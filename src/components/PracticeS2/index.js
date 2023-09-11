import React from "react";
import { Link } from "react-router-dom";
import Services2 from "../../api/service2";

const PracticeS2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-service-section-s2 section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="wpo-section-title">
              <h2>인디프로에서 진행하면 어떤 점이 좋나요?</h2>
            </div>
          </div>
          {/* <div className="col-lg-5 offset-lg-2">
            <div className="wpo-section-title">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div> */}
        </div>
        <div className="row">
          {Services2.map((service, Sitem) => (
            <div className="col-lg-3 col-md-6 col-12" key={Sitem}>
              <div className="wpo-service-item">
                <div className="wpo-service-icon">
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                </div>
                <div className="wpo-service-text">
                  <h2>
                    <Link onClick={ClickHandler} to={`/practice-single/${service.Id}`}>
                      {service.sTitle}
                    </Link>
                  </h2>
                  <p style={{ minHeight: "115px" }}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeS2;
