import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo-2.svg";
import Services3 from "../../api/service3";

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
                                <div className="logo widget-title">
                                    <img src={Logo} alt="logo" />
                                </div>
                                <p>당신의 아이디어를 더 빛나게 해 줄 단 하나의 특허출원 솔루션, 인디프로(Indieipro)</p>
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
                            <div className="widget tag-widget">
                                <div className="widget-title">
                                    <h3>by Tag</h3>
                                </div>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} to="/about">
                                            Patent Attorney
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/home">
                                            Business
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/home">
                                            Patent
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/qna">
                                            Patent Inquiry
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/pricing">
                                            Consultation Price
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
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
            </div> */}
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
