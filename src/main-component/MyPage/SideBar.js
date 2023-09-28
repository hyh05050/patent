import React from "react";
import { Link } from "react-router-dom";
import about from "../../images/blog/about-widget.jpg";
import { removeCookie } from "../../common/cookie";

const SideBar = (props) => {
    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const ClickHandler2 = () => {
        removeCookie("isLogin");
        window.location.href = "/";
    };

    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={about} alt="" />
                    </div>
                    <h4>Jenny Watson</h4>
                    <p>user@gmail.com</p>
                    <div className="aw-shape"></div>
                </div>
                <div className="widget category-widget d-none d-sm-block">
                    <h3>마이페이지</h3>
                    <ul style={{ cursor: "pointer" }}>
                        <li>출원 리스트</li>
                        <li>내정보 수정</li>
                        <li onClick={ClickHandler2}>로그아웃</li>
                    </ul>
                </div>

                <div className="wpo-contact-widget widget d-none d-sm-block mb-5">
                    <h2>
                        How We Can <br /> Help You!
                    </h2>
                    <p></p>
                    <Link onClick={ClickHandler} to="/qna">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
