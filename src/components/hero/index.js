import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from "../../images/main-img01.jpg";

class Hero extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true,
        };

        return (
            <section className={`wpo-hero-slider ${this.props.heroClass}`}>
                <div className="hero-container">
                    <div className="hero-wrapper">
                        <Slider {...settings}>
                            <div className="hero-slide">
                                <div
                                    className="slide-inner slide-bg-image"
                                    style={{ backgroundImage: `url(${hero1})` }}
                                >
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>인디프로 (Indieipro)</h2>
                                            </div>
                                            <div className="slide-text">
                                                <p>당신의 아이디어를 더 빛나게 해 줄 단 하나의 특허출원 솔루션.</p>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="hero-slide">
                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                  <div className="container-fluid">
                    <div className="slide-content">
                      <div className="slide-title">
                        <h2>We Fight For Your Justice As Like A Friend.</h2>
                      </div>
                      <div className="slide-text">
                        <p>
                          Law is commonly understood as a system of rules that are created and enforced through social
                          or government.
                        </p>
                      </div>
                      <div className="clearfix"></div>
                      <div className="slide-btns">
                        <Link to="/about" className="theme-btn">
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;
