import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Services from '../../api/service';


const Practice = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }



    const Tabs = [
        {
            Id: '1',
            tabItem: 'Personal Injury',
            tabNumber:'01'
        },
        {
            Id: '2',
            tabItem: 'Family Law',
            tabNumber:'02'
        },
        {
            Id: '3',
            tabItem: 'Criminal Law',
            tabNumber:'03'
        },
        {
            Id: '4',
            tabItem: 'Education Law',
            tabNumber:'04'
        },
        {
            Id: '5',
            tabItem: 'Real Estate Law',
            tabNumber:'05'
        },
        {
            Id: '6',
            tabItem: 'Business Law',
            tabNumber:'06'
        },
    ]



    return (

        <section className="wpo-service-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>The Area Where We Practice Our Law</h2>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-2">
                        <div className="wpo-section-title">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
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
                                        onClick={() => { toggle(tab.Id); }}
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
                                                    <img src={service.sImg} alt=""/>
                                                    <div className="service-data-text">
                                                        <h3><Link onClick={ClickHandler} to={`/practice-single/${service.Id}`}>{service.sTitle}</Link></h3>
                                                        <p>{service.description}<Link onClick={ClickHandler} to={`/practice-single/${service.Id}`}>More About..</Link></p>
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
    )
}


export default Practice;