import React from "react";

const Features2 = (props) => {
  const featres = [
    {
      fIcon: "fi flaticon-badge",
      title: "출원일 선점",
      des: "사업화를 위한 발표 등 아이디어 공개를 앞두고 있을 때",
    },
    {
      fIcon: "fi flaticon-diary",
      title: "비용 절감",
      des: "1년 이상 걸릴 수 있는 연구개발, 매번 정규출원하기 비용, 시간이 부담될 때",
    },
    {
      fIcon: "fi flaticon-support",
      title: "실적 확보",
      des: "특허 등록 가능성 여부는 불투명하지만 특허 출원 실적이 필요할 때",
    },
  ];

  return (
    <section className="wpo-features-section-s2 section-padding">
      <div className="container">
        <div className="wpo-features-wrapper">
          <div className="wpo-section-title">
            <h2>이럴 때 임시출원이 필요해요</h2>
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

export default Features2;
