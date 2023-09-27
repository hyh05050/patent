import React from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../components/ModalVideo";

import blogs from "../../api/blogs";
import SideBar from "./SideBar";

const Contents = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-blog-pg-section section-padding">
      <div className="container">
        <div className="row">
          <SideBar blLeft={props.blLeft} />
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              <div className="row">
                <div className="begin-dashboard-topmenu-box btn-begin-mypage-menu active col">
                  <p>임시출원 준비중</p>
                  <h3 className="begin-blue">
                    0<span className="begin-application-desc">건</span>
                  </h3>
                </div>
                <div className="begin-dashboard-topmenu-box btn-begin-mypage-menu false col">
                  <p>임시출원 완료</p>
                  <h3 className="begin-blue">
                    0<span className="begin-application-desc">건</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contents;
