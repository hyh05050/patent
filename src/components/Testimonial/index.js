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
        Des: "“임시출원으로 아이디어 단계에서도 특허출원번호를 확보하여 안정적으로 사업을 영위할 수 있었습니다.”",
        Title: "주식회사 틴트레이닝 대표",
        Sub: "CEO & Founder",
      },
      {
        tsImg: ts1,
        Des: "“임시출원 후 정규출원까지 전문변리사를 만날 수 있는 인디프, 인디프로 서비스로 특허 걱정없이 진행했습니다.”",
        Title: "깔끔한 남자들 대표",
        Sub: "CEO & Founder",
      },
    ];
    return (
      <section className="wpo-testimonials-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12">
              <div className="wpo-section-title">
                <h2>고객님들은 우리에 대해 어떻게 생각하시나요?</h2>
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
