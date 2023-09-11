import React from "react";

const Features = (props) => {
  const featres = [
    {
      fIcon: "fi flaticon-badge",
      title: "자금조달",
      des: "예비창업자, 창업 초기 기업은 특허 출원 실적으로 제출 가능!",
    },
    {
      fIcon: "fi flaticon-diary",
      title: "사업화",
      des: "잦은 사업 피봇팅에도 안정적으로 임시출원 후 기술 개발 완성 가능!",
    },
    {
      fIcon: "fi flaticon-support",
      title: "마케팅",
      des: "임시출원만으로도 ‘특허출원중’ 용어를 적법하게 사용 가능!",
    },
  ];

  return (
    <section className={`wpo-features-section section-padding section-bg-blue`} style={{ paddingTop: "120px" }}>
      <div className="container">
        <div className="wpo-features-wrapper">
          <div className="wpo-section-title">
            <h2>임시출원 어떻게 활용하나요</h2>
          </div>
          <div className="row">
            {featres.map((featres, fitem) => (
              <div className="col-lg-4 col-md-6 col-12" key={fitem}>
                <div className="wpo-features-item">
                  <div className="wpo-features-icon">
                    <div className="icon">
                      <i className={featres.fIcon}></i>
                    </div>
                  </div>
                  <div className="wpo-features-text">
                    <h2>{featres.title}</h2>
                    <p>{featres.des}</p>
                  </div>
                  <div className="visible-icon">
                    <i className={featres.fIcon}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
