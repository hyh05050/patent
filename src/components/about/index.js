import React from "react";
import mainimg from "../../images/main-img03.jpg";
import { styled } from "styled-components";

const Highlight = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
`;

const About = (props) => {
    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="wpo-about-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12 col-12">
                            <div className="wpo-about-content">
                                <div className="wpo-section-title">
                                    <h2>출원일 선점이 중요한 특허출원</h2>
                                </div>
                                <div className="wpo-about-content-inner">
                                    <p>그러나 변리사 선정부터 출원까지 길게는 1개월 이상 소요</p>
                                    <p>
                                        현재 가진 아이디어만으로 <Highlight>당일 출원번호</Highlight> 확보가 가능한
                                    </p>
                                    <p>인디프로 임시출원 하세요!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <img src={mainimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
