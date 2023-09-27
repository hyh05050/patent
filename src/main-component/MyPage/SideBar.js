import React from "react";
import { Link } from "react-router-dom";
import Services from "../../api/service";
import about from "../../images/blog/about-widget.jpg";
import rp1 from "../../images/recent-posts/img-1.jpg";
import rp2 from "../../images/recent-posts/img-2.jpg";
import rp3 from "../../images/recent-posts/img-3.jpg";

const SideBar = (props) => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
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
        <div className="widget category-widget">
          <h3>마이페이지</h3>
          <ul>
            <li>출원 리스트</li>
            <li>내정보 수정</li>
            <li>로그아웃</li>
          </ul>
        </div>

        <div className="wpo-contact-widget widget">
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
