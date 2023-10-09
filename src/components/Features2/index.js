import React from "react";
import fimg1 from "../../images/occupation.png";
import fimg2 from "../../images/reduce-cost.png";
import fimg3 from "../../images/performance.png";

const Features2 = (props) => {
    const features = [
        {
            fImg: fimg1,
            title: "출원일 선점",
            des: "사업화를 위한 발표 등 아이디어 공개를 앞두고 있을 때",
        },
        {
            fImg: fimg2,
            title: "비용 절감",
            des: "1년 이상 걸릴 수 있는 연구개발, 매번 정규출원하기 비용, 시간이 부담될 때",
        },
        {
            fImg: fimg3,
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
                        {features.map((feature, fitem) => (
                            <div className="col-lg-4 col-md-6 col-12" key={fitem}>
                                <div className="wpo-features-item">
                                    <div className="wpo-features-icon">
                                        <div className="icon" style={{ lineHeight: "95px" }}>
                                            <img src={feature.fImg} alt="" style={{ width: "60px", height: "60px" }} />
                                        </div>
                                    </div>
                                    <div className="wpo-features-text">
                                        <h2>{feature.title}</h2>
                                        <p>{feature.des}</p>
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
