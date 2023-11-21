import React from "react";
import { Link } from "react-router-dom";
import Services3 from "../../api/service3";
import Logo from "../../images/footer-logo.png";

import ins1 from "../../images/ft-icon/1.png";
import ins2 from "../../images/ft-icon/2.png";
import ins3 from "../../images/ft-icon/3.png";
import ins4 from "../../images/ft-icon/4.png";

const Footer = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title" style={{ margin: "0" }}>
                                    <img src={Logo} alt="logo" />
                                </div>
                                <p style={{ wordBreak: "keep-all" }}>
                                    당신의 아이디어를 더 빛나게 해 줄<br />단 하나의 특허출원 솔루션, 인디프로
                                </p>
                                <br/>
                                <p>
                                    <a href="https://indie-ip.notion.site/3ff1f410ecd04bb18801fd3f53ef2147?pvs=4" style={{ color: '#FFF' }} >
                                        이용약관
                                    </a>
                                </p>
                                <p>
                                    <a href="https://indie-ip.notion.site/0c10be6b331a4d73981521148680c6ed?pvs=4" style={{ color: '#FFF' }} >
                                        개인정보처리방침
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Our Services </h3>
                                </div>
                                <ul>
                                    {Services3.slice(0, 4).map((service, Sitem) => (
                                        <li key={Sitem}>{service.sTitle}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>사업자 정보</h3>
                                </div>
                                <div className="text-left">
                                    <p className="mb-0" style={{ fontSize: "15px" }}>
                                        <strong>상호명 </strong>인디프로 <strong>대표 </strong>손보남
                                        <br />
                                        <strong>사업자등록번호 </strong>507-53-00884
                                        <br />
                                        <strong>주소 </strong> 서울 용산구 서빙고로 17 용산센트럴파크
                                        <br />
                                        공공시설동 4층 청년창업지원센터 17실
                                        <br />
                                        <strong>대표번호 </strong>0507-1304-6037
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget social-widget">
                                <div className="widget-title">
                                    <h3>Social Media</h3>
                                </div>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i>
                                                <img src={ins1} alt="" />
                                            </i>{" "}
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i>
                                                <img src={ins2} alt="" />
                                            </i>{" "}
                                            Twitter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i>
                                                <img src={ins3} alt="" />
                                            </i>{" "}
                                            Instagram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i>
                                                <img src={ins4} alt="" />
                                            </i>{" "}
                                            Youtube
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">
                                {" "}
                                Copyright &copy; 2023 Indieipro by{" "}
                                <Link onClick={ClickHandler} to="/">
                                    HeroMakers
                                </Link>
                                . All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
