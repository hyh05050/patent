import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/main-logo.png";
import Attorneys from "../../api/attorneys";
import elps_logo from "../../images/elps_logo.png";

const AboutPage = () => {
  const AttorneysDetails = Attorneys.find((item) => item.Id === "5");

  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle
        pageTitle={"인디프로(Indieipro)"}
        pageSubTitle={"당신의 아이디어를 더 빛나게 해 줄 단 하나의 특허출원 솔루션"}
      />
      <section className="about-wrap-layout1">
        <div className="attorney-pg-area section-padding">
          <div className="container">
            <div className="attorney-info-wrap">
              <div className="row align-items-center">
                <div className="col col-lg-6 col-sm-12 mx-auto">
                  <div className="attorney-info-img text-center">
                    <img src={AttorneysDetails.AtImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="exprience-area">
              <div className="row">
                <h2>손보남 대표</h2>
                <div className="col-lg-12">
                  <div className="education-area ex-wiget">
                    <h2>학력</h2>
                    <ul>
                      <li>서울과학고등학교 조기졸업</li>
                      <li>연세대학교 전기전자공학부</li>
                      <li>
                        연세대학교 법무대학원 지식재산권법무 수석졸업
                        <br />
                        (논문: 특허권 실시료 산정에 대한 국내외 사례 연구)
                      </li>
                    </ul>
                  </div>

                  <div className="education-area ex-wiget">
                    <h2>경력</h2>
                    <ul>
                      <li>(現) 인디프 대표</li>
                      <li>(現) 특허법률사무소 동행 파트너 변리사</li>
                      <li>(現) 국민은행 기술평가 심사역</li>
                      <li>(現) 삼성전자 특허 전담 대리인</li>
                      <li>(現) LG전자 특허 전담 대리인</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-wrap-layout1" style={{ background: "#ededed" }}>
        <div className="attorney-pg-area section-padding">
          <div className="container">
            <div className="timeline-area">
              <div className="row align-items-center">
                <h2>회사 연혁</h2>

                <div className="timeline">
                  <h2 className="timeline__item timeline__item--year">2022</h2>

                  <div className="timeline__item">
                    <h3 className="timeline__title">
                      <p>2022. 12</p> 인디프 상표 출원 및 IP 매칭/관리 소프트웨어 특허출원
                    </h3>
                  </div>

                  <h2 className="timeline__item timeline__item--year">2023</h2>

                  <div className="timeline__item">
                    <h3 className="timeline__title">
                      <p>2023. 03</p> 특허청 IP 데이터기프트 제도 수혜기업 선정
                    </h3>
                  </div>

                  <div className="timeline__item">
                    <h3 className="timeline__title">
                      <p>2023. 04</p> 2023 예비창업패키지 선정
                    </h3>
                  </div>

                  <div className="timeline__item">
                    <h3 className="timeline__title">
                      <p>2023. 04</p> 용산구 청년창업지원센터 입주
                    </h3>
                  </div>

                  <div className="timeline__item">
                    <h3 className="timeline__title">
                      <p>2023. 05</p> 2023 데이터바우처 AI 가공부문 수혜기업 선정
                    </h3>
                  </div>

                  <div className="timeline__item">
                    <h3 className="timeline__title">
                      <p>2023. 06</p> 인디프 사업 개시
                    </h3>
                  </div>

                  <div className="timeline__item">
                    <h3 className="timeline__title">
                      <p>2023. 06</p> 여성기업인증
                    </h3>
                  </div>

                  <div className="timeline__item">
                    <h3 className="timeline__title">
                      <p>2023. 08</p> 인디프 AI 연구개발전담부서 설립
                    </h3>
                  </div>

                  <div className="timeline__item">
                    <h3 className="timeline__title">
                      <p>2023. 10</p> 임시출원 솔루션 ‘인디프로’ 서비스 론칭
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-wrap-layout1">
        <div className="attorney-pg-area section-padding">
          <div className="container">
            <div className="language-area">
              <h2>파트너 사</h2>
              <hr />
              <ul>
                <li>
                  <img src={elps_logo} style={{ background: "black", padding: "10px" }} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
