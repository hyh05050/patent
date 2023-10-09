import React from "react";
import { Link } from "react-router-dom";
import about from "../../images/blog/about-widget.jpg";
import { getLoginInfo, removeLoginInfo } from "../../common/loginInfo";
import { useRecoilState } from "recoil";
import { myInfoModalAtom } from "../../model/Modal";

const Sidebar = (props) => {
    const [myInfoModal, setMyInfoModal] = useRecoilState(myInfoModalAtom);

    const onClickMyInfoChange = () => {
        setMyInfoModal({
            ...myInfoModal,
            modalState: true,
        });
    };

    const onClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const onClickLogout = () => {
        removeLoginInfo();
        window.location.href = "/";
    };

    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    {/* <div className="img-holder">
                        <img src={about} alt="" />
                    </div> */}
                    <h4>{getLoginInfo().humanName}</h4>
                    <p>{getLoginInfo().accountKey}</p>
                    <div className="aw-shape"></div>
                </div>
                <div className="widget category-widget d-none d-sm-block">
                    <h3>마이페이지</h3>
                    <ul style={{ cursor: "pointer" }}>
                        {/* <li onClick={onClickMyInfoChange}>내정보 변경</li> */}
                        <li onClick={onClickLogout}>로그아웃</li>
                    </ul>
                </div>

                <div className="wpo-contact-widget widget d-none d-sm-block mb-5">
                    <h2>
                        How We Can <br /> Help You!
                    </h2>
                    <p></p>
                    <Link onClick={onClickHandler} to="/qna">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
