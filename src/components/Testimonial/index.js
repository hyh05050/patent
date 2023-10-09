import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from "../../images/user.png";

class Testimonial extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };

        const testimonial = [
            {
                tsImg: ts1,
                Des: "“변리사와의 협업을 통해 특허 신청에 대한 불확실성을 줄이고, 보다 신속하게 결과를 얻을 수 있었습니다. 이러한 서비스는 특허 출원을 고려하시는 분들에게 강력하게 추천합니다.”",
                Title: "김○수",
                Sub: "CEO & Founder",
            },
            {
                tsImg: ts1,
                Des: "“변리사를 통한 특허 출원 서비스를 이용한 결과, 특허 출원 절차를 효율적으로 진행할 수 있었습니다. 변리사의 전문적인 조언과 도움으로 특허 문서 작성 및 제출이 원활하게 진행되었고, 복잡한 절차와 법적 요구 사항을 잘 이해하고 대응할 수 있었습니다. .”",
                Title: "성○우",
                Sub: "CEO & Founder",
            },

            {
                tsImg: ts1,
                Des: "“특허 출원 서비스를 이용해보고 나서 매우 만족스러운 경험을 했습니다. 서비스 품질과 전문성 면에서 기대 이상이었습니다. 특허 출원 과정이 복잡하고 힘들다는 인식을 가지고 있었는데, 이 서비스를 통해 그런 고민이 덜어지는 것을 느꼈습니다.”",
                Title: "박○영",
                Sub: "CEO & Founder",
            },
        ];
        return (
            <section className="wpo-testimonials-section section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <div className="wpo-section-title">
                                <h2 style={{ fontSize: "34px" }}>고객님들은 우리에 대해 어떻게 생각하시나요?</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="wpo-testimonial-wrap owl-carousel">
                                <Slider {...settings}>
                                    {testimonial.map((tesmnl, tsm) => (
                                        <div className="wpo-testimonial-item" key={tsm}>
                                            <p>{tesmnl.Des}</p>
                                            <div className="wpo-testimonial-info">
                                                <div className="wpo-testimonial-info-img">
                                                    <img src={tesmnl.tsImg} alt="" />
                                                </div>
                                                <div className="wpo-testimonial-info-text">
                                                    <h5>{tesmnl.Title}</h5>
                                                    <span>{tesmnl.Sub}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonial;
