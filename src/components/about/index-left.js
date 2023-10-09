import React from "react";
import mainImg from "../../images/main-img02.jpg";
import { styled } from "styled-components";
import kakaoBtn from "../../images/consult_kakao.png";

const Highlight = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
`;

const KakaoConsult = styled.button`
    background: url(${kakaoBtn}) no-repeat center center;
    background-size: 100% auto;
    border: none;
    width: 100px; /* adjust to your image width */
    height: 50px; /* adjust to your image height */
    cursor: pointer;
    outline: none;
    transition: opacity 0.3s;
`;

const AboutLeft = (props) => {
    const addKakaoChannel = () => {
        if (window.Kakao) {
            //카카오 스크립트가 로드된 경우
            const kakao = window.Kakao;

            //인증이 안되어있는 경우 인증한다.
            if (!kakao.isInitialized()) {
                kakao.init("a3ea761f4c48c81f0f519949e607ca55"); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
            }

            kakao.Channel.addChannel({
                channelPublicId: "_ZhuuG", //카카오 채널 ID
            });
        }
    };

    const onClickConsult = () => {
        addKakaoChannel();
    };

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
                                    <p>
                                        따라서 현재 보유하고 있는 사업계획서, 연구개발계획서, 연구노트 등으로도
                                        임시출원이 가능합니다!
                                    </p>
                                    <p>(한글, 워드, pdf, ppt, 기타 그림파일… 모두 가능)</p>
                                    <div className="signeture">
                                        <h4>그래도 고민이 된다면 상담신청하세요!</h4>
                                        <div id="kakaoButton">
                                            <KakaoConsult onClick={onClickConsult}></KakaoConsult>
                                        </div>
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
