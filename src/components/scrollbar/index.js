import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./style.css";
import { styled } from "styled-components";
import kakaoBtn from "../../images/consult_kakao.png";

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

const Scrollbar = () => {
  const addKakaoChannel = () => {
    if (window.Kakao) {
      //카카오 스크립트가 로드된 경우
      const kakao = window.Kakao;

      //인증이 안되어있는 경우 인증한다.
      if (!kakao.isInitialized()) {
        kakao.init("2bc548c19e82da4dea56f49265674c81");
      }

      kakao.Channel.addChannel({
        channelPublicId: "_GhGyxj", //카카오 채널 ID
      });
    }
  };

  const onClickConsult = () => {
    addKakaoChannel();
  };

  return (
    <div className="col-lg-12">
      <div className="header-menu">
        <ul className="smothscroll">
          <li>
            <AnchorLink href="#scrool">
              <i className="ti-arrow-up"></i>
            </AnchorLink>
          </li>
        </ul>
        <div id="kakaoButton">
          <KakaoConsult onClick={onClickConsult}></KakaoConsult>
        </div>
      </div>
    </div>
  );
};

export default Scrollbar;
