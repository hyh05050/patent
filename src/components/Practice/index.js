import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import Services from "../../api/service";

const Practice = (props) => {
    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const Tabs = [
        {
            Id: "1",
            tabItem: "인디프로 신청 및 결제",
            tabNumber: "01",
        },
        {
            Id: "2",
            tabItem: "자료 업로드",
            tabNumber: "02",
        },
        {
            Id: "3",
            tabItem: "변리사 유선 상담",
            tabNumber: "03",
        },
        {
            Id: "4",
            tabItem: "특허 관련 정보",
            tabNumber: "04",
        },
        {
            Id: "5",
            tabItem: "임시출원 완료",
            tabNumber: "05",
        },
    ];

    return (
        <section className="wpo-service-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="wpo-section-title">
                            <h2>인디프로 업무 프로세스 5단계</h2>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-2">
                        <div className="wpo-section-title">
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-4 col-12 service-thumbs">
                        <Nav tabs className="service-thumbs-outer">
                            {Tabs.map((tab, titem) => (
                                <NavItem key={titem}>
                                    <NavLink
                                        className={`service-thumb ${classnames({ active: activeTab === tab.Id })}`}
                                        onClick={() => {
                                            toggle(tab.Id);
                                        }}
                                    >
                                        {tab.tabItem}
                                        <span className="number">{tab.tabNumber}</span>
                                    </NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    </div>
                    <div className="col col-lg-8 col-12 service-content">
                        <div className="service-content-outer">
                            <TabContent activeTab={activeTab}>
                                {Services.map((service, Sitem) => (
                                    <TabPane tabId={service.Id} key={Sitem}>
                                        <div className="service-data">
                                            <div className="service-data-img">
                                                <img src={service.sImg} alt="" style={{ maxHeight: "606px" }} />
                                                <div className="service-data-text">
                                                    <h3 style={{ color: "white" }}>{service.sTitle}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPane>
                                ))}
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Practice;
